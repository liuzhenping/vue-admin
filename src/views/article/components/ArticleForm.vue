<template>
    <el-card class="vue-card">
        <el-form :model="article" :rules="rules" ref="article">
            <el-form-item prop="title">
                <el-input v-model="article.title" placeholder="输入文章标题"></el-input>
            </el-form-item>
            <el-form-item prop="content">
                <ckeditor :editor="editor" v-model="article.content"></ckeditor>
            </el-form-item>
            <el-form-item prop="tagList">
                <el-select
                        v-model="article.tagList"
                        value-key="id"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="添加文章标签">
                    <el-option
                            v-for="tag in tagOptions"
                            :key="tag.id"
                            :label="tag.label"
                            :value="tag">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('article')">保存</el-button>
                <el-button @click="resetForm('article')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <span>恭喜你，保存成功</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="clearForm('article')">再写一篇</el-button>
                <el-button type="primary" @click="viewArticle">查看文档</el-button>
            </span>
        </el-dialog>
    </el-card>
</template>
<script>
    import ClassicEditor from '../../../components/ckeditor/ckeditor'
    import CKEditor from '@ckeditor/ckeditor5-vue'
    import articleAPI from "../../../api/article";
    import tagAPI from "../../../api/tag";

    export default {
        name: "ArticleForm",
        components: {
            ckeditor: CKEditor.component
        },
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                editor: ClassicEditor,
                article: {
                    id: null,
                    title: '',
                    content: '',
                    tagList: []
                },
                tagOptions: [],
                dialogVisible: false,
                rules: {
                    title: [
                        {required: true, message: '请输入文章标题', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入文章内容', trigger: 'blur'}
                    ],
                    tagList: [
                        {required: true, message: '请添加文章标签', trigger: 'blur'}
                    ]
                },
            }
        },
        created() {
            this.loadTagList()
            if (this.isEdit) {
                const id = this.$route.params && this.$route.params.id
                this.fetchData(id)
            }
        },
        methods: {
            loadTagList() {
                tagAPI.getAll().then(response => {
                    this.tagOptions = response.items;
                }).catch(err => {
                    console.log(err)
                })
            },
            filterTagList() {
                for (let index in this.article.tagList) {
                    let tag = this.article.tagList[index]
                    if (typeof tag == "string") {
                        this.article.tagList.splice(index, 1);
                        this.article.tagList.push({id: null, label: tag})
                    }
                }
            },
            fetchData(id) {
                articleAPI.getById(id).then(response => {
                    this.article = response;
                }).catch(err => {
                    console.log(err)
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.filterTagList();
                        articleAPI.save(this.article).then(response => {
                            this.dialogVisible = true
                            this.article.id = response.id
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
                this.article.id = null
            },
            clearForm(formName) {
                this.dialogVisible = false
                this.resetForm(formName)
                this.loadTagList()
            },
            viewArticle() {
                this.dialogVisible = false
                this.$router.push({path: '/article/detail/' + this.article.id})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-select {
        width: 100%;
    }
</style>
<template>
    <el-card class="vue-card">
        <el-row type="flex" justify="center">
            <a id="logo">
                <img src="../../assets/images/book.svg">
                <span>{{this.article.title}}</span>
            </a>
        </el-row>
        <el-row type="flex" justify="center">
            <span class="article-createInfo">
                {{this.article.createBy}}  创建于  <i class="el-icon-date"></i>  {{this.article.createDate | formatDate}}
            </span>
        </el-row>
        <el-divider></el-divider>
        <div id="article-content">
            <div v-html="this.article.content"></div>
        </div>
        <tag-list :tagList="this.article.tagList"></tag-list>
        <el-divider>
            <el-button icon="el-icon-edit-outline" circle @click="editArticle"></el-button>
        </el-divider>
    </el-card>
</template>
<script>
    import articleAPI from "../../api/article";
    import TagList from '../article/components/TagList'

    let moment = require("moment");
    export default {
        name: "ViewArticle",
        components: {TagList},
        data() {
            return {
                article: {}
            }
        },
        created() {
            const id = this.$route.params && this.$route.params.id
            this.getArticleDetail(id);
        },
        methods: {
            getArticleDetail(id) {
                articleAPI.getById(id).then(response => {
                    this.article = response
                }).catch(err => {
                    console.log(err)
                })
            },
            editArticle() {
                this.$router.push({path: '/article/edit/' + this.article.id})
            }
        },
        filters: {
            formatDate(time) {
                let dateFormat = 'YYYY-MM-DD HH:mm'
                return moment(time).format(dateFormat)
            }
        },
        watch: {
            '$route': function (to) {
                this.getArticleDetail(to.params.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #logo {
        display: inline-block;
        font-size: 1.3em;
        line-height: 40px;
        color: #273849;
        font-weight: bold;
        text-decoration: none;

        img {
            vertical-align: middle;
            margin-right: 6px;
            width: 30px;
            height: 30px;
            border: none;
        }
    }

    .article-createInfo {
        color: #808080;
        text-align: center;
        margin-top: 10px;
    }

    #article-content {
        min-height: 585px;
        margin-bottom: 30px;
        line-height: 28px;
        font-size: 16px;
    }
</style>
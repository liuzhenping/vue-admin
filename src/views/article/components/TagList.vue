<template>
    <el-row>
        <el-button size="mini" class="vue-tag" round v-for="tag in tagList"
                   v-bind:key="tag.id">{{tag.label}}
        </el-button>
    </el-row>
</template>

<script>
    export default {
        name: "TagList",
        props: {
            tagList: {
                type: Array,
                default: null
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
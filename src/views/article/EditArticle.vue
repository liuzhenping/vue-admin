<template>
    <article-form :is-edit="true"></article-form>
</template>
<script>
    import ArticleForm from './components/ArticleForm'

    export default {
        name: "EditArticle",
        components: {ArticleForm}
    }
</script>

<style scoped>

</style>
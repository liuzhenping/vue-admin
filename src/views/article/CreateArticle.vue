<template>
    <article-form :is-edit="false"></article-form>
</template>

<script>
    import ArticleForm from './components/ArticleForm'

    export default {
        name: 'CreateArticle',
        components: { ArticleForm }
    }
</script>

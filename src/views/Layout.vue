<template>
    <div id="application" class="full-container">
        <header id="application-header" class="full-width">
            <div id="application-header-container">
                <div id="application-header-left">
                    <a id="logo" href="/">
                        <img src="../assets/logo.png">
                        <span>Vue Admin</span>
                    </a>
                </div>
            </div>
        </header>
        <div id="application-main-wrapper" class="full-width">
            <aside id="application-aside" class="full-height">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#edf4f4"
                        text-color="#000000"
                        active-text-color="#409EFF">
                    <router-link to="/">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">模块一</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </aside>
            <div id="application-main" class="full-height">
                <div id="application-main-content">
                    <transition enter-active-class="animated zoomIn" leave-active-class="animated fadeOut"
                                mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        components: {},
        methods: {}
    }
</script>

<style lang="scss" scoped>
    #application {
        #application-header {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            background: #fff;
            box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, .1);
            z-index: 99;
            box-sizing: border-box;

            #application-header-container {
                margin-top: 10px;

                #application-header-left {
                    float: left;
                    margin-left: 20px;

                    #logo {
                        display: inline-block;
                        font-size: 1.6em;
                        line-height: 40px;
                        color: #273849;
                        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                        font-weight: 500;
                        text-decoration: none;

                        img {
                            vertical-align: middle;
                            margin-right: 8px;
                            width: 40px;
                            height: 40px;
                            border: none;
                        }
                    }
                }
            }
        }

        #application-main-wrapper {
            position: absolute;
            top: 60px;
            left: 0;
            height: calc(100% - 60px);

            #application-aside {
                position: absolute;
                top: 0;
                left: 0;
                width: 260px;
                background-color: #e6ecf1;
                box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, .1);
            }

            #application-main {
                padding-left: 260px;
                overflow-y: auto;

                #application-main-content {
                    padding: 20px;
                }
            }
        }
    }
</style>
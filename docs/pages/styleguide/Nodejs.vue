<template>
    <div>
        <h1 class="title is-spaced">Node.js & Javascript code style guide</h1>
        <h2 class="subtitle">
This is a guide for writing consistent and aesthetically pleasing node.js code. It is inspired by what is popular within the community, and flavored with some personal opinions.</h2>
        <hr>

        <div class="content">
            <h3>Table of contents</h3>
            <p class="subtitle">Formatting</p>
            <ul>
                <li><a @click.prevent="scrollIntoView('table-of-contents')">2 Spaces for indentation</a></li>
            </ul>
        </div>

        <div class="content" v-for="item in api[0].props" :key="item.link">
            <h3 :id="item.link">{{ item.title }} </h3>
            <div v-html="item.description"></div>
        </div>    

    </div>
</template>

<script>
    import api from './api/nodejs'

    export default {
        data() {
            return {
                api
            }
        },
        methods: {
            scrollIntoView (_id) {
                document.getElementById(_id).scrollIntoView()
            }
        }
    }
</script>

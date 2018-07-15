<template>
    <div>
        <h1 class="title is-spaced">{{ api.title }}</h1>
        <hr>
        <h2 class="subtitle" v-html="api.description"></h2>
        
        <hr>
        <div class="content">
            <h3>Table of contents</h3>
            <span v-for="item in api.content" :key="item.title">
              <p class="subtitle">{{ item.title }}</p>
              <ul>
                <li v-for="subItem in item.content" :key="subItem.title"><a @click.prevent="scrollIntoView(subItem.title)">{{ subItem.title }}</a></li>
              </ul>
            </span>
            
        </div>
        
        <hr>
        <div v-for="item in api.content" :key="item.title">
            <div class="content">
                <h3 :id="item.title">{{ item.title }} </h3>
                <div v-html="item.description"></div>
            </div>
            
            <div v-for="subItem in item.content" :key="subItem.title">
              <div class="content">
                <h4 :id="subItem.title">{{ subItem.title }} </h4>
                <div v-html="subItem.description"></div>
              </div>
              <!-- If you want to highlight hardcoded source-code -->
              <div v-highlightjs v-if="subItem.rightCode">
                <h5 class="is-size-4">Right:</h5>
                <pre><code class="javascript">{{ subItem.rightCode }}</code></pre>
              </div>
              <div v-highlightjs v-if="subItem.wrongCode">
                <h5 class="is-size-4">Wrong:</h5>
                <pre><code class="javascript">{{ subItem.wrongCode }}</code></pre>
              </div>
              <p v-html="subItem.codeComment"></p>
              <div v-highlightjs v-if="subItem.codeCommentCode">
                <pre><code class="javascript">{{ subItem.codeCommentCode }}</code></pre>
              </div>
              <br>
            </div>

            <hr>
        </div> 
        
    </div>
</template>

<script>
import api from "./api/nodejs";


export default {
  data() {
    return {
      api
    };
  },
  methods: {
    scrollIntoView(_id) {
      document.getElementById(_id).scrollIntoView();
    }
  }
};
</script>

<style scoped>
pre {
    padding: 0px;
    margin-top: 5px;
    margin-bottom: 10px;
}
</style>

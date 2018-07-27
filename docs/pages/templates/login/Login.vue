<template>
  <div>
    <h1 class="title is-spaced">Login & Signup</h1>
    <h2 class="subtitle">
      Template
    </h2>
    <hr>

    <Example :component="ExLogin" :code="ExLoginCode" class="ex-login"/>
  </div>
</template>

<script>
import ExLogin from './examples/ExLogin'
import ExLoginCode from '!!raw-loader!./examples/ExLogin'

export default {
  data() {
    return {
      ExLogin,
      ExLoginCode
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>

<template>
    <div class="columns is-vcentered">
      <div class="login column is-4 ">
        <section class="section">
          <div class="has-text-centered">
              <img class="login-logo" src="../../../../assets/vulmajs-logo.png">
          </div>

          <v-login v-model="user"></v-login>

        </section>
      </div>
      <div class="interactive-bg column is-8">
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {}
};
</script>

<style scoped>
.interactive-bg {
  height: 100vh;
  background-color: #00d1b2;
  -webkit-box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  -moz-box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  box-shadow: inset 24px 4px 64px -24px rgba(71, 71, 71, 1);
  padding: 0px;
  background: url(https://unsplash.it/2000/1000);
  background-position: 50%;
  background-size: cover;
  background-blend-mode: screen;
}
@media (max-width: 769px) {
  .interactive-bg {
    display: none;
  }
}

.login-button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}


.login-logo {
  margin: 0 auto;
  margin-bottom: 50px;
  max-height: 50px;
}

.columns {
  margin: 0px;
}
</style>

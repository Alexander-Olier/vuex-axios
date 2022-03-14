<template>
  <div v-for="post in getterPosts" :key="post.id">
    <div class="card">
      <div class="flex">
        <div class="user">
          <div class="flex">
            <div class="img-user"><fa :icon="['fas', 'user']" /></div>
            <h4>Juanito</h4>
          </div>
        </div>
        <div class="icon">
          <a><fa :icon="['fas', 'ellipsis-vertical']" /> </a>
        </div>
      </div>
      <router-link class="content" :to="{ path: '/posts/' + post.id }">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getterPosts() {
      return this.$store.getters.allPosts;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getAllPosts");
  },
};
</script>

<style>
</style>
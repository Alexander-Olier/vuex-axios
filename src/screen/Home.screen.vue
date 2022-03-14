<template>
  <Header />
  <Filter />
  <div class="ctn-cards">
    <List />
  </div>
</template>

<script>
//component
import List from "../components/List.vue";
import Header from "../components/Header.vue";
import Filter from "../components/Filter.vue";

export default {
  //component
  components: { List, Header, Filter },
};
</script>

<style>
</style>
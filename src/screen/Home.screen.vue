<template>
  <Header />
  <Filter />
  <div class="ctn-cards">
    <List v-for="state in states" :key="state.id" :state="state" />
  </div>
</template>

<script>
import EventService from "@/services/EventServices.js";
//component
import List from "../components/List.vue";
import Header from "../components/Header.vue";
import Filter from "../components/Filter.vue";

export default {
  //component
  components: { List, Header, Filter },

  //data
  data() {
    return {
      states: [],
    };
  },

  //get list
  created() {
    EventService.getAllStates()
      .then((response) => {
        this.states = response.data;
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>
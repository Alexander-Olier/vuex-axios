<template>
  <router-link class="card" :to="{ path: '/states/' + this.state.id }">
    <div class="flex">
      <div class="user">
        <div class="flex">
          <div class='img-user'><fa :icon="['fas', 'user']" /> </div>
          <h4>Juanito</h4>
          </div>
        </div>
      <div class="icon"><a><fa :icon="['fas', 'ellipsis-vertical']"/> </a></div>
    </div>
    <div class="content">
     <h3> {{state.title}}</h3>
     <p>{{state.body}}</p>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  props: {
    state: Object,
  },
};
</script>

<style>
</style>
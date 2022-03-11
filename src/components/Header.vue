<template>
  <div>
    <header>
      <div class="logo"><router-link to="/">Logo</router-link></div>
      <nav>
        <ul>
          <li><router-link to="/" class="active">Home</router-link></li>
          <li><router-link to="/">Estados</router-link></li>
          <li><router-link to="/">Productos</router-link></li>
        </ul>
      </nav>
      <div class="users flex">
        <h4>Name</h4>
        <img src="../assets/user.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
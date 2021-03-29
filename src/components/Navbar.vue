<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" to="/products">Vuex List</b-nav-item>
        <b-nav-item href="#" to="/product/new">Vuex Create</b-nav-item>
        <b-nav-item href="#" to="/list">Firestore List</b-nav-item>
        <b-nav-item href="#" to="/list/new">Firestore Create</b-nav-item>
        <b-nav-item href="#" to="/realList">Firebase List</b-nav-item>

       

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
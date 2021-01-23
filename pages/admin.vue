<template>
  <div class="container">
    <b-nav tabs>
      <b-nav-item to="/admin/parcels" active-class="active">Parcels</b-nav-item>
      <b-nav-item to="/admin/employees" active-class="active">Employees</b-nav-item>
    </b-nav>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
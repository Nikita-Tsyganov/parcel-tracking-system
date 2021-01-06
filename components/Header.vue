<template>
  <b-navbar class="mb-4" toggleable="lg" type="dark" variant="primary">
    <div class="container">
      <b-navbar-brand to="/">Track</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/trackinghistory">Tracking History</b-nav-item>
        </b-navbar-nav>

        <!-- For later use with authorization -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ml-auto {
  margin-left: auto;
}
</style>
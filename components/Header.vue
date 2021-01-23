<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <div class="container">
      <b-navbar-brand to="/">Track</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>

        <!-- For later use with authorization -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="$auth.loggedIn">
            <template #button-content>
              <em>{{ $auth.user.id }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else to="/login">Login</b-nav-item>
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
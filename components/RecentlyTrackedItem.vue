<template>
  <div class="mt-5">
    <!-- add v-if to check if anyhting is in storage -->
    <h3>Recently tracked items</h3>
    <div>
      <span>
        <!-- tracking number -->
      </span>
      <span>
        <!-- status -->
      </span>
      <span>
        Last updated:
        <!-- date -->
      </span>
      <b-button variant="danger"> </b-button>
    </div>
    {{ this.$auth.$storage.getLocalStorage(1) }}
  </div>
</template>

<script>
export default {
    props: [
        "trackingItem"
    ]
}
</script>

<style scoped>
</style>
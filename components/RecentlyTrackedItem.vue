<template>
  <div class="mt-5">
    <!-- add v-if to check if anyhting is in storage -->
    <h3>Recently tracked items</h3>
    <div>
      <span>
        {{ trackingItem.id }}
        <!-- tracking id -->
      </span>
      <span>
        {{ trackingItem.events[0].status.status }}
        <!-- status -->
      </span>
      <span>
        Last updated:
        {{ this.$moment(trackingItem.events[0].datetime).format('MMM. D') }}
      </span>
      <!-- datetime -->
      <b-button
        variant="danger"
        @click="this.$auth.$storage.removeLocalStorage(trackingItem.id)"
      ></b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trackingItem'],
}
</script>

<style lang="scss" scoped></style>
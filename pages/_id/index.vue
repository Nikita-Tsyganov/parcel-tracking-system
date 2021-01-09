<template>
  <div>
    <div class="delivery-progress">
      <h5>Delivery progress</h5>
      <ParcelHistory
        :key="parcelHistory.id"
        :parcelHistory="parcelHistory"
        v-for="parcelHistory in parcel.parcelHistories"
        class="mb-2"
      />
    </div>
  </div>
</template>

<script>
import ParcelHistory from '~/components/ParcelHistory.vue'

export default {
  components: {
    ParcelHistory,
  },
  data() {
    return {
      parcel: {},
    }
  },
  created() {
    this.$axios
      .get(`parcels/${this.$route.params.id}`)
      .then((result) => (this.parcel = result.data))
  },
}
</script>

<style lang="scss" scoped>
</style>
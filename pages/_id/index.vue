<template>
  <div>
    <h5 class="mb-4">Delivery progress</h5>
    <h6>
      Information updated: {{ $moment(this.parcel.datetime).format('MMM. D') }}
    </h6>
    <container class="delivery-progress">
      <b-list-group>
        <b-list-group-item>
          <b-row align-h="around">
            <b-col cols=1>Date</b-col>
            <b-col cols=1>Time</b-col>
            <b-col cols=1>Status</b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item class="mt-2">
          <ParcelHistory
            class="mb-2"
            :key="parcelHistory.id"
            :parcelHistory="parcelHistory"
            v-for="parcelHistory in parcel.parcelHistories"
          />
        </b-list-group-item>
      </b-list-group>
    </container>
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
      .$get(`parcels/${this.$route.params.id}`)
      .then((parcel) => (this.parcel = parcel))
  },
}
</script>

<style lang="scss" scoped></style>
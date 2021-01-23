<template>
  <div class="container">
    <div class="tracking-id-input">
      <form>
        <label class="mb-1 font-weight-bold" for="tracking-number-input"
          >Tracking numbers</label
        >
        <b-form-input
          class="rounded-1 py-2"
          id="tracking-number-input"
          name="trackingNumber"
          type="text"
          aria-describedby="tracking-number-input-live-feedback"
          v-model="trackingNumber"
          :state="trackingNumber === '' ? false : null"
          placeholder="Enter up to 24 items, separated by commas or line breaks"
          @keypress.enter.prevent="track"
          @blur="trackingNumber = trackingNumber === null ? '' : trackingNumber"
        ></b-form-input>
        <b-form-invalid-feedback id="tracking-number-input-live-feedback">
          Enter a valid tracking, delivery notice card, or reference number.
        </b-form-invalid-feedback>
        <b-button
          class="px-4 py-2 mt-4"
          squared
          variant="primary"
          @click.prevent="track"
          >Track</b-button
        >
      </form>
    </div>
    <div>
      <RecentlyTrackedItem
        v-for="trackingItem in retrieve"
        :key="trackingItem.id"
        :trackingItem="retrieve"
      />
    </div>
  </div>
</template>

<script>
import RecentlyTrackedItem from '~/components/RecentlyTrackedItem'
export default {
  components: {
    RecentlyTrackedItem,
  },
  data() {
    return {
      trackingNumber: null,
      recentlyTracked: [],
      recentlyTrackedItems: [], //idk
    }
  },
  methods: {
    async track() {
      if (this.trackingNumber !== null && this.trackingNumber !== '') {
        this.$router.push(`/${this.trackingNumber}`)
      }
      const parcel = await this.$store.dispatch(
        'parcels/find',
        this.trackingNumber
      )

      this.recentlyTracked.push(parcel)
      if (process.browser) {
        this.$auth.$storage.setLocalStorage(
          this.trackingNumber,
          this.recentlyTracked
        )
      }
    },
  },
  // issue remaining is with accessing local storage and getting it to the component.
  mounted() {
    var recentlyTrackedItems = [],
      keys = Object.keys(),
      i = keys.length

    while (i--) {
      recentlyTrackedItems.push(this.$auth.$storage.getLocalStorage(i).items)
    }
    console.log(recentlyTrackedItems)
  },
}
</script>

<style lang="scss" scoped></style>
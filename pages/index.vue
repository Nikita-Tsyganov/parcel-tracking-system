<template>
  <div class="container">
    <div class="tracking-id-input">
      <!-- @submit, v-model, etc. for for js functionality, yet to be completed -->
      <form>
        <label class="mb-2" for="trackingID">Tracking numbers</label>
        <b-form-input
          class="mb-4"
          type="text"
          v-model="trackingID"
          name="trackingID"
          placeholder="Enter up to 24 items, separated by commas or line breaks"
        ></b-form-input>
        <b-button squared variant="primary" class="mb-2" type="submit"
          >Track</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import TrackingHistory from '@/pages/TrackingHistory'

export default {
  data() {
    return {
      trackingID: '',
      title: '',
    }
  },
  methods: {
    addTrackingID() {
      const newTrackingID = {
        title: this.title,
      }
      //clear field
      this.title = ''
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
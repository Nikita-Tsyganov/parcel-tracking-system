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
  </div>
</template>

<script>
export default {
  data() {
    return {
      trackingNumber: null,
    }
  },
  //FOR PERSISTENCE, UNTESTED
  mounted() {
    if(localStorage.trackingNumber) {
      this.trackingNumber = JSON.parse(localStorage.trackingNumber)
    }
  },
  //FOR PERSISTENCE, UNTESTED
  watch: {
    trackingNumber(newNumber) { //might have to make into object and do the handler thingy
      localStorage.trackingNumber = JSON.stringify(newNumber)
    }
  },
  methods: {
    track() {
      if (this.trackingNumber !== null && this.trackingNumber !== '') {
        this.$router.push(`/${this.trackingNumber}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
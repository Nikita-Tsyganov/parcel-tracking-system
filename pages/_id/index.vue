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
            <b-col cols="1">Date</b-col>
            <b-col cols="1">Time</b-col>
            <b-col cols="1">Status</b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item class="mt-2">
          <b-row>
            <b-col>
              <ParcelHistory
                class="mb-2"
                :parcelHistory="parcelHistory"
                :key="parcelHistory.id"
                v-for="parcelHistory in this.parcelHistories"
              />
            </b-col>
          </b-row>
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
      parcelData: [],
    }
  },
  created() {
    this.$axios.$get(`parcels/${this.$route.params.id}`).then((parcel) => {
      this.parcel = parcel

      const parcelHistories = parcel.parcelHistories

      for (let i = 0; i < parcelHistories.length; i++) {
        const date = this.$moment(parcelHistories[i].datetime).format('MMM. D')
        const dateData = {
          date,
          parcelHistories: [],
        }

        for (let k = i; k < parcelHistories.length; k++) {
          if (
            date === this.$moment(parcelHistories[k].datetime).format('MMM. D')
          ) {
            dateData.parcelHistories.push(parcelHistories[k])

            if (k !== parcelHistories.length - 1) {
              continue
            }
          }

          i = k
          break
        }

        this.parcelData.push(dateData)
      }
    })
  },
}
</script>

<style lang="scss" scoped></style>
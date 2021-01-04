<template>
  <div>
    <div class="delivery-status">
      <h5>Delivery status</h5>
      <!-- need responsiveness -->
      <b-progress
        :value="value"
        max="max"
        variant="primary"
        class="w-25 mb-2"
        animated
      ></b-progress>
    </div>
    <div class="delivery-progress">
      <h5>Delivery progress</h5>
      <!-- Items ONLY for testing purposes -->
      <b-table
        striped
        hover
        fixed
        stacked="sm"
        :items="items"
        :fields="fields"
        primary-key="date"
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //for test, make dynamic
      value: 25,
      max: 100,

      fields: [
        {
          key: 'date',
          sortable: false,
        },
        {
          key: 'time',
          sortable: false,
        },
        {
          key: 'description',
          sortable: false,
        },
      ],
      //for test
      items: [
        { date: '01-01-2021', time: '00:00', description: 'Package sent' },
        {
          date: '01-01-2021',
          time: '00:01',
          description: 'Package In-transit',
        },
        { date: '02-01-2021', time: '00:02', description: 'Package Arrived' },
      ],
    }
  },
  methods: {
    //method for updating progress bar
    //method for getting delivery statuses... I think
  },
}
</script>

<style lang="scss" scoped>
.b-table {
  width: 35%;
}
</style>

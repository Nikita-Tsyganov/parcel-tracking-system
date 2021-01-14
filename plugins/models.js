import api from '~/utils/api.js'

export default (context, inject) => {
  const baseAPI = api(context.$axios)

  inject('Employee', baseAPI('employees'))
  inject('Parcel', baseAPI('parcels'))
  inject('ParcelHistory', baseAPI('parcels-histories'))
  inject('Status', baseAPI('statuses'))
}

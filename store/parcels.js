import {
  baseState,
  baseGetters,
  baseMutations,
  baseActions,
} from '../utils/store.js'

export const state = baseState('parcels')

export const getters = baseGetters('parcels')

export const mutations = baseMutations('parcels')

export const actions = baseActions('$Parcel')

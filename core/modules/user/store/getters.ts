import { GetterTree } from 'vuex'
import RootState from '@vue-storefront/core/types/RootState'
import UserState from '../types/UserState'

const getters: GetterTree<UserState, RootState> = {
  isLoggedIn (state) {
    return state.current !== null
  },
  isLocalDataLoaded: state => state.local_data_loaded,
  getUserToken (state) {
    return state.token
  },
  getOrdersHistory (state) {
    return state.orders_history ? state.orders_history.items : []
  },
  getProductReviews (state) {
    return state.product_reviews ? state.product_reviews : []
  },
  getUserWishlist (state) {
    return state.user_wishlist ? state.user_wishlist : []
  },
  getToken (state) {
    return state.token
  },
  getUserEmail (state, getters) {
    return getters.isLoggedIn ? state.current.email : null
  }
}

export default getters

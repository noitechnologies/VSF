import { mapGetters } from 'vuex';

export const UserProductReviews = {
  name: 'UserProductReviews',
  computed: {
    ...mapGetters('user', ['getProductReviews']),
    productReviews () {
      return this.getProductReviews
    },
    isReviewListEmpty () {
      return this.getProductReviews.length < 1
    }
  }
}
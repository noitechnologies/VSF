import wishlistMountedMixin from '@vue-storefront/core/modules/wishlist/mixins/wishlistMountedMixin'
import { mapGetters } from 'vuex'

export const WishlistButton = {
  mixins: [wishlistMountedMixin],
  computed: {
    ...mapGetters('user', ['getMyWishlist']),
    getWishlistItemsCount () {
      return this.getMyWishlist.length
    }
  },
  methods: {
    toggleWishlist () {
      this.$store.dispatch('ui/toggleWishlist')
    }
  }
}

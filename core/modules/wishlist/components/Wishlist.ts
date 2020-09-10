import { WishlistModule } from '../'
import wishlistMountedMixin from '@vue-storefront/core/modules/wishlist/mixins/wishlistMountedMixin'
import { registerModule } from '@vue-storefront/core/lib/modules';
import { mapGetters } from 'vuex';

export const Wishlist = {
  name: 'Wishlist',
  created () {
    registerModule(WishlistModule)
  },
  computed: {
    ...mapGetters('user', ['getMyWishlist']),
    isWishlistOpen () {
      return this.$store.state.ui.wishlist
    },
    productsInWishlist () {
      return this.getMyWishlist
    }
  },
  methods: {
    closeWishlist () {
      this.$store.dispatch('ui/toggleWishlist')
    }
  }
}

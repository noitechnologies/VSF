import { WishlistModule } from '../'
import { registerModule } from '@vue-storefront/core/lib/modules';
import { mapGetters } from 'vuex';

export const IsOnWishlist = {
  name: 'isOnWishlist',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  created () {
    registerModule(WishlistModule)
  },
  computed: {
    ...mapGetters('user', ['getUserWishlist']),
    isOnWishlist () {
      if (this.getUserWishlist.some(p => p.sku === this.product.sku)) {
        return true
      }
      return false
    }
  }
}

import Product from '@vue-storefront/core/modules/catalog/types/Product'
import { WishlistModule } from '../'
import { registerModule } from '@vue-storefront/core/lib/modules';

export const RemoveFromWishlist = {
  name: 'RemoveFromWishlist',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  created () {
    registerModule(WishlistModule)
  },
  methods: {
    removeFromWishlist (product: Product) {
      return this.$store.state['user'] ? this.$store.dispatch('user/removeItemFromWishlist', product.id) : false
    }
  }
}

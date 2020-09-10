import Product from '@vue-storefront/core/modules/catalog/types/Product'
import { WishlistModule } from '../'
import { registerModule } from '@vue-storefront/core/lib/modules';

export const AddToWishlist = {
  name: 'AddToWishlist',
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
    addToWishlist (product: Product) {
      return this.$store.state['user'] ? this.$store.dispatch('user/addItemToWishlist', product.id) : false
    }
  }
}

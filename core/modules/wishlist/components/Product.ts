import Product from '@vue-storefront/core/modules/catalog/types/Product'

export const WishlistProduct = {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    thumbnail () {
      return this.getThumbnail(this.product.image, 150, 150)
    }
  },
  methods: {
    removeFromWishlist (product: Product) {
      return this.$store.state['user'] ? this.$store.dispatch('user/removeItemFromWishlist', product.id) : false
    }
  }
}

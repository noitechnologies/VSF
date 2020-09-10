import { mapGetters } from 'vuex'

export const WishlistButton = {
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

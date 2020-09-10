import { mapGetters } from 'vuex'

export const WishlistButton = {
  computed: {
    ...mapGetters('user', ['getUserWishlist']),
    getWishlistItemsCount () {
      return this.getUserWishlist.length
    }
  },
  methods: {
    toggleWishlist () {
      this.$store.dispatch('ui/toggleWishlist')
    }
  }
}

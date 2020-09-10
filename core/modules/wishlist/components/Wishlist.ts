import { WishlistModule } from '../'
import { registerModule } from '@vue-storefront/core/lib/modules';
import { mapGetters } from 'vuex';

export const Wishlist = {
  name: 'Wishlist',
  created () {
    registerModule(WishlistModule)
  },
  computed: {
    ...mapGetters('user', ['getUserWishlist']),
    isWishlistOpen () {
      return this.$store.state.ui.wishlist
    },
    productsInWishlist () {
      return this.getUserWishlist
    }
  },
  methods: {
    closeWishlist () {
      this.$store.dispatch('ui/toggleWishlist')
    },
    clearWishlist () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('Are you sure you would like to remove all the items from the wishlist?'),
        action1: { label: this.$t('OK'),
          action: () => {
            return this.$store.state['user'] ? this.$store.dispatch('user/clearWishlist') : false
          }
        },
        action2: { label: this.$t('Cancel'), action: 'close' },
        hasNoTimeout: true
      })
    }
  }
}

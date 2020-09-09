import { mapGetters } from 'vuex';

export const UserWishlist = {
  name: 'UserWishlist',
  computed: {
    ...mapGetters('user', ['getMyWishlist']),
    myWishlist () {
      console.log("=======this.getMyWishlistss========"+JSON.stringify(this.getMyWishlist))
      return this.getMyWishlist
    },
    isMyWishlistEmpty () {
      return this.getMyWishlist.length < 1
    }
  }
}
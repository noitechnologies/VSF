import { mapGetters } from 'vuex';

export const UserWishlist = {
  name: 'UserWishlist',
  computed: {
    ...mapGetters('user', ['getUserWishlist']),
    userWishlist () {
      console.log("=======this.getUserWishlistss========"+JSON.stringify(this.getUserWishlist))
      return this.getUserWishlist
    },
    isUserWishlistEmpty () {
      return this.getUserWishlist.length < 1
    }
  }
}
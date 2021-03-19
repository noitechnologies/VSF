<template>
  <!--
  <div v-if="!isCheckoutPage" class="hidden lg:flex w-full justify-center items-center py-2 bg-grey-lighter">
    <span class="uppercase text-xs tracking-md text-grey-dark font-medium">{{ announcement }}</span>
  </div>
  -->
  <marquee style="width: 100%;background-color: #777171;font-family:Cursive;font-size:20pt;color:#f23f00;height:29px;">This is a demo site and no orders will be fulfilled from this store.</marquee>
</template>

<script>
import CurrentPage from 'theme/mixins/currentPage'

export default {
  mixins: [CurrentPage],
  computed: {
    announcement () {
      return 'Free standard shipping on all United States orders over $100'
    }
  }
}
</script>

<template>
  <div class="row center-xs">
    <div
      class="col-sm-4 pb15"
      v-for="(tile, index) in social_tiles"
      :key="index"
    >
      <div
        class="tile center-xs middle-xs"
      >
        <img
          class="tile-image"
          v-lazy="tile.image"
          :alt="tile.alt"
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TileLinks',
  data () {
    return {
      social_tiles: [
        {
          image: '/assets/static_images/img6.jpg',
          alt: 'Woman practicing on the beach'
        },
        {
          image: '/assets/static_images/img1.jpg',
          alt: 'Man practicing on the beach'
        },
        {
          image: '/assets/static_images/img3.jpg',
          alt: 'Woman drinks water form the bottle on the beach'
        },
        {
          image: '/assets/static_images/img2.jpg',
          alt: 'Man rests on the beach'
        },
        {
          image: '/assets/static_images/img5.jpg',
          alt: 'Woman practicing on the beach'
        },
        {
          image: '/assets/static_images/img4.jpg',
          alt: 'Man is holding a watter bottle'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~theme/css/animations/transitions';

.tile {
  display: flex;
  overflow: hidden;
}

.tile-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s $motion-main;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
}
</style>

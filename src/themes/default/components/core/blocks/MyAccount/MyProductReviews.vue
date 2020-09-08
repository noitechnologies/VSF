<template>
  <div class="mb35">
    <div class="row mb15">
      <div class="col-xs-12 col-sm-6">
        <h3 class="m0 mb5">
          {{ $t('My product reviews') }}
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12" v-show="!isReviewListEmpty">
        <table class="brdr-1 brdr-cl-bg-secondary">
          <thead>
            <tr>
              <th class="p20 serif lh20">
                {{ $t('Product') }}
              </th>
              <th class="p20 serif lh20 hide-on-xs">
                {{ $t('Date and time') }}
              </th>
              <th class="p20 serif lh20 hide-on-xs">
                {{ $t('Review') }}
              </th>
              <th class="p20 serif lh20 hide-on-xs">
                {{ $t('Status') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="brdr-top-1 brdr-cl-bg-secondary" v-for="productReview in productReviews" :key="productReview.entity_id">
              <td class="fs-medium lh25">
                {{ productReview.product }}
              </td>
              <td class="fs-medium lh25 hide-on-xs">
                {{ productReview.created_at | date(null, storeView) }}
              </td>
              <td class="fs-medium lh25 hide-on-xs">
                {{ productReview.detail }}
              </td>
              <td class="fs-medium lh25 hide-on-xs">
                {{ productReview.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12 h4" v-show="isReviewListEmpty">
        <p>{{ $t('No reviews yet') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {UserProductReviews} from '@vue-storefront/core/modules/user/components/UserProductReviews'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

export default {
  mixins: [UserProductReviews],
  computed: {
    storeView () {
      return currentStoreView()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/base/global_vars';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(secondary, $colors-background);

table {
  border-collapse: collapse;
  width: 100%;

  th, td {
    text-align: left;
    padding: 20px;

    @media (max-width: 1199px) {
      padding: 10px;
    }

    @media (max-width: 767px) {
      text-align: center;
    }

    &.hide-on-xs {

      @media (max-width: 767px) {
        display: none;
      }

    }

  }

  i {
    vertical-align: middle;
  }

}

.dropdown {
  display: block;
  margin: -20px;
  padding: 20px;

  @media (max-width: 1199px) {
    margin: -10px;
    padding: 10px;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    width: 160px;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  a {
    opacity: .6;

    &:hover,
    &:focus {
      background-color: $color-icon-hover;
      opacity: 1;
    }

  }

  &:hover .dropdown-content {
    display: block;
  }

}

</style>

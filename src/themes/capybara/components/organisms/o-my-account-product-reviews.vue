<template>
  <div class="o-my-account-product-reviews">
    <SfTabs :open-tab="1">
      <SfTab :title="$t('Product reviews')">
        <template>
          <p class="message">
            {{ $t('Check the details and status of your product reviews in the online store.') }}
          </p>
          <div v-if="product_reviews.length === 0" class="no-reviews">
            <p class="no-reviews__title">
              {{ $t('You currently have no product reviews') }}
            </p>
          </div>
          <SfTable v-else class="reviews">
            <SfTableHeading>
              <SfTableHeader
                v-for="tableHeader in tableHeaders"
                :key="tableHeader"
              >
                {{ $t(tableHeader) }}
              </SfTableHeader>
            </SfTableHeading>
            <SfTableRow v-for="review in review" :key="review.product">
              <SfTableData v-for="(data, key) in review" :key="key">
                <template v-if="key === 'status'">
                  <span
                    :class="{
                      'text-success': data === 'Approved',
                      'text-danger': data === 'Deleted',
                    }"
                  >{{ data }}</span>
                </template>
                <template v-else>
                  {{ data }}
                </template>
              </SfTableData>
            </SfTableRow>
          </SfTable>
        </template>
      </SfTab>
      <SfTab :title="$t('Returns')">
        <p class="message">
          {{ $t('This feature is not implemented yet! Please take a look at') }}
          <a href="https://github.com/DivanteLtd/vue-storefront"> https://github.com/DivanteLtd/vue-storefront </a>
          {{ $t('for our Roadmap!') }}
        </p>
      </SfTab>
    </SfTabs>
  </div>
</template>

<script>
import {UserProductReviews} from '@vue-storefront/core/modules/user/components/UserProductReviews'
import { SfTabs, SfTable } from '@storefront-ui/vue';
import { ModalList } from 'theme/store/ui/modals'

export default {
  name: 'OMyAccountProductReviews',
  mixins: [UserProductReviews],
  components: {
    SfTabs,
    SfTable
  },
  data () {
    return {
      tableHeaders: [
        'Product',
        'Date and Time',
        'Review',
        'Status'
      ]
    };
  },
  computed: {
    reviews () {
      let reviews = []
      this.product_reviews.forEach(item => {
        reviews.push({
          'product': item.product,
          'created_at': this.$options.filters.date(item.created_at),
          'review': item.detail,
          'status': this.$options.filters.capitalize(item.status)
        })
      })
      return reviews
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

.no-reviews {
  &__title {
    margin: 0 0 var(--spacer-base) 0;
  }
  &__button {
    --button-width: 100%;
    margin: var(--spacer-2xl) 0 0 0;
    @include for-desktop {
      --button-width: 17.375rem;
    }
  }
}
.reviews {
  @include for-desktop {
    &__element {
      &--right {
        text-align: right;
      }
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-dark-variant);
}
a {
  color: var(--c-primary);
  font-weight: var(--font-medium);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
</style>

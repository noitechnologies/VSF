<template>
  <SfTabs :open-tab="1" class="o-my-account-newsletter tab-orphan">
    <SfTab :title="title">
      <h4>
        {{ $t('General agreement') }}
      </h4>
      <SfCheckbox
        v-model="user.isSubscribed"
        name="isSubscribed"
        :label="$t('I want to receive a newsletter, and agree to its terms')"
        class="form__element form__checkbox"
      />
      <SfButton class="sf-button--full-width" @click.native="updateNewsletter">>
        {{ $t("Update my preferences") }}
      </SfButton>
    </SfTab>
  </SfTabs>
</template>

<script>
import { SfTabs, SfButton, SfCheckbox} from '@storefront-ui/vue';
import { Newsletter } from '@vue-storefront/core/modules/newsletter/components/Newsletter'

export default {
  name: 'OMyAccountNewsletter',
  components: { SfTabs },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mixins: [Newsletter],
  methods: {
    edit () {
      this.isEdited = true
    },
    async updateNewsletter () {
      if (this.user.isSubscribed) {
        const isSubscribed = await this.$store.dispatch('newsletter/subscribe', this.email)

        if (isSubscribed) {
          this.$store.dispatch('notification/spawnNotification', {
            type: 'success',
            message: i18n.t('You have been successfully subscribed to our newsletter!'),
            action1: { label: i18n.t('OK') }
          })
        }
        return
      }
      const isUnsubscribed = await this.$store.dispatch('newsletter/unsubscribe', this.email)
      if (isUnsubscribed) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'success',
          message: i18n.t('You have been successfully unsubscribed from our newsletter!'),
          action1: { label: i18n.t('OK') }
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

.tab-orphan {
  @include for-mobile {
    --tabs-title-display: none;
    --tabs-content-padding: 0;
    --tabs-conent-border-width: 0;
  }
}
.message {
  margin: 0 0 var(--spacer-sm) 0;
  color: var(--c-dark-variant);
}
a {
  font-weight: var(--font-medium);
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
</style>

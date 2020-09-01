import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { module } from './store'
import { plugin } from './store/plugin'
import { beforeRegistration } from './hooks/beforeRegistration'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'razorpay'

/* export const PaymentCashOnDeliveryModule: StorefrontModule = function ({ store }) {

} */

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module }], plugin },
  beforeRegistration
}

export const Razorpay = new VueStorefrontModule(moduleConfig)

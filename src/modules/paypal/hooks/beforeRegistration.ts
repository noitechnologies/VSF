import { isServer } from '@vue-storefront/core/helpers'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'

export function beforeRegistration(config, store) {
  const VSF_PAYPAL_CODE = 'paypal_express'
  console.log("========isServer in beforeRegistration.ts========"+isServer);
  console.log("========config.hasOwnProperty('paypal') in beforeRegistration.ts========"+config.hasOwnProperty('paypal'));
  if (!isServer && config.hasOwnProperty('paypal')) {
    const storeView = currentStoreView()
    const { currencyCode } = storeView.i18n
    const clientId = config.paypal.hasOwnProperty('clientId') ? config.paypal.clientId : ''
    const sdkUrl = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currencyCode}&disable-funding=card,credit`
    var script = document.createElement('script')
    console.log("===========script=========="+JSON.stringify(script));
    script.setAttribute('src', sdkUrl)
    document.head.appendChild(script)
  }
}

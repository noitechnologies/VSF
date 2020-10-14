import config from 'config';
import { DataResolver } from './types/DataResolver';
import { Order } from '@vue-storefront/core/modules/order/types/Order'
import { TaskQueue } from '@vue-storefront/core/lib/sync'
import Task from '@vue-storefront/core/lib/sync/types/Task'
import getApiEndpointUrl from '@vue-storefront/core/helpers/getApiEndpointUrl';
import { processLocalizedURLAddress } from '@vue-storefront/core/helpers'

const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}

const placeOrder = (order: Order): Promise<Task> =>
  TaskQueue.execute({ url: getApiEndpointUrl(config.orders, 'endpoint'), // sync the order
    payload: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(order)
    }
  })

const cancelOrder = async (increment_id: String): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.orders, 'cancelOrder_endpoint').replace('{{id}}', increment_id + '')
    ),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers
    }
  })

const cancellationAllowed = async (increment_id: String): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.orders, 'cancellationAllowed_endpoint').replace('{{id}}', increment_id + '')
    ),
    payload: {
      method: 'GET',
      mode: 'cors',
      headers
    }
  }) 

export const OrderService: DataResolver.OrderService = {
  placeOrder,
  cancelOrder,
  cancellationAllowed
}

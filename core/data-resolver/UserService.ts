import { DataResolver } from './types/DataResolver';
import { UserProfile } from '@vue-storefront/core/modules/user/types/UserProfile'
import { TaskQueue } from '@vue-storefront/core/lib/sync'
import Task from '@vue-storefront/core/lib/sync/types/Task'
import { processLocalizedURLAddress } from '@vue-storefront/core/helpers'
import config from 'config'
import getApiEndpointUrl from '@vue-storefront/core/helpers/getApiEndpointUrl';

const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}

const resetPassword = async (email: string): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'resetPassword_endpoint')),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify({ email })
    }
  })

const createPassword = async (email: string, newPassword: string, resetToken: string): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(config.users.createPassword_endpoint),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify({ email, newPassword, resetToken })
    }
  })

const login = async (username: string, password: string): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'login_endpoint')),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify({ username, password })
    }
  })

const register = async (customer: DataResolver.Customer, password: string): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'create_endpoint')),
    payload: {
      method: 'POST',
      headers,
      body: JSON.stringify({ customer, password })
    }
  })

const updateProfile = async (userProfile: UserProfile, actionName: string): Promise<any> =>
  TaskQueue.queue({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'me_endpoint')),
    payload: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(userProfile)
    },
    callback_event: `store:${actionName}`
  })

const getProfile = async () =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'me_endpoint')),
    payload: {
      method: 'GET',
      mode: 'cors',
      headers
    }
  })

const getOrdersHistory = async (pageSize = 20, currentPage = 1): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'history_endpoint').replace('{{pageSize}}', pageSize + '').replace('{{currentPage}}', currentPage + '')
    ),
    payload: {
      method: 'GET',
      mode: 'cors',
      headers
    }
  })

const getProductReviews = async (pageSize = 20, currentPage = 1): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'productReviews_endpoint')
    ),
    payload: {
      method: 'GET',
      mode: 'cors',
      headers
    }
  })

const getUserWishlist = async (pageSize = 20, currentPage = 1): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'wishlist_endpoint')
    ),
    payload: {
      method: 'GET',
      mode: 'cors',
      headers
    }
  })

const removeItemFromWishlist = async (id : String): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'wishlist_remove_item_endpoint').replace('{{id}}', id + '')
    ),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers
    }
  })

const clearWishlist = async (): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'wishlist_clear_endpoint')
    ),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers
    }
  })

const addItemToWishlist = async (id: String): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'wishlist_add_item_endpoint').replace('{{id}}', id + '')
    ),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers
    }
  })

const sendFeedback = async (feedback: String, email: String): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(
      getApiEndpointUrl(config.users, 'sendFeedback_endpoint')
    ),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify({ feedback, email })
    }
  })

const changePassword = async (passwordData: DataResolver.PasswordData): Promise<Task> =>
  TaskQueue.execute({
    url: processLocalizedURLAddress(getApiEndpointUrl(config.users, 'changePassword_endpoint')),
    payload: {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(passwordData)
    }
  })

const refreshToken = async (refreshToken: string): Promise<string> =>
  fetch(processLocalizedURLAddress(getApiEndpointUrl(config.users, 'refresh_endpoint')), {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify({ refreshToken })
  }).then(resp => resp.json())
    .then(resp => resp.result)

export const UserService: DataResolver.UserService = {
  resetPassword,
  createPassword,
  login,
  register,
  updateProfile,
  getProfile,
  getOrdersHistory,
  getProductReviews,
  getUserWishlist,
  removeItemFromWishlist,
  clearWishlist,
  addItemToWishlist,
  sendFeedback,
  changePassword,
  refreshToken
}

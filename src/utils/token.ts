import Cookies from 'js-cookie'

export function getToken(TokenKey: string) {
  return Cookies.get(TokenKey)
}

export function setToken(TokenKey: string, token: string, option: {}) {
  return Cookies.set(TokenKey, token, option)
}

export function removeToken(TokenKey: string, option: {}) {
  return Cookies.remove(TokenKey, option)
}

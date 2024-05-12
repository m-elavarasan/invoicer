import pinia from '@/stores/init'
import { useAuthStore } from '@/stores/authStore';

const DEFAULT = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function _getHeaders(headers = {}, includeDefault = true) {
  const authStore = useAuthStore(pinia);
  const token = authStore.token
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return includeDefault ? {
    ...DEFAULT.headers,
    ...headers
  } : headers
}

function _responseAdapter(res) {
  const contentType = res.headers.get('content-type')
  if (contentType?.includes('application/octet-stream')) {
    return res.arrayBuffer().then((body) => {
      const newRes = {
        ...res,
        body
      }
      if (!res.ok) {
        throw newRes.body || newRes
      }
      return newRes
    })
  } else if (contentType?.includes('application/json')) {
    return res.json().then((body) => {
      const newRes = {
        ...res,
        body
      }
      if (!res.ok) {
        throw newRes.body || newRes
      }
      return newRes
    })
  } else if (!res.ok) {
    throw res.body || res
  }
}

const _emptyValues = [undefined, null]
function _hasValue(value) {
  if (_emptyValues.includes(value)) {
    return false
  }
  if (Array.isArray(value)) {
    return value.filter(i => !_emptyValues.includes(i))
      .length ? true : false
  }
  return true
}

function buildUrl({
  url,
  queryParams
}) {
  const isFullUrl = url.indexOf('http') === 0
  const urlObj = new URL((isFullUrl ? '' : document.location.origin) + url)
  const searchParams = urlObj.searchParams
  Object.entries(queryParams || {})
    .filter(([_, value]) => _hasValue(value))
    .forEach(([key, value]) => {
      const values = Array.isArray(value) ? value : [value]
      values.forEach(i => searchParams.append(key, i))
    })
  return urlObj
}

export function getDataViaApi({
  url,
  queryParams,
  headers
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'GET',
    headers: _getHeaders(headers)
  }).then(_responseAdapter)
}

export function postDataViaApi({
  url,
  queryParams,
  headers,
  body
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'POST',
    headers: _getHeaders(headers),

    body: JSON.stringify(body)
  }).then(_responseAdapter)
}

export function putDataViaApi({
  url,
  queryParams,
  headers,
  body
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'PUT',
    headers: _getHeaders(headers),
    body: JSON.stringify(body)
  }).then(_responseAdapter)
}

export function deleteDataViaApi({
  url,
  queryParams,
  headers
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'DELETE',
    headers: _getHeaders(headers)
  }).then(_responseAdapter)
}


export default {
  getDataViaApi,
  postDataViaApi,
  putDataViaApi,
  deleteDataViaApi,
}

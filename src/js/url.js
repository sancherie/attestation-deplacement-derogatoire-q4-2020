const getQueryString = () => {
  const url = window.location.href
  const markerIndex = url.indexOf('?')
  return markerIndex > -1 ? url.substring(markerIndex + 1) : null
}

export const arrayToObject = (array, mapper) => {
  const object = {}

  array.map(value => mapper(value)).forEach(([key, value]) => {
    object[key] = value
  })
  return object
}

export const getQueryParams = () => {
  const queryString = getQueryString()
  let params

  if (queryString !== null) {
    params = arrayToObject(queryString.split('&'), param => {
      const [key, value] = param.split('=')
      console.log(key)
      console.log(decodeURIComponent(key))
      console.log(value)
      console.log(decodeURIComponent(value))
      return [decodeURIComponent(key), decodeURIComponent(value)]
    })
  } else {
    params = {}
  }
  return params
}

export const makeUrl = (baseUrl, queryParams) => {
  let url = baseUrl
  const queryParamsArray = Object.entries(queryParams)

  if (queryParamsArray.length) {
    url += '?' + (queryParamsArray.map(([key, value]) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }).join('&'))
  }
  return url
}

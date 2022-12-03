import { makeRequest } from './makeRequest'

const URL = '/photos'

export const getPhotos = (config) =>
  makeRequest({
    method: 'GET',
    url: URL,
    ...config
  })

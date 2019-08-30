import { ALL_ANIME } from './types'

const allAnime = (payload) => {
  return { type: ALL_ANIME, payload }
}

export { allAnime }
import { RestClient } from '../utils/restClient'
import { API_KEY } from '../utils/constants'
import { VideoUtil } from '../utils/videoutil'

const lng = VideoUtil.getLanguage()
const LNG_STRING = `language=${lng}`
export class VideoService {

    static search = (query, type) => {
        return RestClient.get(`/search/${type}?api_key=${API_KEY}&query=${query}&${LNG_STRING}`)
    }

    static genres = (type) => {
        return RestClient.get(`/genre/${type}/list?api_key=${API_KEY}&${LNG_STRING}`)
    }

    static discover = (type) => {
        return RestClient.get(`/discover/${type}?api_key=${API_KEY}&${LNG_STRING}`)
    }

    static trends = (type) => {
        return RestClient.get(`/trending/${type}/day?api_key=${API_KEY}&${LNG_STRING}`)
    }

}
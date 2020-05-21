
export class VideoUtil {

    static getFieldByType(type) {
        return type === 'movie' ? 'title' : 'name'
    }
    
}
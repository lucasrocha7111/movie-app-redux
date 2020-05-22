import I18n from 'react-native-i18n'

export class VideoUtil {

    static getFieldByType(type) {
        return type === 'movie' ? 'title' : 'name'
    }

    static getLanguage() {
        return I18n.currentLocale()
    }
    
}
import I18n from 'react-native-i18n'

export class VideoUtil {

    static getLanguage() {
        return I18n.currentLocale()
    }
    
}
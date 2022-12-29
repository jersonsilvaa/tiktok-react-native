import { View } from 'react-native'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import * as ImagePicker from 'expo-image-picker'

import { screen } from '../../utils/screens'

export const UploadVideo = (props) => {
    const { navigation } = props
    useFocusEffect(
        useCallback(() => {
            (async () => {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1
                })

                if (result.canceled) {
                    navigation.goBack()
                } else {
                    navigation.navigate(screen.upload.publishVideo, {
                        videoUri: result.assets[0].uri
                    })
                }
            })()
        }, [])
    )
    return <View />
}

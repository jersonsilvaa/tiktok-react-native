import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen, UploadVideo, PublishVideoScreen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const UploadVideoStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={screen.upload.uploadVideo}
                component={UploadVideo}
                options={{title: ''}}
            />

            <Stack.Screen
                name={screen.upload.publishVideo}
                component={PublishVideoScreen}
                options={{title: 'Publiar'}}
        />
        </Stack.Navigator>
    </>
}
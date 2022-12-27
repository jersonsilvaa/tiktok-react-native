import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UploadVideo, screen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const UploadVideoStack = () => {
    <Stack.Navigator>
        <Stack.Screen
            name={screen.upload.uploadVideo}
            component={UploadVideo}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
}
import React from 'react'
import {
    View,
    Text
} from 'react-native'

class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '详情'
    })
    render() {
        return (
            <View>
                <Text>Detail</Text>
            </View>
        )
    }
}

export default Detail;
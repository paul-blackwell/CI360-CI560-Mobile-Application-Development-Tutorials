
import { StyleSheet, Text, View } from 'react-native';


export default function ScreenTwo() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>This is screen two!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    },
    text: {
        paddingVertical: 20,
        fontSize: 20,
    }
});

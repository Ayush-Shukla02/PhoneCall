import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from "react-native";
import call from "react-native-phone-call";

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const triggerCall = () => {
        if (inputValue.length != 10) {
            alert("Please insert correct contact number");
            return;
        }

        const args = {
            number: inputValue,
            prompt: true,
        };
        call(args).catch(console.error);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    value={inputValue}
                    onChangeText={(inputValue) => setInputValue(inputValue)}
                    placeholder={"Enter Conatct Number to Call"}
                    keyboardType="numeric"
                    style={styles.textInput}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={triggerCall}
                >
                    <Text style={styles.buttonTextStyle}>Make a Call</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight - 10,
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        textAlign: "center",
    },
    buttonStyle: {
        justifyContent: "center",
        marginTop: 15,
        padding: 10,
        backgroundColor: "#8ad24e",
    },
    buttonTextStyle: {
        color: "#fff",
        textAlign: "center",
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        paddingHorizontal: 10,
    },
});

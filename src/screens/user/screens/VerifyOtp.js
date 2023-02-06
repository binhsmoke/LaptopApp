import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { verifyOtp } from '../UserService'

const VerifyOtp = ({ route, navigation }) => {
    const { email } = route.params

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const onVerifyOtp = async () => {
        if (otp.trim() === '' || password.trim() === '') {
            alert('Vui lòng nhập đầy đủ thông tin')
            return
        }
        const res = await verifyOtp({
            email: email, 
            codeOtp: Number(otp), 
            newPassword: password
        })

        if (res.error) {
            alert('Lỗi mạng')
        } else {
            if (res.result_code == 0) {
                alert('Mã otp không chính xác')
            } else {
                alert('Đổi mật khẩu thành công')
                navigation.replace('Login')
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image
                    source={require("../../../assets/images/logoApp.jpg")}
                    style={styles.image}></Image>
            </View>
            <View style={styles.inputTextView}>
                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholderTextColor={"white"}
                        placeholder="Code OTP"
                        value={otp}
                        onChangeText={setOtp}
                    ></TextInput>
                    <Image
                        style={styles.imageIcon1}
                        source={require("../../../assets/images/user.png")}
                    ></Image>
                </View>

                <View>
                    <TextInput
                        style={styles.inputText}
                        placeholderTextColor={"white"}
                        placeholder="New password"
                        secureTextEntry={true}
                        value={password} onChangeText={setPassword}
                    ></TextInput>
                    <Image
                        style={styles.imageIcon2}
                        source={require("../../../assets/images/pass.png")}
                    ></Image>
                </View>

                <TouchableOpacity
                    onPress={onVerifyOtp}
                    style={styles.pressable}
                >
                    <Text style={styles.pressableText}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default VerifyOtp

const styles = StyleSheet.create({
    iconContainer: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    loginIconView: {
        marginHorizontal: 90,
        flexDirection: "row",
        marginTop: 40,
        justifyContent: 'space-between'
    },
    logoView: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 97,
    },

    image: {
        width: 300,
        height: 300,
    },
    signInView: {
        width: "100%",
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    imageIcon1: {
        width: 20,
        height: 27,
        position: "absolute",
        top: 30,
        left: 20,
    },

    imageIcon2: {
        width: 20,
        height: 29,
        position: "absolute",
        top: 30,
        left: 22,
    },
    siginText: {
        fontSize: 14,
        color: "#9098B1",
    },

    inputTextView: {
        padding: 30,
        marginTop: 30
    },

    inputText: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ffffff",
        marginTop: 20,
        paddingLeft: 60,
        borderRadius: 37,
        paddingHorizontal: 16
    },

    pressable: {
        width: "100%",
        height: 50,
        marginTop: 20,
        borderRadius: 37,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
    },

    pressableText: {
        fontWeight: "bold",
        color: "#FE5045",
    },


    imageLogin: {
        position: "absolute",
        top: 20,
        left: 22,
    },

    forgotView: {
        width: "100%",
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    forgotText: {
        color: "#ffffff",
        fontWeight: "bold",
    },

    signupView: {
        width: "100%",
        height: 30,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    textSignup: {
        color: "#ffffff",
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#FE5045"
    }
})
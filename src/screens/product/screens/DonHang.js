import { StyleSheet, FlatList, Text, View, Modal, TouchableOpacity, useWindowDimensions, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import { UserContext } from "../../user/UserContext";
const DonHang = () => {
    const { userID, onGetPendingOrders } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const numberWithComma = x => {
        try {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (async function PendingOrders() {
            const res1 = await onGetPendingOrders(userID);
            if (res1) {
                setOrders(res1);
            }
        })()
    }, [orders]);

    const SetTime = (time) => {
        return String(time).slice(0, 19).replace('T', ' ');
    }

    const renderItem1 = ({ item }) => {
        return (
            <View style={styles.item}>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'blue' }}>{item.status.name}</Text>
                        <Text style={{ marginLeft: 30 }}>{SetTime(item.updatedAt)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text>{numberWithComma(item.total)} đ</Text>
                        <Text style={{ marginLeft: 10 }}>({item.payment_id == 1 ? 'Tiền mặt' : 'Ví điện tử'})</Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={()=>navigation.navigate("OrderDetail", { id: item._id})}> */}
                <TouchableOpacity>
                    <Text style={{ color: 'green' }}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ alignItems: 'center', marginVertical: 30, fontWeight: 'bold', fontSize: 24 }}>ĐƠN HÀNG CỦA BẠN</Text>
                        {
                            orders.length > 0 ?
                                <FlatList
                                    data={orders}
                                    renderItem={renderItem1}
                                    keyExtractor={item => item.id}
                                /> :
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                                    <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548682.png' }} />
                                    <Text>Bạn chưa có đơn hàng nào</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'green' }}>Đặt món ngay</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default DonHang

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 30
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
        height: 38,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    item: {
        margin: 6,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
})
import { StyleSheet, Text, View, Image, Pressable, ToastAndroid, TouchableOpacity } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../user/UserContext";

import * as ImagePicker from 'expo-image-picker';


const Account = (props) => {
  const { navigation } = props;
  const { user, onGetUser } = useContext(UserContext);
  const { onLogout } = useContext(UserContext);
  const logout = async () => {
    const res = await onLogout();
    if (res == false) {
      console.log('>>>>>>>>>Login failed');
      ToastAndroid.show('Đăng nhập không thành công', ToastAndroid.BOTTOM);
    } else {
      ToastAndroid.show("Hen gap lai", ToastAndroid.BOTTOM);
    }
  }

  const [image, setImage] = useState(null);

  const pickImage = async () => {

    try {
      let result = await ImagePicker.launchImageLibraryAsync();
      if (result.cancelled === true) return
      setImage(result.uri);
    } catch (e) { console.log(e.message) }
    if (!result.canceled) {
      // setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await onGetUser.getData;
      // console.log('response in acc .js', response);
    }
    fetchData();
  }, []);
  const { name, phone, email, password, address, img } = user;
  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>      TRANG CÁ NHÂN</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
      </View>
      <View style={styles.AccountView}>
        <View style={styles.Account}>
          <View style={styles.InformationView}>
            <View style={styles.ImageView} >

              <TouchableOpacity onPress={pickImage} >
                {image && <Image source={{ uri: image }} style={styles.Imageavatar} />}
                {!image && <Image
                  style={styles.Imageavatar}
                  source={require("../../../assets/images/avataruser.png")}
                />}
              </TouchableOpacity>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.TextName}>{user.name}</Text>
              <Text>{user.phone}</Text>
            </View>
          </View>
          <View style={styles.SupportView} >
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text  style={styles.SupportText} >Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
              ></Image>
          </View>
          {/* <View style={styles.line}></View>
          <View style={styles.SupportView}>
          <TouchableOpacity onPress={() => navigation.navigate('DonHang')}>
            <Text style={styles.SupportText}>Đơn hàng của tôi</Text>
            </TouchableOpacity>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
              ></Image>
          </View> */}
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
          <TouchableOpacity onPress={() => navigation.navigate('Ordering')}>
            <Text style={styles.SupportText}>Đơn hàng đang xử lý</Text>
            </TouchableOpacity>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
              ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
          <TouchableOpacity onPress={() => navigation.navigate('DonHang')}>
            <Text style={styles.SupportText}>Lịch sử đặt hàng</Text>
            </TouchableOpacity>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
              ></Image>
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={logout}><Text style={styles.SupportTextLogout}>Logout</Text></TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  SupportTextLogout: {
    color: "red",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  SupportImage: {
    right: 8,
    position: "absolute",
    marginTop: 4,
  },
  SupportView: {
    flexDirection: "row",
  },

  SupportText: {
    marginLeft: 8,
    color: "#595959",
    fontSize: 16,
    fontWeight: "500",
  },
  line: {
    width: "100%",
    height: 20,
    // borderWidth: 0.5,
    // backgroundColor: "#C0C0C0",
    marginVertical: 8,
  },
  TextName: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 8,
  },
  TextView: {
    alignItems: "center",
    width: "60%",
  },
  ImageView: {
    width: 80,
    height: 80,
    marginTop: 30,
  },
  Imageavatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'black'
  },
  InformationView: {
    alignItems: "center",
  },
  Account: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  AccountView: {
    top: -60,
    paddingHorizontal: 16,
  },
  TitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  Title: {
    marginTop: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  TitleView: {
    height: 200,
    backgroundColor: "#FE5045",
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  Container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

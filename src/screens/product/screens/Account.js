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
  // useEffect(() => {
  //   // Since the async method Parse.User.currentAsync is needed to
  //   // retrieve the current user data, you need to declare an async
  //   // function here and call it afterwards
  //   async function getCurrentUser() {
  //     // This condition ensures that username is updated only if needed
  //     if (name == '') {
  //       const currentUser = await Parse.User.currentAsync();
  //       if (currentUser !== null) {
  //         setName(currentUser.getUsername());
  //       }
  //     }
  //   }
  //   getCurrentUser();
  // }, [name]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await onGetUser.getData;
      console.log('respone in account.js onGetUser.getdata', response)
      // ...
    }
    fetchData();
  }, []);
  const { name, phone, email, password, address, img } = user;
  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Account details</Text>
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
          <View style={styles.line}></View>
          <View style={styles.SupportView} >
            <Text onPress={() => navigation.navigate('EditProfile')} style={styles.SupportText} >Edit Profile</Text>
            <Image

              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText} onPress={() => navigation.navigate('DonHang')}>Orders</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          {/* <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>About</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Language</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Security center</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Feedback</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View> */}

          <View style={styles.line}></View>
          <Pressable onPress={logout}><Text style={styles.SupportTextLogout}>Logout</Text></Pressable>

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
    height: 50,
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

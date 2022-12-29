import { StyleSheet, Text, View, Image, TextInput , TouchableOpacity} from "react-native";
import React from "react";

const EditProfile = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Edit Profile</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
      </View>
      <View style={styles.EditView}>
        <View style={styles.TextInputView}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor={"#9098B1"}
            placeholder="Name"
          ></TextInput>
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor={"#9098B1"}
            placeholder="Phone Number"
          ></TextInput>
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor={"#9098B1"}
            placeholder="Address"
          ></TextInput>
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor={"#9098B1"}
            placeholder="Email"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.ButtonUpdate}>
        <Text style={styles.TextUpdate}>Update</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
    TextUpdate:{
        fontSize: 16,
        fontWeight: "700",
        color: "white",
    },
    ButtonUpdate:{
        backgroundColor: "#FE5045",
        width: "100%",
        height: 50,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop:32,
    },
  TextInput: {
    marginHorizontal: 16,
  },
  TextInputView: {
    width: "100%",
    height: 50,
    borderWidth:1,
    borderRadius: 8,
    borderColors: "#B5B5B5",
    justifyContent: "center",
    marginTop: 16
  },
  EditView: {
    paddingHorizontal: 24,
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
    height: 140,
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

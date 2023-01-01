import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  ToastAndroid
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from '../ProductContext'
import { IP } from "../../../utils/constants";
const Detail = (props) => {

  const { route: { params: { _id } } } = props;
  const { product, onGetProductById, updateCart } = useContext(ProductContext);
  const [number, setNumber] = useState(0);
  const onNumberChange = (isAdd) => {
    if (isAdd == true) {
      setNumber(number + 1);
    } else if (isAdd == false && number >= 1) {
      setNumber(number - 1);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await onGetProductById(_id);
      return response;
    }
    fetchData();
  }, [_id]);
  if (!product) {
    return (<></>);
  }
  const { name, image, price, quantity,description } = product;
  const addProductToCart = () => {
    updateCart(product, number, price, true)
    ToastAndroid.show('Thêm vào giỏ hàng thành công', ToastAndroid.BOTTOM);
  };

  const numberWithComma = x => {
    try {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } catch (error) {
      console.log(error);
    }
  };

  function convertIP(image) {
    try {
      image = image.replace("localhost", IP);
      return image;
    } catch (error) {
      console.log('convertip fail', error)
    }
  }
  
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.Conatiner}>
      <ScrollView>
        <View style={styles.TitleView}>
          <View style={styles.Title}>
            <Image source={require("../../../assets/images/back.png")}></Image>
            <Text style={styles.TitleText}>       CHI TIẾT</Text>
            <Image
              source={require("../../../assets/images/bacham.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.ConatinerImageProduct}>
          <View style={styles.ImageProduct}>
            <Image
              style={styles.Image}
              resizeMode={'cover'}
              source={{ uri: convertIP(image) }}
            />
          </View>
        </View>
        <View style={styles.ContainerInformations}>
          <View style={styles.TextNameProductView}>
            <Text style={styles.TextNameProduct}>
              {name}
            </Text>
            <Image
              style={styles.Star}
              source={require("../../../assets/images/Star.png")}
            ></Image>
          </View>
          <View style={styles.PriceQuantityView}>
            <Text style={styles.TextPriceProduct}>{numberWithComma(price)}đ</Text>
            <Text style={styles.TextQuantityProduct}>Số lượng: {quantity}</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Pressable
              onPress={() => setShow(!show)}
              style={styles.DescriptionProductView}
            >
              <Text style={styles.TextDescriptionProduct}>
                Thông tin sản phẩm
              </Text>
              <Image
                style={styles.ImageNext}
                source={require("../../../assets/images/next.png")}
              ></Image>
            </Pressable>
            {show ? (
              <View style={styles.Description}>
                <Text>{description}</Text>

              </View>
            ) : null}
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.DescriptionProductView}>
              <Text style={styles.TextDescriptionProduct}>
                Mô tả chi tiết
              </Text>
              <Image
                style={styles.ImageNext}
                source={require("../../../assets/images/next.png")}
              ></Image>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.cartProcessContainer}>
            <View style={styles.processQuantity}>
              <Text style={styles.quantityText}>Đã chọn {number} sản phẩm</Text>
            </View>
            <View style={styles.quantityAction}>
              <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
              <Text style={styles.quantity}>{number}</Text>
              <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
            </View>

          </View>
          <View style={styles.processTotal}>
            <Text style={styles.totalText}>Tạm tính</Text>
            <Text style={styles.total}>{numberWithComma(price * number)} đ</Text>
          </View>
          <TouchableOpacity style={styles.ButtonAddCart} onPress={addProductToCart}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  ButtonAddCart: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#FE5045",
    marginVertical: 16,
  }, total: {
    marginTop: 4,
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '500'
  },
  totalText: {
    color: 'black',
    opacity: 0.6
  },
  processTotal: {

  },
  addAction: {
    borderRadius: 5,
    borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
    marginHorizontal: 3,
  },
  quantity: {
    marginHorizontal: 3,
  },
  removeAction: {
    borderRadius: 5,
    borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
    marginHorizontal: 3,
  },
  quantityAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  quantityText: {
    fontSize: 14,
    opacity: 0.6
  },
  processQuantity: {

  },
  cartProcessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,

  },
  Description: {
    width: "100%",
  },
  ImageNext: {
    right: 0,
    position: "absolute",
  },
  TextDescriptionProduct: {
    fontSize: 16,
    fontWeight: "700",
  },
  DescriptionProductView: {
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    marginVertical: 16,
    width: "100%",
    height: 0.4,
    borderWidth: 0.4,
    borderColor: "#9B9B9B",
  },
  TextQuantityProduct: {
    right: 0,
    position: "absolute",
  },
  TextPriceProduct: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FE5045",
  },
  PriceQuantityView: {
    marginVertical: 4,
    flexDirection: "row",
  },
  Star: {
    width: 20,
    height: 20,
    right: 0,
    position: "absolute",
  },
  TextNameProduct: {
    fontSize: 20,
    fontWeight: "600",
  },
  TextNameProductView: {
    flexDirection: "row",
  },
  ContainerInformations: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius:16
  },
  ImageProduct: {
    width: "70%",
    height: "70%",
  },
  ConatinerImageProduct: {
    width: "100%",
    height: 320,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  TitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  Title: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TitleView: {
    height: 120,
    backgroundColor: "#FE5045",
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 16,
  },
  Conatiner: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

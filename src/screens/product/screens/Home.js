import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../ProductContext";
import { NumericFormat, PatternFormat, NumberFormat } from 'react-number-format';
const Home = (props) => {
  const { navigation } = props;
  const { products, onGetProducts } = useContext(ProductContext);
  const [sort, setSort] = useState('asc')
  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  useEffect(async () => {
    await onGetProducts(sort);
  }, []);

  const handleSort = async () => {
    if (sort === 'asc') {
      setSort('desc')
      return await onGetProducts('desc')
    } else {
      setSort('asc')
      return await onGetProducts('asc')
    }
  }


  const renderItem = ({ item }) => {
    const { _id, image, name, price } = item;
    // let nPrice=new Intl.NumberFormat('en-CA',{style:'decimal'}).format(price);
    return (
      <Pressable
        style={styles.containerView}
        onPress={() => navigation.navigate("Detail", { _id: _id })}
      >
        <View style={styles.ContainerItem}>
          <View style={styles.Product}>
            <View style={styles.ContainerImageItem}>
              <Image
                style={styles.imageItem}
                resizeMode={"cover"}
                source={{ uri: image }}
              ></Image>
            </View>
            <View style={styles.textItem}>
              <Text style={styles.descriptionProduct}>{name}</Text>

              <Text style={styles.priceproduct}>{numberWithComma(price)} đ</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ContainerTitle}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>LapTop Shop</Text>
            <Image
              style={styles.ImageTitle}
              source={require("../../../assets/images/danhmuc.png")}
            ></Image>
          </View>

          <View style={styles.Poster}>
            <Image
              style={styles.ImagePoster}
              source={require("../../../assets/images/poster.jpg")}
            ></Image>
            <View style={styles.New}>
              <Text style={styles.TextNew}>Mới</Text>
            </View>
          </View>
          <View style={styles.Brand}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.BrandItem}>
                <Image
                  style={styles.BrandImage}
                  source={require("../../../assets/images/hp.png")}
                ></Image>
              </View>
              <View style={styles.BrandItem}>
                <Image
                  style={styles.BrandImage}
                  source={require("../../../assets/images/lenovo.png")}
                ></Image>
              </View>
              <View style={styles.BrandItem}>
                <Image
                  style={styles.BrandImage}
                  source={require("../../../assets/images/asus.jpg")}
                ></Image>
              </View>
              <View style={styles.BrandItem}>
                <Image
                  style={styles.BrandImage}
                  source={require("../../../assets/images/dell.png")}
                ></Image>
              </View>
              <View style={styles.BrandItem}>
                <Image
                  style={styles.BrandImage}
                  source={require("../../../assets/images/dell.png")}
                ></Image>
              </View>
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSort}>
          <Text>{sort == 'asc' ? 'Giảm dần' : 'Tăng dần'}</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.flatList}
          data={products}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => Math.random()}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    width: '95%',
    alignItems: 'flex-end'
  },
  priceproduct: {
    color: "red",
    fontWeight: "600",
  },
  descriptionProduct: {
    fontSize: 14,
    fontWeight: "400",
  },
  flatList: {
    paddingHorizontal: 16,
  },
  textItem: {
    paddingHorizontal: 8,
    width: "100%",
    marginBottom: 8,
  },
  imageItem: {
    width: "100%",
    height: "80%",
    borderRadius: 16,
  },
  ContainerImageItem: {
    marginTop: 8,
    width: "100%",
    height: 160,
    alignItems: "center",
  },
  Product: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 16,
  },
  ContainerItem: {
    width: "96%",
  },
  containerView: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  BrandImage: {
    width: 60,
    height: 60,
  },
  BrandItem: {
    width: 60,
    height: 80,
    backgroundColor: "white",
    marginHorizontal: 16,
    justifyContent: "center",
  },
  Brand: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginVertical: 4,
  },
  TextNew: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
  },
  New: {
    marginTop: -184,
    marginLeft: 16,
    width: 60,
    height: 24,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  ImagePoster: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  Poster: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    marginTop: 8,
  },

  ImageTitle: {
    right: 8,
    position: "absolute",
  },
  TitleText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
  Title: {
    paddingHorizontal: 8,
    marginTop: 40,
    flexDirection: "row",
  },

  ContainerTitle: {
    paddingHorizontal: 16,
  },
  Container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F8774A",
  },
});


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
} from "react-native";
import React, { useState,useContext,useEffect } from "react";
import FilterModal from "./FilterModal";
import { ProductContext } from '../ProductContext';
import { Searchbar } from 'react-native-paper';
const List = (props) => {
  const { navigation } = props;
  // const [showFilterModal, setShowFilterModal]= React.useState(false);
  const {products,onGetProducts}=useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await onGetProducts.getData;
      // console.log('response in list .js', response);
    }
    fetchData();
  }, []);
  const renderItem = ({ item }) => {
    const { _id, image, name, price } = item;
    // console.log(item)
    return (
      <Pressable style={styles.containerView} onPress={() => navigation.navigate('Detail',{_id:_id})}  key={_id}>
        <View style={styles.ContainerItem}>
          <View style={styles.Product}>
            <View style={styles.ContainerImageItem}>
              <Image
                style={styles.imageItem}
                resizeMode="cover"
                source={{uri:image}}
              ></Image>
            </View>
            <View style={styles.textItem}>
          
              <Text style={styles.descriptionProduct}>{name}</Text>
              <Text style={styles.priceproduct}>{price} $</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const handleSearch=(text)=>{
    console.log("text",text)
    setState({query:text});
  };
  const [input, setInput] = useState("");
  return (
    <View style={styles.Conatiner}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Products</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
        <View style={styles.Search}>
          {/* <Image
            style={styles.ImageSeach}
            source={require("../../../assets/images/search.png")}
          ></Image> */}
          {/* <TextInput
            style={styles.TextSearch}
            placeholderTextColor={"#9098B1"}
            placeholder="Search for products..."
            onChangeText={(text) => {
              setInput(text);
            }}
            value={input}
          ></TextInput> */}
          <Searchbar style={styles.TextSearch}
				placeholder="Search"
				
				value={input}
			/>
        </View>
      </View>
      {/* <FilterModal 
      onVisible={showFilterModal}
      onClose={()=>setShowFilterModal(false)}
      /> */}
     {
      products.lengt==0?
      <Text style={styles.loading}>Đang tải dữ liệu, bạn đợi tí nhé</Text>:
      <FlatList
        style={styles.flatList}
        data={products}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item=>item._id}
      ></FlatList>
     } 
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
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
  TextSearch: {
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "400",
  },
  Search: {
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "white",
    width: "100%",
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
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
    height: 180,
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


// var data = [
//   {
//     _id: "1",
//     image: require("../../../assets/images/maydell.jpg"),
//     name: "Nike Air Zoom Pegasus 36 Miami",
//     price: 534.33,
//   },
//   {
//     _id: "2",
//     image: require("../../../assets/images/maydell.jpg"),
//     name: "Nike Air Zoom Pegasus 36 Miami",
//     price: 534.33,
//   },
//   {
//     _id: "3",
//     image: require("../../../assets/images/maydell.jpg"),
//     name: "Nike Air Zoom Pegasus 36 Miami",
//     price: 534.33,
//   },
//   {
//     _id: "4",
//     image: require("../../../assets/images/maydell.jpg"),
//     name: "Nike Air Zoom Pegasus 36 Miami",
//     price: 534.33,
//   },
//   {
//     _id: "5",
//     image: require("../../../assets/images/maydell.jpg"),
//     name: "Nike Air Zoom Pegasus 36 Miami",
//     price: 534.33,
//   },
// ];
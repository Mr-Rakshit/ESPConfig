import * as React from "react";
import { Searchbar} from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      {/* <Image source={require("../Images/logodashb.png")} /> */}
      <Searchbar
        placeholder="Search your jar here"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
       //   width: 360,
          alignSelf: "center",
          marginTop: -20,
          shadowColor: "black",
          shadowRadius: 500,
        }}
      />
    </View>
  );
};

export default MyComponent;

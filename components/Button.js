import * as React from "react";
import { Button } from "react-native-paper";

const MyComponent = (props) => (
  <Button icon="" mode="contained" style={{backgroundColor:props.color}}onPress={() => console.log("Pressed")}>
    Next
  </Button>
);

export default MyComponent;

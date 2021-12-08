import * as React from "react";
import { Appbar, Title } from "react-native-paper";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const colors = {
  themeColor: "#ffffff",
  limegreen: "#f4ffe3",
  green: "#8eb44f",
  darkgreen: "#8eb44f",
  red: "#f54040",
};

const fontConfig = {
  android: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  fonts: configureFonts(fontConfig),
};

const MyComponent = (props) => {
  //   const _goBack = () => console.log('Went back');

  //   const _handleSearch = () => console.log('Searching');

  //   const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header
      style={{
        // marginTop: 71,
        backgroundColor: props.color,
        shadowColor:"",
        justifyContent: "center",
        alignItems: "flex-start",
        shadowColor: '#10000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1
      }}
    >
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      {/* <Appbar.Content
        style={{ alignItems: "center", fonts: fontConfig.android.medium,marginBottom:30 }}
        title="Welcome User"
      /> */}
      <Title>{props.name}</Title>
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default MyComponent;

// // import Smartconfig from 'react-native-smartconfig';

// // Smartconfig.start({
// //   type: 'esptouch', //or airkiss, now doesn't not effect
// //   ssid: 'droot',
// //   bssid: "", //"" if not need to filter (don't use null)
// //   password: 'droot1902',
// //   timeout: 50000 //now doesn't not effect
// // }).then(function(results){
// //   //Array of device success do smartconfig
// //   console.log(results);
// //   /*[
// //     {
// //       'bssid': 'device-bssi1', //device bssid
// //       'ipv4': '192.168.1.11' //local ip address
// //     },
// //     {
// //       'bssid': 'device-bssi2', //device bssid
// //       'ipv4': '192.168.1.12' //local ip address
// //     },
// //     ...
// //   ]*/
// // }).catch(function(error) {

// // });

// // Smartconfig.stop(); //interrupt task
// import RNEsptouch from "react-native-esptouch";
// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { TextInput, Button } from "react-native-paper";

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onPress = this.onPress.bind(this);
//   }

//   componentDidMount() {
//     RNEsptouch.initESPTouch();
//   }

//   componentWillUnmount() {
//     RNEsptouch.finish();
//   }

//   onPress() {
//     let connected_wifi_password = "123456";
//     let broadcast_type = 1; // 1: broadcast;	0: multicast
//     RNEsptouch.startSmartConfig(connected_wifi_password, broadcast_type).then(
//       (res) => {
//         if (res.code == 200) {
//           // ESPTouch success
//         } else {
//           // ESPTouch failed
//           console.info(res.msg);
//         }
//       }
//     );
//   }

//   render() {
//     return (
//       <View>
//         <Button title="test" onPress={this.onPress} />
//       </View>
//     );
//   }
// }
// export default Demo;

import SmartConfig from 'react-native-smartconfig-quan';
import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    const [log, setLog] = useState('log here');
    let foundDevice = false;

    const wifiName = 'Viettel';
    const wifiPass = '0965677826';
    // you can random bssid of wifi, but it need correct format
    const wifiBssid = '8a:29:9c:69:af:9b';
1
    // timeout not work with android, on android default is 45s
    const TIME_OUT_SMART_CONFIG = 30 * 1000; // 30s

    function config() {
        setLog('configuring...');
        foundDevice = false
        ;

        SmartConfig.start(
          wifiName, wifiBssid, wifiPass, TIME_OUT_SMART_CONFIG, (event) => {
            console.log(event);
            let { eventName, data } = event;
            if (eventName === 'onFoundDevice') {
                foundDevice = true;
                data = JSON.parse(data);

                // data in event is ip of ESP
                setLog('Found device\nip: ' + data.ip + '\nbssid: ' + data.bssid);
            } else {
                if (!foundDevice) {
                    setLog('Not found');
                }
            }
        }
        );
    }

    function stopConfig() {
        SmartConfig.stop();
        setLog('Stopped config');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{log}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 100 }}>
                <Button title={'Start Config'} onPress={() => config()}/>

                <View width={20}/>

                <Button title={'Stop Config'} onPress={() => stopConfig()}/>
            </View>

        </View>
    );
}
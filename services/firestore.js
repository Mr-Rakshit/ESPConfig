import React, {useEffect, useState, Component} from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

// export default function Firestore() {
//   const [collection, setcollection] = useState([]);
//   useEffect(() => {
//     const containersRef = firestore().collection("containers");
//     debugger;
//     const snapshot =  containersRef.get();
//     setcollection(snapshot);
//     snapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   }, []);
//   return collection;
// }

class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.getUser();
  }
  // componentDidMount() {
  //   const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
  //   dbRef.get().then((res) => {
  //     if (res.exists) {
  //       const user = res.data();
  //       this.setState({
  //         key: res.id,
  //         name: user.name,
  //         email: user.email,
  //         mobile: user.mobile,
  //         isLoading: false
  //       });
  //     } else {
  //       console.log("Document does not exist!");
  //     }
  //   });
  // }
  getUser = async () => {
    const userDocument = await firestore()
      .collection('Jars')
      .doc('1')
      .get();
    if (userDocument.exists) {
      console.log('success');
    } else {
      console.log('failure');
    }
    console.log('aaaaa');
    console.log(userDocument);
    console.log('heyyyyyyya');
  };
  render() {
    return (
      <View>
        <Text>Firebase</Text>
        <Text></Text>
      </View>
    );
  }
}
export default FirebaseApp;

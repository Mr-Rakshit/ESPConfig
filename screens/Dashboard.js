import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Appbar from '../components/Appbar';
import Searchbar from '../components/Searchbar';
import Card from '../components/Cards';
import {Divider} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../services/AuthProvider';
const colors = {
  themeColor: '#ffffff',
  limegreen: '#f4ffe3',
  green: '#8eb44f',
  darkgreen: '#8eb44f',
  red: '#f54040',
};

const Dashboard = ({navigation}) => {
  const {user, logout} = useContext(AuthContext); //new logout functionality
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };
  const [collection, setcollection] = useState([]);
  const temp = {};
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userDocument = await firestore()
      .collection('Jars')
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setcollection(documents);
        // do something with documents
      });
    // .get();
    // {console.log(userDocument)}
    // if (userDocument.exists) {
    //   console.log('success');
    // } else {
    //   console.log('failure');
    // }
    // return userDocument.docs.map(doc => {
    //   temp[doc.id] = doc.data
    //   doc.data()})
    //   {console.log(temp)}
  };
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: colors.themeColor,
      }}>
      <Button style={{position: 'relative'}}>BUTTON</Button>
      <View style={{backgroundColor: colors.limegreen}}>
        {/* <Appbar name={auth.currentUser?.email} color={colors.limegreen} /> */}
      </View>
      <View>
        <Searchbar />
      </View>
      <ScrollView>
        {collection.map((prop) => {
          return (
            <>
              <Card
                name={prop.item}
                weight={prop.weight}
                lastused={prop.lastused}
              />
              <Divider />
            </>
          );
        })}
      </ScrollView>
      <View style={{padding: 10}}>
        <Button
          icon=""
          mode="contained"
          style={{backgroundColor: '#8eb44f'}}
          onPress={() => navigation.push('JarConnect')}>
          Add Jar
        </Button>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonText1: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

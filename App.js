import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Display from './Display';

export default function App() {
  const[image,setImage] = useState(require('./assets/images/profile.jpg'));

    function happyImage(){
        setImage(require('./assets/images/Happy.png'));
        
    }
    function sadImage(){
        setImage(require('./assets/images/Sad.png'));
    }
    function okImage(){

    }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
         <TouchableOpacity>
         <Ionicons name="arrow-back-circle" size={24} color="#f5f5f5" />
         </TouchableOpacity>   
        <Text style={styles.textHeader}>My Gallery</Text>
        <TouchableOpacity>
         <AntDesign name="bars" size={24} color="#f5f5f5" /></TouchableOpacity>
      </View>

      <View style={styles.body}>

        <Display image={image}/>

      </View>
      <View style={styles.footer}>
       
      <TouchableOpacity onPress={happyImage}>
      <Image style={styles.image} source={require('./assets/images/Happy.png')} resizeMode="cover" />
      <Text style={styles.text}>Happy</Text> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={sadImage}>
      <Image style={styles.image} source={require('./assets/images/Sad.png')} />
      <Text style={styles.text}>Sad</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2C3539',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    fontSize:20,
    color:'#f2f2f2',
    fontWeight: 'bold',
  },
  header:{

    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 10,
    padding:10,
    width:'100%',
  },

  body: {

    flex:3,
    marginTop:20,
    width:'100%',
    height:'80%',
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  
  },

  footer: {
    flex:1,
    backgroundColor:'#f5f5f5',
    width:'100%',
    height:'80%',
    //marginBottom:4,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between'
  },

  image:{  
    height: 100,
    width: 100,
    borderRadius:50  
    },

  text:{
    fontSize:15,
    alignSelf:'center'
  }  
});

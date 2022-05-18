import { StyleSheet, View, Image } from 'react-native';

export default function Display({image}) {
    
  return (
    <View style={styles.image}>
    
    <Image style={styles.image} source={image} resizeMode="cover"/>
    
    </View>
  );
}

const styles = StyleSheet.create({

    image:{
        flex:1,
        height:'100%',
        width:'100%',
        borderRadius:30
    }

});

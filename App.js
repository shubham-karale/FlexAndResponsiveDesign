import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlexBox from './components/FlexBox';

export default function App() {
  return (
    <View style = {{flex:1}}>

    <Text style = {styles.heading}>FlexBox Responsive Design</Text> 

    <FlexBox />
    
    </View>
  );
}

const styles = StyleSheet.create({
  heading : {
    fontSize : 30,
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop : 40,
    marginBottom : 20,
    color : 'blue'
    
}
});

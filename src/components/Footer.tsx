import { StyleSheet, Text, View } from "react-native";

const Footer = () =>  {

return(
  <>
    <View style={styles.container}>
      <Text style={styles.text1}>Home</Text>
      <Text style={styles.text1}>Dinners</Text>
      <Text style={styles.text1}>Settings</Text>
    </View>
  </>
)
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#ad2c39',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center" 
  },
  text1: {
    color: "white",
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 20
  }
})

export default Footer;
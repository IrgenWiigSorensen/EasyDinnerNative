import { StyleSheet, Text, TextInput, View } from "react-native";

const Navbar = () =>  {

return(
  <>
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.text1}>Easy Dinner</Text>
      </View>
      <View style={styles.userBox}>
        <Text style={styles.text1}>User</Text>
      </View>
      {/* <View>
        <TextInput style={styles.input}/>
      </View> */}
    </View>
  </>
)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 40,
    backgroundColor: "#F04226", 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  logoBox: {
   height: 50,
   justifyContent: 'center',
  }, 
  userBox: {
    height: 50,
    justifyContent: 'center',
  }, 
  // input: {
  //   flex: 0,
  //   height: 30,
  //   margin: 2,
  //   marginHorizontal: 60,
  //   borderWidth: 1,
  //   padding: 20,
  //   backgroundColor: "white"
  // },
  text1: {
    color: "white",
    fontSize: 20
  }
})

export default Navbar;
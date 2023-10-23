import { StyleSheet, Text, TextInput, View } from "react-native";

const Navbar = () =>  {

return(
  <>
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Easy Dinner</Text>
      </View>
      <View>
        <Text style={styles.text1}>User</Text>
      </View>
      <View>
        <TextInput style={styles.input}/>
      </View>
    </View>
  </>
)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "red"
  },
  input: {
    flex: 0,
    height: 30,
    margin: 2,
    marginHorizontal: 60,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "white"
  },
  text1: {
    color: "white",
  }
})

export default Navbar;
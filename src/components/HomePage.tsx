import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const HomePage = () => {
  const [dinnerToday, setDinnerToday] = useState<string>("")

  const DinnerList = ["Pasta", "Taco", "Pizza"];

  
  const chooseDinner = () => {
    const randomIndex = Math.floor(Math.random() * DinnerList.length)
    const randomDinner = DinnerList[randomIndex];

    setDinnerToday(randomDinner);
  }

  useEffect(() => {
    chooseDinner();
  }, [dinnerToday])

  

  return(
    <>
      <View style={styles.container}>

        <Text></Text>
        <View style={styles.box}>
          <Text>Today {dinnerToday} would be great!</Text>
        </View>
        <View style={styles.box}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.box}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'green'}]}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin:5,
    flexDirection: 'column',
  },
  box: {
    backgroundColor: 'grey',
    margin: 10,
    alignItems: 'center',
    padding: 30,
    borderRadius: 30
    // justifyContent: 'center',
  },
});

export default HomePage;
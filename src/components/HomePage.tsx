import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Pasta from "../../assets/Pasta.webp";


interface Recipe {
  recipe_Id?: number,
  recipe_Name: string,
  description?: string  
}

const HomePage = () => {
  const [listOfRecipes, setListofRecipes] = useState<Array<Recipe>>([])
  const [dinnerToday, setDinnerToday] = useState<Recipe>()


  const chooseDinner = (recipes: Array<Recipe>) => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomDinner = recipes[randomIndex];

    recipes ? setDinnerToday(randomDinner) : setDinnerToday({recipe_Name:"PastaAgain"})
  }

  const fetchedRecipesData = async () => {
    try {
      const response = await fetch('http://192.168.0.25:7166/api/Recipes');
      const data = await response.json();
      setListofRecipes(data);

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchedRecipesData();
  }, [])

  useEffect(()=> {
    chooseDinner(listOfRecipes);
  }, [listOfRecipes])

  return(
    <>
      <ScrollView style={styles.container}>
        <Text></Text>
        <View style={styles.box}>
          <View>
            <Image source={Pasta} style={styles.image}/>
          </View>
          <Text>Today {dinnerToday?.recipe_Name} would be great!</Text>
          <Text> {dinnerToday?.description} sounds great!</Text>
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
      </ScrollView>
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
  // imageBox: {
  //   maxWidth: 40,
  //   maxHeight: 40
  // }, 
  image: {
    resizeMode: "cover",
    height: 200,
    width: 250
  }
});

export default HomePage;
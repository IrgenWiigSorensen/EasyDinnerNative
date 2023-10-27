import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Pasta from "../../assets/Pasta.webp";
import Footer from "../navigation/MyTabBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MyTabBar from "../navigation/MyTabBar";

interface Recipe {
  recipe_Id?: number;
  recipe_Name: string;
  description?: string;
}

type StackParamList = {
  Home: undefined;
  Dinners: undefined;
};

type Props = NativeStackScreenProps<StackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  const [listOfRecipes, setListofRecipes] = useState<Array<Recipe>>([]);
  const [dinnerToday, setDinnerToday] = useState<Recipe>();

  const chooseDinner = (recipes: Array<Recipe>) => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomDinner = recipes[randomIndex];

    recipes
      ? setDinnerToday(randomDinner)
      : setDinnerToday({ recipe_Name: "PastaAgain" });
  };

  const fetchedRecipesData = async () => {
    try {
      const response = await fetch("http://192.168.0.25:7166/api/Recipes");
      const data = await response.json();
      setListofRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedRecipesData();
  }, []);

  useEffect(() => {
    chooseDinner(listOfRecipes);
  }, [listOfRecipes]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.headerText}>Today's Easy Dinner: </Text>
          <View>
            <Image source={Pasta} style={styles.image} />
          </View>
          <Text style={styles.headerText}>{dinnerToday?.recipe_Name} </Text>
          <Text style={styles.descriptionText}>
            {" "}
            {dinnerToday?.description} sounds great!
          </Text>
          <Pressable
            onPress={() => chooseDinner(listOfRecipes)}
            style={styles.button}
          >
            <Text>New Dinner</Text>
          </Pressable>
        </View>
        <View style={styles.box}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            title="Go to Dinners"
            onPress={() => navigation.navigate("Dinners")}
          />
        </View>
        <View style={styles.box}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
      {/* <MyTabBar /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 5,
    flexDirection: "column",
  },
  box: {
    backgroundColor: "#8D8387",
    margin: 10,
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    // justifyContent: 'center',
  },
  image: {
    resizeMode: "cover",
    height: 200,
    width: 300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#36A869",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 15,
  },
});

export default HomeScreen;

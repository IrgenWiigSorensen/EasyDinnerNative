import { useEffect, useState, useContext } from "react";
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Pasta from "../../assets/Pasta.webp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipesContext } from "../context/RecipesContext";

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
  const [dinnerToday, setDinnerToday] = useState<Recipe>();
  const { recipeList } = useContext(RecipesContext)


  const chooseDinner = (recipes: Array<Recipe>) => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomDinner = recipes[randomIndex];

    recipes
      ? setDinnerToday(randomDinner)
      : setDinnerToday({ recipe_Name: "PastaAgain" });
  };



  useEffect(() => {
    recipeList ? chooseDinner(recipeList) : undefined; 
  }, [recipeList]);

  return (
      <View style={styles.container}>
        <View style={styles.dinnerBox}>
          <Text style={styles.headerText}>Today's Easy Dinner: </Text>
          <View>
            <Image source={Pasta} style={styles.image} />
          </View>
          <Text style={styles.dinnerText}>{dinnerToday?.recipe_Name} </Text>
          <Text style={styles.descriptionText}>
            {" "}
            {dinnerToday?.description} sounds great!
          </Text>
        </View>
        <View style={styles.buttonBox}>
          <Pressable
            onPress={() => chooseDinner(recipeList)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>I want something else!</Text>
          </Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ea6947",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  dinnerBox: {
    height: '55%',
    // flex: 1,
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    padding: 25,
    borderRadius: 15,
  },
  image: {
    resizeMode: "cover",
    height: 200,
    width: 300,
  },
  headerText: {
    fontSize: 27,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  dinnerText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  buttonBox: {
    height: '20%',
    // flex: 0,
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    height: '40%',
    backgroundColor: "#36A869",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default HomeScreen;

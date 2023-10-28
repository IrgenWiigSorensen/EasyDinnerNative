import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { RecipesContext } from "../context/RecipesContext";
import Pasta from "../../assets/Pasta.webp";




const Dinners = () => {
  const { recipeList } = useContext(RecipesContext);


  return (
    <>
      <ScrollView style={styles.container}>
        { recipeList ? 
          recipeList.map((recipe) => {
            const { recipe_Name, recipe_Id, description} = recipe;
            return(
              <View style={styles.box}>
                 <View>
                    <Image source={Pasta} style={styles.image} />
                  </View>
                  <View style={styles.textBox}>
                    <Text style={styles.headerText}>{recipe_Name}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                  </View>
              </View>
            )
          })
          : undefined
        }
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 5,
    flexDirection: "column",
    flexShrink: 1
  },
  box: {
    flex:1,
    flexDirection: "row",
    backgroundColor: "#ea6947",
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
  image: {
    resizeMode: "cover",
    height: 100,
    width: 120,
    borderRadius: 15
  },
  textBox: {
    paddingHorizontal: 10,
    flexDirection: "column",
    width: '70%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Dinners; 
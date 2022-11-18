import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.

  const addRecipe = (recipe)=>{
    setRecipes([...recipes, recipe]);
  }

  const deleteRecipe = (name)=>{
    let includedRecipes = recipes.filter((recipe)=>{
      if(recipe.name !== name) return true;
      
      return false;
    })
    setRecipes(includedRecipes);
  }
  
  return (
    <div className="App">
      <header><h1>Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={deleteRecipe}/>
      <RecipeCreate handleCreate = {addRecipe} />
    </div>
  );
}


export default App;

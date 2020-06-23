import React, {useEffect, useState} from 'react';
import './App.css'
import Recipes from './Recipes';


function App() {
  const APP_ID = '9a83ab27';
  const APP_KEY = '9bfa02c47c0db20652195008bc9177c4';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
 
  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {
        recipes.map( recipe => (
          <Recipes id={recipe.recipe.title} title={recipe.recipe.label} calories={recipe.recipe.calories} 
          imageurl={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;

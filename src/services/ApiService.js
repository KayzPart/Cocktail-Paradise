export default class ApiService {
  // Requête boissons avec avec alcool
  getDrinkAlcool () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic')
  }

  // Requête boisson sans alcool
  getDrinkNotAlcool () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic')
  }

  // Requête boisson par id
  getRead (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
  }

  // Requête slider (les dernier cocktail)
  getSlider () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink')
  }

  // Requête cocktails populaire (Page accueil)
  getDrinksHomepage () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
  }

  // Requête derniers cocktails (Page accueil)
  getDrinksLatest () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  }

  // Requête liste ingrédients
  getIngredientsList () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
  }

  // Requête Ingrédient par id
  getReadIngredient (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?iid=${id}`)
  }

  // Requête recherche par ingredient
  getSearchByIngredient (search) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${search}`)
  }

  getSearchCocktail (search) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${search}`)
  }

  // Requête ingredient Cocktail par name
  getIngredientCocktail (name) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`)
  }
  // getSearchIngredientsByCocktail (search) {
  //   return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${search},${search},${search}`)
  // }

  // Requête pour flûte Cahmpagne
  getChampagne () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Champagne_flute')
  }

  // Requête pour verres à cocktail
  getCocktailGlass () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass')
  }

  // Requête Catégorie pour boissons ordinaire
  getOrdinaryCocktail () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink')
  }

  // Requête Catégories pour cocktail
  getCocktail () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail')
  }
}

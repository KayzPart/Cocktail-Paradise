export default class ApiService {
  // Requête boissons avec avec alcool
  getDrinkAlcool () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/1/filter.php?a=Alcoholic')
  }

  // Requête boisson sans alcool
  getDrinkNotAlcool () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/1/filter.php?a=Non_Alcoholic')
  }

  // Requête boisson par id
  getRead (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${id}`)
  }

  // Requête slider (les dernier cocktail)
  // getSlider () {
  //   return fetch('https://www.thecocktaildb.com/api/json/v2/1/latest.php')
  // }

  // Requête cocktails populaire (Page accueil)
  getDrinksHomepage () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
  }

  // Requête derniers cocktails (Page accueil)
  getDrinksLatest () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/1/latest.php')
  }
}

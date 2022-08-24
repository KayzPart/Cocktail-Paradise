export default class ApiService {
  getDrinksHomepage () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail')
  }
}

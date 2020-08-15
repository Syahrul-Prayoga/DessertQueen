function main() {

  // const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
  const urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const foodId = ["52855", "52856", "52854", "52891", "52923", "52897", "52910", "52924", "52966", "52776", "52787", "53015"];

  const getMeal = () => {

    Promise.all(foodId.map(id => {
      return fetch(`${urlId}${id}`)
        .then(response => response.json())
        .then(responseJson => responseJson.meals[0])
        .catch(error => showResponseMessage(error));
    })).then(mealResult => renderMeal(mealResult))

  }

  const renderMeal = (meals) => {
    const listMealElement = document.querySelector("#listMeal");
    listMealElement.innerHTML = "";

    meals.forEach(meal => {
      listMealElement.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card bg-light">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
              </div>
            </div>
          </div>
      `;

    })
  }
  const showResponseMessage = (message = "Check Your Internet Connection") => {
    alert(message);
  }

  getMeal();
}

export default main;
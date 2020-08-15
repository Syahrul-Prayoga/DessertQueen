function main() {

  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';

  const getMeal = () => {
    fetch(`${baseUrl}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderMeal(responseJson.meals.slice(6, 18));
        }
      })
      .catch(error => {
        showResponseMessage(error);
      })
  }

  const renderMeal = (meals) => {
    const listMealElement = document.querySelector("#listMeal");
    listMealElement.innerHTML = "";

    meals.forEach(meal => {
      listMealElement.innerHTML += `
          <div class="col-md-3">
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
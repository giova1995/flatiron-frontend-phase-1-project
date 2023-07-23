console.log("main.js connected");

// get search field input
const searchTermsInput = document.body.querySelector("#search-terms");

// fetch meal categories data from the MealDB API
const getMealCategories = async () => {
  const mealCategoriesApiURl =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  try {
    const response = await fetch(mealCategoriesApiURL);
    const data = await response.json();
    const categories = data.categories;
    console.log(`categories: `, categories);
    return categories;
  } catch (error) {
    console.log(error);
    alert("Something went wrong, try again later");
  }
  
};

// render meal categories data
const renderMealCategories = (mealCategoriesObj) => {
  console.log("renderMealCategories");
  console.table(mealCategoriesObj);
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus occurred");

  const mealCategoriesObj = await getMealCategories();
  renderMealCategories(mealCategoriesObj);
};

// add event listener to search term
searchTermsInput.addEventListener('focus', handleFormInputFocus);

console.log("main.js connected");

// get search field input
const searchTermsInput = document.body.querySelector("#search-terms");

// fetch air quality categories data from the AQICN API
const getAirCategories = async () => {
  const airCategoriesApiURL = "https://aqicn.org/api/";

  try {
    const response = await fetch(airCategoriesApiURL);
    const data = await response.json();
    const categories = data.categories;
    console.log(`categories: `, categories);
    return categories;
  } catch (error) {
    console.log(error);
    alert("Something went wrong, try again later");
  }
};

// render air categories data
const airCategories = (airCategoriesObj) => {
  console.log("renderAirCategories");
  console.table(mealCategoriesObj);
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus occurred");

  const mealCategoriesObj = await getAirCategories();
  renderAirCategories(airCategoriesObj);
};

// add event listener to search term
searchTermsInput.addEventListener('focus', handleFormInputFocus);

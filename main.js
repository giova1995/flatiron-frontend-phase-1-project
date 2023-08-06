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

// render air categories data to dom
const airCategories = (airCategoriesObj) => {
  console.log("renderAirCategories");
  console.table(airCategoriesObj);
  // find and select a UL with air quality categories ID dom element to append my data into
  const airCategoriesList = document.body.querySelector("#air-categories-list");

  // for each element in our air categories array
  airCategoriesArray.forEach((airCategories) => {
    // create wrapping element maybe <li> class of card
    const airCategoryListItem = document.createElement("li");
    airCategoryListItem.className = "air-category-card/";
    airCategoriesList.appendChild(airCategoryListItem);
  });
  // display category name, image and description
  // image
  // create an img element
  const airCategoryImg = document.createElement("img");
  // set img src to category thumbnail url
  airCategoryImg.src = airCategory?.thumbnail;

  // give it a mobile friendly max width of like 300px
  airCategoryImg.width = 300;

  //appendChild the image to our card
  // name
  // create an h4 element
  // set h4 element textContent to be an air quality category name
  //appendChild the image to our card
  //description
  // create an p element
  // set p element textContent to be an air quality category name
  //appendChild the image to our card
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus occurred");

  const airCategoriesObj = await getAirCategories();
  renderAirCategories(airCategoriesObj);
};

// add event listener to search term
searchTermsInput.addEventListener('focus', handleFormInputFocus);

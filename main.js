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
  console.table(airCategoriesObj);
  // find and select a UL with air quality categories ID dom element to append my data into

  // for each element in our air qua;ity categories array
  // create a wrapping element maybe <article> class of card
  //appendChild the article.card to selected DOM element
  //append the article.card to DOM
  // display category name, image and description
  // image
  // create an image element
  // set img src to category thumbnail url
  // give class of category-thumbnail
  // give it a mobile friendly max width of like 300px
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

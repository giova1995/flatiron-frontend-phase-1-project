const searchTermsInput = document.body.querySelector("#search-terms");


const handleFormInputFocus = () => {
    console.log('focus occurred')
}
const handleFormInputFocus = async () => {
  console.log("focus occurred");

  await getMealCategories();
};

searchTermsInput.addEventListener('focus', handleFormInputFocus)

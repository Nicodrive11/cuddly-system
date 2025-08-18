// very long code. only used to make sure assignment was complete and functional.
//Need to add a loop to reduce all the redundancies

let modal = document.querySelector("#modal"); // calls the modal div tag

let closeButton = document.querySelector(".material-symbols-outlined");
let submitStatus = document.querySelector(".submit_status");

let recipeOne = document.querySelector("#recipeOne");
let recipeTwo = document.querySelector("#recipeTwo");
let recipeThree = document.querySelector("#recipeThree");
let submit = document.querySelector("#submit");

let recipe1Name = document.querySelector("#recipe1Name");
let recipe2Name = document.querySelector("#recipe2Name");
let recipe3Name = document.querySelector("#recipe3Name");

let recipe1Img = document.querySelector("#recipe1Img");
let recipe2Img = document.querySelector("#recipe2Img");
let recipe3Img = document.querySelector("#recipe3Img");

let recipe1Category = document.querySelector("#recipe1Category");
let recipe2Category = document.querySelector("#recipe2Category");
let recipe3Category = document.querySelector("#recipe3Category");

let recipe1Culture = document.querySelector("#recipe1Culture");
let recipe2Culture = document.querySelector("#recipe2Culture");
let recipe3Culture = document.querySelector("#recipe3Culture");

//Modal tags
let modalName = document.querySelector("#modal-name");
let modalID = document.querySelector("#modalID");
let modalImg = document.querySelector("#modalImg");
let modalCategory = document.querySelector("#modalCategory");
let modalVideoLink = document.querySelector("#modalVideoLink");
let modalIngredient1 = document.querySelector("#modalIngredient1");
let modalIngredient2 = document.querySelector("#modalIngredient2");
let modalIngredient3 = document.querySelector("#modalIngredient3");
let modalIngredient4 = document.querySelector("#modalIngredient4");
let modalIngredient5 = document.querySelector("#modalIngredient5");
let modalIngredient6 = document.querySelector("#modalIngredient6");
let modalIngredient7 = document.querySelector("#modalIngredient7");
let modalIngredient8 = document.querySelector("#modalIngredient8");
let modalIngredient9 = document.querySelector("#modalIngredient9");
let modalIngredient10 = document.querySelector("#modalIngredient10");
let modalIngredient11 = document.querySelector("#modalIngredient11");
let modalIngredient12 = document.querySelector("#modalIngredient12");
let modalIngredient13 = document.querySelector("#modalIngredient13");
let modalIngredient14 = document.querySelector("#modalIngredient14");
let modalIngredient15 = document.querySelector("#modalIngredient15");
let modalIngredient16 = document.querySelector("#modalIngredient16");
let modalIngredient17 = document.querySelector("#modalIngredient17");
let modalIngredient18 = document.querySelector("#modalIngredient18");
let modalIngredient19 = document.querySelector("#modalIngredient19");
let modalIngredient20 = document.querySelector("#modalIngredient20");
let modalInstruction = document.querySelector("#modalInstruction");

// recipe 1
// create an asynchronous request to a web API
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(function (response) {
    //this function is called in the future, when a respinse becomes available
    console.log("response recived from server API!");

    response.json().then(function (res) {

        // this function is called in the future, when the response(data) is available
        console.log("1 data loaded from the API:",res);
        console.log(res);

        recipe1Name.textContent = res.meals[0].strMeal;
        recipe1Img.src = res.meals[0].strMealThumb;
        recipe1Category.textContent = "Category: " + res.meals[0].strCategory;
        recipe1Culture.textContent = "Culture: " + res.meals[0].strArea;

            recipeOne.addEventListener("click", function() {
              openModal()
              modalName.textContent =  "Meal Name: " + res.meals[0].strMeal;
              modalID.textContent =  "Recipe ID: " + res.meals[0].idMeal;
              modalImg.src = res.meals[0].strMealThumb;
              modalCategory.textContent = "Category: " + res.meals[0].strCategory + "      Culture: " + res.meals[0].strArea;
              modalVideoLink.href = res.meals[0].strYoutube;
              for (let i = 1; i <= 20; i++) {
                let ingredient = res.meals[0][`strIngredient${i}`];
                let measure = res.meals[0][`strMeasure${i}`];
                let modalIngredient = document.getElementById(`modalIngredient${i}`);
                
                if (ingredient && ingredient.trim() !== "") {
                    modalIngredient.textContent = `${measure || ""} ${ingredient}`;
                } else {
                    modalIngredient.textContent = "";
                }
            }
              modalInstruction.textContent = res.meals[0].strInstructions;
            });
    });
});

// recipe 2
// create an asynchronous request to a web API
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(function (response) {
    //this function is called in the future, when a respinse becomes available
    console.log("response recived from server API!");

    response.json().then(function (res) {

        // this function is called in the future, when the response(data) is available
        console.log("2 data loaded from the API:",res);
        console.log(res);

        recipe2Name.textContent = res.meals[0].strMeal;
        recipe2Img.src = res.meals[0].strMealThumb;
        recipe2Category.textContent = "Category: " + res.meals[0].strCategory;
        recipe2Culture.textContent = "Culture: " + res.meals[0].strArea;
        console.log(res.meals[0].strMeal);

            recipeTwo.addEventListener("click", function() {
              openModal()
              modalName.textContent =  "Meal Name: " + res.meals[0].strMeal;
              modalID.textContent =  "Recipe ID: " + res.meals[0].idMeal;
              modalImg.src = res.meals[0].strMealThumb;
              modalCategory.textContent = "Category: " + res.meals[0].strCategory + "      Culture: " + res.meals[0].strArea;
              modalVideoLink.href = res.meals[0].strYoutube;
              for (let i = 1; i <= 20; i++) {
                let ingredient = res.meals[0][`strIngredient${i}`];
                let measure = res.meals[0][`strMeasure${i}`];
                let modalIngredient = document.getElementById(`modalIngredient${i}`);
                
                if (ingredient && ingredient.trim() !== "") {
                    modalIngredient.textContent = `${measure || ""} ${ingredient}`;
                } else {
                    modalIngredient.textContent = "";
                }
            }
              modalInstruction.textContent = res.meals[0].strInstructions;
            });

    });
});

// recipe 3
// create an asynchronous request to a web API
fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(function (response) {
    //this function is called in the future, when a respinse becomes available
    console.log("response recived from server API!");

    response.json().then(function (res) {

        // this function is called in the future, when the response(data) is available
        console.log("3 data loaded from the API:",res);
        console.log(res);

        recipe3Name.textContent = res.meals[0].strMeal;
        recipe3Img.src = res.meals[0].strMealThumb;
        recipe3Category.textContent = "Category: " + res.meals[0].strCategory;
        recipe3Culture.textContent = "Culture: " + res.meals[0].strArea;
        console.log(res.meals[0].strMeal);

            recipeThree.addEventListener("click", function() {
              openModal()
              modalName.textContent =  "Meal Name: " + res.meals[0].strMeal;
              modalID.textContent =  "Recipe ID: " + res.meals[0].idMeal;
              modalImg.src = res.meals[0].strMealThumb;
              modalCategory.textContent = "Category: " + res.meals[0].strCategory + "      Culture: " + res.meals[0].strArea;
              modalVideoLink.href = res.meals[0].strYoutube;
              for (let i = 1; i <= 20; i++) {
                let ingredient = res.meals[0][`strIngredient${i}`];
                let measure = res.meals[0][`strMeasure${i}`];
                let modalIngredient = document.getElementById(`modalIngredient${i}`);
                
                if (ingredient && ingredient.trim() !== "") {
                    modalIngredient.textContent = `${measure || ""} ${ingredient}`;
                } else {
                    modalIngredient.textContent = "";
                }
            }
              modalInstruction.textContent = res.meals[0].strInstructions;
            });

    });
});

// recipe submit. wasnt able to complete in time.
// create an asynchronous request to a web API
// fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//   .then(function (response) {
//     //this function is called in the future, when a respinse becomes available
//     console.log("response recived from server API!");

//     response.json().then(function (res) {

//         // this function is called in the future, when the response(data) is available
//         console.log("data loaded from the API:",res);
//         console.log(res);

//         console.log(res.meals[0].strMeal);

//             submit.addEventListener("click", function() {
//               openModal()
//             });

//     });
// });



function openModal() {
  
    modal.classList.remove("hidden"); // shows the modal window
  }

  closeButton.addEventListener("click", function() { // listens for click from the x button on the modal window
    modal.classList.add("hidden"); // hides modal window
  });

  window.addEventListener("click", function(event) { // listening for a click
    if (event.target == modal) { // if user clickes off thw modal window
      modal.classList.add("hidden"); // hides modal window
    }
  });



 



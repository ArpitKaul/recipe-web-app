

 // biryani
function openModal() {
  document.getElementById("myModal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("myModal").classList.add("hidden");
}
// momos
function openmodal() {
  document.getElementById("modal").classList.remove("hidden");
}
function closemodal() {
  document.getElementById("modal").classList.add("hidden");
}
// idli
function openmoda() {
  document.getElementById("moda").classList.remove("hidden");
}
function closemoda() {
  document.getElementById("moda").classList.add("hidden");
}
//chole bhature
function openmod() {
  document.getElementById("mod").classList.remove("hidden");
}
function closemod() {
  document.getElementById("mod").classList.add("hidden");
}
// rajma 
function openmo() {
  document.getElementById("mo").classList.remove("hidden");
}
function closemo() {
  document.getElementById("mo").classList.add("hidden");
}
function openmodd() {
  document.getElementById("modd").classList.remove("hidden");
}
function closemodd() {
  document.getElementById("modd").classList.add("hidden");
}
function openmoddd() {
  document.getElementById("moddd").classList.remove("hidden");
}
function closemoddd() {
  document.getElementById("moddd").classList.add("hidden");
}


const searchbox = document.getElementById('searchbox');
const searchbtn = document.getElementById('searchbtn');
const container = document.getElementById('container');
const recipedeatilscontent= document.querySelector('.recipe-details-content');
const recipeclosebtn = document.querySelector('.recipe-close-btn');


const fetchrecipes = async (query) =>{
  container.innerHTML = "<h2>Fetching Recipes...</h2>"
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const response = await data.json();

  container.innerHTML = "";
  response.meals.map(meal => {
    const recipediv = document.createElement('div');
    recipediv.classList.add('recipe');
    recipediv.classList.add('bg-white','text-black','cursor-pointer','flex','flex-col','rounded-lg','shadow-2xl','max-w-350px')
    recipediv.innerHTML = `
         <img src ="${meal.strMealThumb}">
         <h3 class="text-xl font-bold text-center text-gray-800">${meal.strMeal}</h3>
         <p class="text-lg text-gray-700 font-serif text-center"><span>${meal.strArea} Dish </span></p>
         <p class ="text-center">Belongs to <span class = "font-bold">${meal.strCategory}</span> Category</p>
    `
    const button = document.createElement('button');
    button.textContent = "View Recipe";
    button.classList.add('bg-red-500','hover:bg-red-700','text-white', 'font-bold', 'py-2', 'px-4', 'rounded');

    recipediv.appendChild(button);

    // add event listner to recipe button
    button.addEventListener('click' , () =>{
      openrecipepopup(meal);
    });

    container.appendChild(recipediv);
  });
}

// function to fetch ingredients 

const fetchIngredients =  (meal) => {
  let ingredientsList = "";
  for(let i=1;i<=20;i++){
    const ingredient =meal[`strIngredient${i}`];
    if(ingredient){
      const measure = meal[`strMeasure${i}`];
      ingredientsList += `<li>${measure} ${ingredient}</li>`
    }
    else{
      break;
    }
  }
  return ingredientsList;

}

const openrecipepopup = (meal) =>{
  recipedeatilscontent.innerHTML  = `
      <h2 class = "text-center  uppercase underline mb-10 ">${meal.strMeal}</h2>
      <h3>Ingredients:<h3/>
      <ul >${fetchIngredients(meal)}</ul>
      <div class="leading-[30px] whitespace-pre-line mb-10">
          <h3>Instructions:</h3>
          <p>${meal.strInstructions}</p>
      </div>
  `
  recipedeatilscontent.parentElement.style.display = "block";
}

searchbtn.addEventListener('click' , (e) =>{
  e.preventDefault();
  const searchinput = searchbox.value.trim();
  if(!searchinput){
    recipeContainer.innerHTML = `<h2>Type in the meal in the search box.</h2>`;
    return;
  }
  fetchrecipes(searchinput);
})

recipeclosebtn.addEventListener('click',()=>{
  recipedeatilscontent.parentElement.style.display = "none";
})


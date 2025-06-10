import createCardTemplate from "./createCardTemplate.js";

const placeHolder = document.querySelector(".container");
const loaderElement = document.querySelector("#loader");



let noElement = document.createElement('p');
noElement.classList.add("mt-[100px]", "ml-[10%]")
noElement.innerHTML = "No data Found!!"

export default async function searchData(searchStr){
    console.log(searchStr);
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`;
    try{
        placeHolder.replaceChildren();
        loaderElement.classList.remove("hidden");
        console.log(searchUrl);
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data.meals);
        let searchDataArray = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
            id: idMeal,
            title: strMeal,
            details: strInstructions,
            image: strMealThumb
        }));
        
        
        for(let i = 0; i < searchDataArray.length; i++){
            const newElement = createCardTemplate(searchDataArray[i]);
            placeHolder.appendChild(newElement);
        }
        
        
    } catch(err){
        loaderElement.classList.remove("hidden");
        placeHolder.replaceChildren();
        console.log("Oh allah make it possible!!");
        placeHolder.appendChild(noElement);
    }
    
    
}

// import getSingleData from './utils/getSingleData.js';
// import getAllData from "./utils/allData.js";
// import getSearchData from "./utils/searchData.js";
// import createCardTemplate from "./utils/createCardTemplate";


// createCardTemplate({id:12, title:"Card Title", image: "./assets/images/card.jpg", details:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis saepe, aliquid, nostrum qui sed earum odio adipisci asuscipit dolor fugit deleniti itaque provident praesentium nesciunt cupiditate voluptas veniam commodi!"});


async function getAllData() {  // initial data fetching from the api
    try{
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok && data.meals.length > 0){
            let allData = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
                id: idMeal,
                title: strMeal,
                details: strInstructions,
                image: strMealThumb
            }));
            
            return allData;
        } else{
            throw new Error("Not Exists")
        }
        
    } catch(err){
        return err.message;
    }
}

async function getSearchData(searchStr){
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`;
    try{
        const response = await fetch(searchUrl);
        const data = await response.json();
        if( response.ok && data.meals.length > 0){
            let searchDataArray = data.meals.map(({idMeal, strMeal, strInstructions, strMealThumb}) => ({
                id: idMeal,
                title: strMeal,
                details: strInstructions,
                image: strMealThumb
            }));
            return searchDataArray;
        } else{
            throw new Error("Not Exits");
        }
        
    } catch(err){
        return err.message;
    }
}


const placeHolder = document.querySelector(".container");

function createCardTemplate({id, title, image, details}){
    // parent div
    let cardContainerDiv = document.createElement('div');
    cardContainerDiv.classList.add("rounded-2xl", "overflow-hidden", "shadow-lg", "bg-white", "border", "border-gray-200", "transition", "hover:shadow-xl");
    
    // card image
    let cardImage = document.createElement('img');
    cardImage.classList.add("w-full", "h-36", "md:h-48", "object-cover");
    cardImage.setAttribute("src", image);

    // text div
    let textDiv = document.createElement('div');
    textDiv.classList.add("p-4");
    
    // title element
    let h2Element = document.createElement('h2');
    h2Element.classList.add("text-xl",  "font-semibold",  "mb-2");
    h2Element.innerHTML = title;

    // paragraph element
    let pElement = document.createElement('p');
    pElement.classList.add("text-gray-600", "mb-4", "text-sm", "md:text-base", "line-clamp-2");
    pElement.innerHTML = details;

    // button div
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add("flex", "justify-end");

    //button element
    let buttonElement = document.createElement('button');
    buttonElement.setAttribute("type", "submit");
    buttonElement.classList.add("bg-orange-400", "hover:bg-orange-600", "text-white", "text-[14px]", "md:text-[16px]", "px-4", "py-2", "rounded-lg", "transition");
    buttonElement.innerHTML = "View Details"

    textDiv.appendChild(h2Element);
    textDiv.appendChild(pElement);

    buttonDiv.appendChild(buttonElement);
    textDiv.appendChild(buttonDiv);

    cardContainerDiv.appendChild(cardImage);
    cardContainerDiv.appendChild(textDiv);

    return cardContainerDiv;

}
let noElement = document.createElement('p');
noElement.innerHTML = "No data Found!!"

async function placeAllItems(){
    placeHolder.replaceChildren();
    const allData = await getAllData();
    if(allData.length > 0){
        allData.forEach(element => {
            const newElement = createCardTemplate(element);
            placeHolder.appendChild(newElement);
        });
    } else{
        placeHolder.appendChild(noElement);
    }
    

}

async function placeSearchItems(){
    let inputBox = document.querySelector('#searchStr');
    let searchString = inputBox.value;
    console.log(searchString);
    placeHolder.replaceChildren();
    let searchData = await getSearchData(searchString);
    if(searchData.length > 0){
        searchData.forEach(element => {
            const newElement = createCardTemplate(element);
            placeHolder.appendChild(newElement);
        });
    } else {
        placeHolder.appendChild(noElement);
    }
    
}

let searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    placeSearchItems();
})

// placeAllItems();
// placeSearchItems();
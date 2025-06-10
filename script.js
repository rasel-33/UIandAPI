import getAllData from "./utils/allData.js";
import createCardTemplate from "./utils/createCardTemplate.js";
import searchData from "./utils/searchData.js";
// import placeSearchItems from "./utils/placeSearchItems.js";



const placeHolder = document.querySelector(".container");
const loaderElement = document.querySelector("#loader");


let searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    let inputBox = document.querySelector('#searchStr');
    let searchString = inputBox.value;
    searchData(searchString);
    
});

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




setTimeout(() => {
    loaderElement.classList.add("hidden");
    
    placeAllItems();
}, 200);


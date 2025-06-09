import searchData from "./searchData.js";
import createCardTemplate from "./createCardTemplate.js";

const placeHolder = document.querySelector(".container");
const loaderElement = document.querySelector("#loader");


let noElement = document.createElement('p');
noElement.innerHTML = "No data Found!!"

export default async function placeSearchItems(){
    let inputBox = document.querySelector('#searchStr');
    let searchString = inputBox.value;
    placeHolder.replaceChildren();
    let responseData = await searchData(searchString);
    if(responseData.length > 0){
        responseData.forEach(element => {
            const newElement = createCardTemplate(element);
            placeHolder.appendChild(newElement);
        });
    } else {
        placeHolder.appendChild(noElement);
    }
}
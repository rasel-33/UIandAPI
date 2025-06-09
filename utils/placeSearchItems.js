import createCardTemplate from "./createCardTemplate.js";
import searchData from "./searchData.js";

const placeHolder = document.querySelector(".container");
const loaderElement = document.querySelector("#loader");


let noElement = document.createElement('p');
noElement.innerHTML = "No data Found!!"

export default async function placeSearchItems(){
    loaderElement.classList.remove("hidden");
    let inputBox = document.querySelector('#searchStr');
    let searchString = inputBox.value;
    placeHolder.replaceChildren();
    let responseData = await searchData(searchString);
    console.log(typeof(responseData));
    console.log(responseData);
    if(responseData !== null){
        responseData.forEach((element) => {
            const newElement = createCardTemplate(element);
            placeHolder.appendChild(newElement);
        });
    } else {
        placeHolder.appendChild(noElement);
    }
    loaderElement.classList.add("hidden");
}
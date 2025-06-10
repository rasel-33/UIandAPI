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

const btn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        btn.classList.remove('hidden');
        btn.classList.add('opacity-100');
    } else {
        btn.classList.add('hidden');
        btn.classList.remove('opacity-100');
    }
});

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth'});
});


setTimeout(() => {
    loaderElement.classList.add("hidden");
    
    placeAllItems();
}, 200);

/// testing change


// <!-- Card -->
//            <div
//            class="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 transition hover:shadow-xl"
//          >
//            <img
//              class="w-full h-36 md:h-48 object-cover"
//              src="./assets/images/card.jpg"
//              alt="Card image"
//            />
//            <div class="p-4">
//              <h2 class="text-xl font-semibold mb-2">Card Title</h2>
//              <p class="text-gray-600 mb-4 text-sm md:text-base line-clamp-2">
//                Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                Blanditiis saepe, aliquid, nostrum qui sed earum odio adipisci a
//                suscipit dolor fugit deleniti itaque provident praesentium
//                nesciunt cupiditate voluptas veniam commodi!
//              </p>
//              <div class="flex justify-end">
//                <button
//                  class="bg-orange-400 hover:bg-orange-600 text-white text-[14px] md:text-[16px] px-4 py-2 rounded-lg transition"
//                >
//                  View Details
//                </button>
//              </div>
//            </div>
//          </div>
//          <!-- Repeat card elements as needed -->

import getItemDetails from "./getItemDetails.js";


export default function createCardTemplate({id, title, image, details}){
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
    buttonElement.setAttribute('id', 'viewDetailsButton');
    buttonElement.classList.add("bg-orange-400", "hover:bg-orange-600", "text-white", "text-[14px]", "md:text-[16px]", "px-4", "py-2", "rounded-lg", "transition");
    buttonElement.innerHTML = "View Details"

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        const overlappingSection = getItemDetails({id, title, image, details});
        const footer = document.querySelector(".footer-area");
        footer.before(overlappingSection);

    });

    textDiv.appendChild(h2Element);
    textDiv.appendChild(pElement);

    buttonDiv.appendChild(buttonElement);
    textDiv.appendChild(buttonDiv);

    cardContainerDiv.appendChild(cardImage);
    cardContainerDiv.appendChild(textDiv);

    return cardContainerDiv;

}
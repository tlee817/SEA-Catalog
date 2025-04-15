/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the restaurants array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// This is an array of strings (TV show restaurants)

const restaurants = [
  {
    name: "Nep Cafe",
    image: "src/nep.jpeg",
    location: "Fountain Valley",
    ratings: 10,
    notes: "TRY the Ube coffee , Great presentation"
  },
  {
    name: "Jon & Vinny's",
    image: "src/jonvinny.jpeg",
    location: "Brentwood",
    ratings: 8,
    notes:  "Great pasta , Good date spot!"
  },
  {
    name: "Foo Foo Tei",
    image: "src/fft.jpeg",
    location: "Hacienda Heights",
    ratings: 7,
    notes: "Shoyu ramen , Hidden gem , Huge menu"
  }, 
  {
    name: "Marugame Udon",
    image: "src/mudon.jpeg",
    location: "Sawtelle",
    ratings: 6,
    notes: "Udon texture is NEXT level!"
  },
  {
    name: "Sun Nong Dan",
    image: "src/snd.jpeg",
    location: "Korean Town",
    ratings: 10,
    notes: "Galbi Jjjim was fire! like LITERALLY."
  },
  {
    name: "JINYA Ramen",
    image: "src/jinya.jpeg",
    location: "Burbank",
    ratings: 7,
    notes: "The soup base is so (GOOD && THICKKKK)."
  },
  {
    name: "Torisoba",
    image: "src/torisoba.jpeg",
    location: "Sawtelle",
    ratings: 8,
    notes: "Another THICKKK soupbase and very authentic."
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(filter="") {
  filter = String(filter);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < restaurants.length; i++) {
    let temp = restaurants[i];
    
    if (!temp.name.toLowerCase().includes(filter.toLowerCase())) {
      continue;
    }
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, temp); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, restaurants) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = restaurants.name;

  //Image
  const cardImage = card.querySelector("img");
  cardImage.src = restaurants.image;
  cardImage.alt = restaurants.name + " Poster";

  //Location
  const ul_location = card.querySelector("ul");
  const line_location = document.createElement("li");
  line_location.textContent="📍"
  line_location.textContent += restaurants.location;
  ul_location.appendChild(line_location);

  //Ratings
  const ul_ratings = card.querySelector("ul");
  const line_ratings = document.createElement("li");
  line_ratings.textContent="Ratings: ";
  line_ratings.textContent += restaurants.ratings;
  ul_ratings.appendChild(line_ratings);

  //Notes
   const ul_note = card.querySelector("ul");
    const line_ul = document.createElement("li");
    line_ul.textContent = restaurants.notes;
    ul_note.appendChild(line_ul);
  

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", restaurants.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
//document.addEventListener("DOMContentLoaded", showCards);

document.addEventListener("DOMContentLoaded", () => {
  showCards("");
});

function removeLastCard(toRemove="") {
  // filter = String(filter);
  // for(let i=0;i<restaurants.length;i++)
  // {
  //   let temp = restaurants[i];
  //   if(temp.name.toLowerCase()==toRemove)
  //   {
      
  //   }
 // }
  restaurants.pop(); // Remove last item in restaurants array
  showCards(); // Call showCards again to refresh
}

//Called in HTML
function searchCards(){
  const input = document.getElementById("search-bar").value;
  showCards(input);
}


function addCard(){
  console.log("Entered addCard()"); //DEBUG
  // <input type="text" id="nameInput" placeholder="Restaurant Name" />
  // <input type="text" id="imageInput" placeholder="Image URL" />
  // <input type="text" id="locationInput" placeholder="Location" />
  // <input type="text" id="ratingsInput" placeholder="Ratings" />
  // <input type="text" id="notesInput" placeholder="Notes" />
  const input_name = document.getElementById("nameInput").value;
  const input_img = document.getElementById("imageInput").value;
  const input_location = document.getElementById("locationInput").value;
  const input_ratings = document.getElementById("ratingsInput").value;
  const input_note = document.getElementById("notesInput").value;

  console.log("name: " ,input_name,"img url: ",input_img,"location: ",input_location,"notes: ",input_note); //DEBUG

  if(!input_img || !input_location ||!input_name||!input_ratings||!input_note){
    console.log("Invalid Input");
    alert("Invalid input");
    return;
  }
  // name: "Jon & Vinny's",
  // image: "src/jonvinny.jpeg",
  // location: "Brentwood",
  // notes:  "Great pasta , Good date spot!"
  const temp = {name:input_name,image:input_img,location:input_location,ratings:input_ratings, notes:input_note};
  restaurants.push(temp);
  showCards();
  return;
}

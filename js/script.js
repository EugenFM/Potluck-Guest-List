// assign dishes button 
const assignButton = document.querySelector(".assign");
// assign items list 
const assignedItems = document.querySelector(".assigned-items");
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");




// event listener for the invite button
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    // console.log(guest);
    // if statement to check if the guest variable is not empty
    if (guest !== "") {
        // calling the addToList function
        addToList(guest);
        // calling the updateGuestCount function
        updateGuestCount();
        // calling the clearInput function
        clearInput();

    }
});

// clear the input box function
const clearInput = function () {
    guestInput.value = "";
}

const addToList = function (guest) {
    // create a variable in order to create an HTML element (li)
    const listItem = document.createElement("li");
    // change the innerText of the listItem to guest
    listItem.innerText = guest;
    // append the listItem to the unordered list (guestList)
    guestList.append(listItem);
};

// function to limit the guest list
const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    // if statement to limit the guest list to 8 guests
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

// function to assign dishes to guests
const assignItems = function () {
    // array with potluck elements
    const potluckItems = ["potato salad", "pineapple", "hummus", "cookies", "icecream", "popsicles", "cantaloupe", "watermelon", "limes", "apples", "peaches", "bruschetta"];

    // select all guests 
    const allGuests = document.querySelectorAll(".guest-list li");

    // for of...loop to loop through all guests
    for (let guest of allGuests) {
        // variable to generate a number between 0 and the length of potluckItems and select a random element
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);

        let randomPotluckItem = potluckItems[randomPotluckIndex];

        let listItem = document.createElement("li");
        // use guest.innerText to grab the name inside the li element
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        // splice() method to prevent assigning duplicate items(by updating the potluckItem array after each dish assignement)
        potluckItems.splice(randomPotluckIndex, 1);
    }
};

// event listener for a click on the asssignButton
assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;

});
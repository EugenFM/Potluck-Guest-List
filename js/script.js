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
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};
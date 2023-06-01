window.onload = function () {
    // we get the form element
    const form = document.querySelector("form");
    // we create an event handler for the form's submission
    form.onsubmit = function (event) {
        event.preventDefault();

        // we access two HTML elements, the drink menu and the message to underaged folks,
        // and add the hidden class to those elements;
        // doing this clears results before displaying new ones, which
        // allows the user to submit the form again and again, and
        // see new results.
        let drinkMenu = document.getElementById("drinks");
        let under21Message = document.getElementById("under-21");
        let birthdayWish = document.getElementById("birthday-wish");
        // we gather the age value
        const age = parseInt(document.querySelector("input#age").value);

        //set their attribute to hidden
        drinkMenu.setAttribute("class", "hidden");
        under21Message.setAttribute("class", "hidden");
        birthdayWish.setAttribute("class", "hidden");

        // we check if the age is greater than 21.
        if (age > 21) {
            drinkMenu.removeAttribute("class");
            
        } else if (age === 21) {
            drinkMenu.removeAttribute("class");
            birthdayWish.removeAttribute("class");
            window.alert("You're freshly 21! Remember to drink responsibly!")
            // if its under the else is triggered
        } else {
            under21Message.removeAttribute("class");
        }
    };
};

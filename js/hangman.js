//#region Inits and Global Vars ...
/**
 * The div element that all UI controls will be added/removed to/from it.
 */
let divUICotnrols = document.getElementById("UI-Controls")

/**
 * An ordered list of body parts of hangman.
 */
const orderedElemsOfHanging =
    [
        document.getElementById("RodOne"),
        document.getElementById("RodTwo"),
        document.getElementById("Rope"),
        document.getElementById("Head"),
        document.getElementById("BodyShaft"),
        document.getElementById("LeftArm"),
        document.getElementById("RightArm"),
        document.getElementById("LeftLeg"),
        document.getElementById("RightLeg"),
    ];

/**
 * WordBank as a javascript object.
 * Soruce of word bank (this is only a portion of their words): https://github.com/dariusk/corpora
 */
const objWords = {
    Fruits: ["apple", "apricot", "avocado", "banana", "bell pepper", "bilberry", "blackberry", "blackcurrant", "blood orange", "blueberry", "boysenberry", "breadfruit", "canary melon", "cantaloupe", "cherimoya", "cherry", "chili pepper", "clementine", "cloudberry", "coconut", "cranberry", "cucumber", "currant", "damson", "date", "dragonfruit", "durian", "eggplant", "elderberry", "feijoa", "fig", "goji berry", "gooseberry", "grape", "grapefruit", "guava", "honeydew", "huckleberry", "jackfruit", "jambul", "jujube", "kiwi fruit", "kumquat", "lemon", "lime", "loquat", "lychee", "mandarine", "mango", "mulberry", "nectarine", "nut", "olive", "orange", "papaya", "passionfruit", "peach", "pear", "persimmon", "physalis", "pineapple", "plum", "pomegranate", "pomelo", "purple mangosteen", "quince", "raisin", "rambutan", "raspberry", "redcurrant", "rock melon", "salal berry", "satsuma", "star fruit", "strawberry", "tamarillo", "tangerine", "tomato", "ugli fruit", "watermelon"],
    Animals: ["aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra"],
    Countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestinian State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Kitts & Nevis", "St. Lucia", "St. Vincent & The Grenadines", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Netherlands", "The Philippines", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
    Canadian__Provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
    Canadian__territories: ["Northwest Territories", "Nunavut", "Yukon"]
};

/**
 * List of messages for welcoming the user to the game.
 */
const welcomingMessagesList = ["We've got a bro to save!", "DO NOT LET THEM HANG OUR BRO !", "Save MEEEEE  . . .", "Weather is cold up here !", "Start a New Game or the little bro will DIE !", "Let's save our little bro !", "Guess well or they WILL HANG ME !!!", "Guess well or they WILL HANG our little buddy !!!", "Poor little buddy  . . .", "A doggy life, all over again!", "May the force be with you!"]

/**
 * List of messages for showing to the user when he/she wins.
 */
const winningMessagesList = ["You saved meee  . . . !", "Pheww.., narrow escaped !", "You are a master guesser !", "Start saving our bro again ?!", "Finally  . . .", "What took you so long ?!", "Genius !", "Yaayy ! I am saveeddd  . . ."]

/**
 * List of messages for showing to the user when he/she looses.
 */
const loosingMessagesList = ["A monkey guessed better  . . .", "Don't you know your alphabet ?!", "How did you finish primary school ?!", "Knock . . . Knock . . . Knock . . . Any brain up there ?!", "Pppkkkhhh . . .", "Tell my wife I love her !", "How dare you ?!", "Am I a joke to you ?!", "Noooo . . .", "Your university degree is worthless !", "A plankton guessed better  . . .", "Let's practice alphabet ! A, B, C, D . . .", "Go get a wordbook genius !"]

/**
 * Maximum number of errors each player can make.
 */
const maxErrors = orderedElemsOfHanging.length

/**
 * Remaining chances for guesing the randomly chosen word from the chosen category
 */
let chancesForGuessing = maxErrors;

/**
 * A counter that represents the number of correct guesses
 */
let numOfCorrectGuesses = 0;

/**
 * The randomly chosen word 
 */
let chosenWord = "";
//#endregion

//#region Functions

//#region UI Manipulators

/**
 * Hides the body parts of the hangman available in the `orderedElemsOfHanging` list.
 */
function HideHangman() {
    orderedElemsOfHanging.forEach((hangmanBodyPartElem) => {
        if (hangmanBodyPartElem.classList.contains('fade-out')) hangmanBodyPartElem.classList.remove("fade-out");
        if (hangmanBodyPartElem.classList.contains('fade-in')) hangmanBodyPartElem.classList.remove("fade-in");

        hangmanBodyPartElem.classList.add("fade-out");
    });
}

/**
 * Generate and show buttons for choosing desired category. Event listeners for each category button is added in this function. The categories are derived from the `objWords` object.
 */
function InitNShowCategories() {
    divUICotnrols.innerText = "";
    ShowNHideElem(divUICotnrols, true);
    divCategoriesElem = htmlCodeToElem("<div></div>");
    divCategoriesElem.classList.add('categories');
    for (const [key, _] of Object.entries(objWords)) {
        buttonText = key;
        if (buttonText.includes("__")) buttonText = buttonText.replace("__", " ");
        buttonToAdd = htmlCodeToElem(`<a class="button categories-buttons z1shadow fade-in">${buttonText}</a>`);
        buttonToAdd.addEventListener("click", categorySelectionEventListener);
        divCategoriesElem.appendChild(buttonToAdd);
    }
    divUICotnrols.appendChild(divCategoriesElem);
}

/**
 * Generate and show keyboard for choosing characters. All event listeners for the keyboard buttons are added in this function.
 */
function addKeyBoard() {
    ulForKeyboard = htmlCodeToElem('<ul id="keyboard"></ul>')
    for (let index = 65; index < 65 + 26; index++) {
        keyboardButton = htmlCodeToElem(`<li class="keyboard-buttons"><a >${String.fromCharCode(index)}</a></li>\n`);
        keyboardButton.addEventListener('click', keyboardPressedEventListener);
        ulForKeyboard.appendChild(keyboardButton);
    }

    spaceButton = htmlCodeToElem(`<li class="keyboard-buttons" style="width: 275px;"><a> </a></li>\n`);
    spaceButton.addEventListener('click', keyboardPressedEventListener);
    ulForKeyboard.appendChild(spaceButton);

    divUICotnrols.appendChild(ulForKeyboard);
    addScoreMonitorer();
}

/** Generate and show score monitorer */
function addScoreMonitorer() {
    scoreHolderElem = htmlCodeToElem("<p></p>");
    scoreHolderElem.classList.add('Score-Holder');
    scoreHolderElem.classList.add('fade-in');
    divUICotnrols.appendChild(scoreHolderElem);
    updateScoresInUI();
}

/** Regenerated, compute, and show user score. */
function updateScoresInUI() {

    holderElem = document.getElementsByClassName('Score-Holder')[0];
    holderElem.classList.remove('fade-in');
    holderElem.innerHTML = "";

    errorsElem = htmlCodeToElem(`<span>Errors = ${maxErrors - chancesForGuessing}, </span>`);
    correctsElem = htmlCodeToElem(`<span>Corrects (?!) = ${numOfCorrectGuesses}, </span>`);
    scoreElem = htmlCodeToElem(`<span>Score = ${numOfCorrectGuesses - (maxErrors - chancesForGuessing)}</span>`);

    holderElem.appendChild(errorsElem);
    holderElem.appendChild(correctsElem);
    holderElem.appendChild(scoreElem);

    divUICotnrols.append(holderElem);
}

/**
 * Generate and show empty spaces as character holders.
 */
function addKeyBoardAndEmptySpaces() {
    htmlCodeForEmptyChars = ""
    for (let index = 0; index < chosenWord.length; index++) {
        const element = chosenWord[index];
        htmlCodeForEmptyChars += `<li class="character-holder">_</li>\n`;
    }
    htmlCodeForEmptyChars = '<ul class="characters-holder">' + htmlCodeForEmptyChars + "</ul>";

    divUICotnrols.innerText = "";
    elemToAdd = htmlCodeToElem(htmlCodeForEmptyChars);
    divUICotnrols.appendChild(elemToAdd);

    addKeyBoard()
}

/**
 * Perform winning ceremony ...
 */
function performWinningCeremony() {
    divUICotnrols.innerText = "";
    addWinningMessage();
    addScoreMonitorer();
    addNewGameButton();
}

/**
 * Perform losing ceremony ... 
 */
function performLosingCeremony() {
    divUICotnrols.innerText = "";
    addLoosingMessage();
    addScoreMonitorer();
    addNewGameButton();
}

/**
 * Shows a random message to the user when he/she looses
 */
function addLoosingMessage() {
    losingMessageElem = htmlCodeToElem("<span></span>")
    losingMessageElem.innerText = loosingMessagesList[Math.floor(Math.random() * loosingMessagesList.length)];
    losingMessageElem.classList.add('loosing');
    losingMessageElem.classList.add('fade-in');
    divUICotnrols.appendChild(losingMessageElem);
}

/**
 * Shows a random message to the user when he/she wins
 */
function addWinningMessage() {
    winningMessageElem = htmlCodeToElem("<span></span>");
    winningMessageElem.innerText = winningMessagesList[Math.floor(Math.random() * winningMessagesList.length)];
    winningMessageElem.classList.add('winning');
    winningMessageElem.classList.add('fade-in');
    divUICotnrols.appendChild(winningMessageElem);
}

/**
 * Shows a random message to the user when he/she is starting the game
 */
function addWelcomingMessage() {
    winningMessageElem = htmlCodeToElem("<span></span>");
    winningMessageElem.innerText = welcomingMessagesList[Math.floor(Math.random() * winningMessagesList.length)];
    winningMessageElem.classList.add('welcoming');
    winningMessageElem.classList.add('fade-in');
    divUICotnrols.appendChild(winningMessageElem);
}

/**
 * Adds the new game button do `divUICotnrols`
 */
function addNewGameButton() {
    newGameButton = htmlCodeToElem(`<a id="new-game" class="button z1shadow newGame-button fade-in">New Game!</a>`)
    newGameButton.addEventListener("click", StartANewGame);
    divUICotnrols.appendChild(newGameButton);
}

/**
 * Initilize UI with appropriate data (This function is called once when the page loads)
 */
function InitUI() {
    divUICotnrols.innerText = "";
    addWelcomingMessage();
    addNewGameButton();
}

/**
 * Executes the main procedure for starting a new game. (this function is called whenever the New Game button is clicked/pressed)
 */
function StartANewGame() {
    chancesForGuessing = maxErrors;
    numOfCorrectGuesses = 0;
    HideHangman();
    InitNShowCategories();
    ShowNHideElem(newGameButton, false);
}
//#endregion UI Manipulators

//#region Utils
/**
 * A helper function that converts string (containing html code) to an HTML element
 * @param {String} htmlCode The HTML code that should be concerted to an HTML element
 * @returns The generated HTML element
 */
function htmlCodeToElem(htmlCode) {
    elemTempelate = document.createElement('template');
    htmlCode = htmlCode.trim();
    elemTempelate.innerHTML = htmlCode;
    return elemTempelate.content.firstChild
}

/**
 * A helper function that adds/removes `hide` CSS class to a given element 
 * @param {HTMLElement} element The HTML element that is going to be hidden/shown
 * @param {boolean} show Adds `hide` CSS class if `true`, otherwise removes it.
 */
function ShowNHideElem(element, show = false) {
    if (show)
        element.classList.remove("hide")
    else
        element.classList.add("hide")
}
//#endregion Utils

//#region Eevent Listeners
/**
 * The event listener which is added to category selection buttons' `click` event. if the category contains space it will be replaced by `__`.
 * `e` is a refrence to the object that sent the event.
 */
categorySelectionEventListener = e => {
    chosenCategory = e.target.innerText.replace(" ", "__");
    listOfWords = objWords[chosenCategory];
    chosenWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    addKeyBoardAndEmptySpaces();
}

/**
 * The event listener which is added to the keyboard buttons' `click` event. `e` is a refrence to the object that sent the event.
 * 
 * -> This event listener handles the main logic for the game as well.
 */
keyboardPressedEventListener = e => {

    let chosenCharachter = e.target.innerText;
    if (chosenCharachter === "") chosenCharachter = " ";
    listOfOccurances = chosenWord.allOccurances(chosenCharachter);

    addClassToLi = (calssName) => {
        e.target.tagName === 'A' ? e.target.parentElement.classList.add(calssName) : e.target.classList.add(calssName);
    }

    removeEventListeners = () => {
        if (e.target.tagName === 'A') {
            e.target.parentElement.replaceWith(e.target.parentElement.cloneNode(true));
            e.target.replaceWith(e.target.cloneNode(true));
        }
        else {
            e.target.replaceWith(e.target.cloneNode(true));
        }
    }

    // Wrong guess!
    if (listOfOccurances === -1) {
        addClassToLi('keyboard-buttons-disabled');
        removeEventListeners();
        chancesForGuessing -= 1;
        orderedElemsOfHanging[maxErrors - chancesForGuessing - 1].classList.add('fade-in');
        if (chancesForGuessing === 0)
            performLosingCeremony();
    }

    // Correct guess!
    else {
        emptyCharElems = document.getElementsByClassName('character-holder');
        for (let index = 0; index < listOfOccurances.length; index++) {
            emptyCharElems[listOfOccurances[index]].innerText = chosenCharachter.toUpperCase();
            numOfCorrectGuesses++;
        }
        addClassToLi('keyboard-buttons-disabled')
        removeEventListeners();
        if (numOfCorrectGuesses === chosenWord.length)
            performWinningCeremony();
    }

    updateScoresInUI();
}
//#endregion Eevent Listeners

//#region Extenstions

Object.assign(String.prototype,
    {
        /**
         * An extensions function which helps to find all occurances of a character inside a string.
         * @param {String} char2Search The character that should be searched for.
         * @returns -1 if the character is not found, otherwise, a list of indexes in which the character were found.
         */
        allOccurances(char2Search) {
            let indexes = [];
            copyOfThis = this.toLowerCase();
            char2Search = char2Search.toLowerCase();
            if (copyOfThis.indexOf(char2Search) === -1) return -1;

            indexes[0] = copyOfThis.indexOf(char2Search);

            while (indexes[indexes.length - 1] != -1) {
                indexes[indexes.length] = copyOfThis.indexOf(char2Search, indexes[indexes.length - 1] + 1);
            }

            return indexes.slice(0, indexes.length - 1);
        }
    })
//#endregion

//#endregion Functions

// The only function that is called when the page loads.
InitUI()

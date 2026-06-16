const ingredients = [
    {
        picture: './pictures/meat.png',
        alt: '',
        name: "meat"
    },
    {
        picture: './pictures/nectar.png',
        alt: '',
        name: "nectar"
    },
    {
        picture: './pictures/can-o-fire.png',
        alt: '',
        name: "can-o-fire"
    },
    {
        picture: './pictures/bottled-lightning.png',
        alt: '',
        name: "bottled lightning"
    },
    
];
const recipes = [
    {
        name: "roast",
        image: './pictures/(insert picture here).png',
        alt: '',
        ingredients: new Set(["meat"])  ,
        description: "No longer raw! Much tastier! Gain 8 HP."
    },
    {
        name: "meaty meal",
        image: './pictures/(insert picture here).png',
        alt: '',
        ingredients: new Set(["meat","meat"], ["meat","roast"], ["roast","roast"])  ,
        description: "Nothing beats meat except more meat! Gain 8 HP and can be used twice!"
    },
    {
        name: "glazed meat",
        image: './pictures/(insert picture here).png',
        alt: '',
        ingredients: new Set(["meat","nectar"])  ,
        description: "Sweet and savory! Heals 5 HP and 5 FP."
    },
    {
        name: "plasma blast",
        image: './pictures/(insert picture here).png',
        ingredients: new Set(["can-o-fire","bottled lightning"])  ,
        alt: '',
        description: "Unleash raw energy at your foes! Shoots a beam of fire and lightning elements down three lanes in front of you."
    },
    {
        name: "mistake",
        image: './pictures/(insert picture here).png',
        alt: '',
        ingredients: new Set([])  ,
        description: "A loathsome meal. Gain 1 HP, 1 FP, and depresses target."
    },
];
const button = document.getElementById("modal-button");
const removeButton = document.querySelector(".remove");
const modalBox = document.querySelector(".modal");

// Modal stuff
button.addEventListener("click", () => {
    modalBox.classList.remove("hidden");
})

removeButton.addEventListener("click", () => {
    modalBox.classList.add("hidden");
})

function findIngredientPicture(missingIngredient){
    ingredients.forEach(ingredient => {
        var name = ingredient.name;
        if (name == missingIngredient) {
            var image = ingredient.picture;
            return image;
        }
    });
}

function getListOfIngredients() {
    var list = [];
    ingredients.forEach(ingredient => {
        console.log(ingredient.picture);
        list.add(ingredient.picture);
    });
    return list;
}
var list = getListOfIngredients();

function populateModalWithIngredients(listOfIngredients) {
    listOfIngredients.forEach(() => {
        const img = document.createElement('img');
        img.src = listOfIngredients.picture;
        img.alt = "IF you had an alt text it would go here";
        var html = document.querySelector('html'); // change this querySelector to grab modal object
        html.appendChild(img);
    });
}
populateModalWithIngredients(list);

function addIngredient(recipe) {
    var recipeName = recipe.name;
    var recipeImg = recipe.image;
    var recipeAlt = recipe.alt;
    var recipeIngredient = {
        recipeName,
        recipeImg,
        recipeAlt
    }
    ingredients.add(recipeIngredient);
}
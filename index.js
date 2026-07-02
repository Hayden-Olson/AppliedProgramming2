const ingredients = [
    {
        image: './pictures/meat.png',
        alt: 'meat picture',
        name: "meat"
    },
    {
        image: './pictures/nectar.webp',
        alt: '',
        name: "nectar"
    },
    {
        image: './pictures/can-o-fire.png',
        alt: '',
        name: "can-o-fire"
    },
    {
        image: './pictures/bottled-lightning.webp',
        alt: '',
        name: "bottled lightning"
    },
    
];
const recipes = [
    {
        name: "roast",
        image: './pictures/roast.jpg',
        alt: '',
        ingredients: new Set(["meat"])  ,
        description: "No longer raw! Much tastier! Gain 8 HP."
    },
    {
        name: "meaty meal",
        image: './pictures/meaty-meal.webp',
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




function findIngredientPicture(missingIngredient){
    ingredients.forEach(ingredient => {
        var name = ingredient.name;
        if (name == missingIngredient) {
            var image = ingredient.image;
            return image;
        }
    });
}

function getListOfIngredientPictures() {
    var list = [];
    ingredients.forEach(ingredient => {
        console.log(ingredient.image);
        list.add(ingredient.image);
    });
    return list;
}

function populateModalWithIngredients(parentElement) {
    ingredients.forEach(ingredient => {
        const img = document.createElement('img');
        img.src = ingredient.image;
        img.alt = ingredient.alt;
        parentElement.appendChild(img);
    });
}

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

function displayMeal(name,picture,alternate,description) {
    var displayBox = document.getElementById("box3");
    var image = document.createElement("img");
    var title = document.createElement("p");
    var dsc = document.createElement("p");

    image.setAttribute(src, picture);
    image.setAttribute(alt, alternate);
    title.textContent = name;
    dsc.textContent = description;

    displayBox.appendChild(image);
    displayBox.appendChild(title);
    displayBox.appendChild(dsc);
}

function mealMaker(ingredient1,ingredient2) {
    recipes.forEach(recipe => {
        var ingredientSet = recipe.ingredients;
        if (ingredientSet.has(ingredient1) && ingredientSet.has(ingredient2)) {
            var name = recipe.name;
            var picture = recipe.image;
            var alt = recipe.alt;
            var description = recipe.description;
            // Insert helper function here.
            displayMeal(name,picture,alt,description);
        }
    });
}

// GLOBAL VARIABLES
const button = document.getElementById("modal-button");
const removeButton = document.querySelector(".remove");
const modalBox = document.querySelector(".modal");


var modal = document.getElementById("modalcontent");
populateModalWithIngredients(modal);

// Modal stuff
button.addEventListener("click", () => {
    modalBox.classList.remove("hidden");
})

removeButton.addEventListener("click", () => {
    modalBox.classList.add("hidden");
})
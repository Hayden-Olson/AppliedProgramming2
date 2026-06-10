const recipes = [
    {
        image: './pictures/(insert picture here).png',
        description: ""
    },
    {}
];
const button = document.getElementById("modal-button");
const removeButton = document.querySelector(".remove");
const modalBox = document.querySelector(".modal");

button.addEventListener("click", () => {
    modalBox.classList.remove("hidden");
})

removeButton.addEventListener("click", () => {
    modalBox.classList.add("hidden");
})
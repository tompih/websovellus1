// common.js

document.addEventListener('DOMContentLoaded', function () {
    // Idleness detection and redirection script
    const idleTimeThreshold = 5000; // 5 seconds
    let lastActiveTime = Date.now();

    function resetTimer() {
        lastActiveTime = Date.now();
    }

    function checkIdleTime() {
        const currentTime = Date.now();
        const idleTime = currentTime - lastActiveTime;

        if (idleTime >= idleTimeThreshold) {
            const confirmation = confirm('You have been idle for a while! Do you want to go to the home page?');

            if (confirmation) {
                window.location.href = 'index.html';
            }
        }
    }

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);
    setInterval(checkIdleTime, 1000);

    // Interaction buttons
    const changeColorButton = document.getElementById('btnChangeColor');
    const updateContentButton = document.getElementById('btnUpdateContent');
    const addItemButton = document.getElementById('btnAddItem');

    changeColorButton.addEventListener('click', changeTextColor);
    updateContentButton.addEventListener('click', updateContent);
    addItemButton.addEventListener('click', addListItem);

    function changeTextColor() {
        var colors = ["red", "green", "blue", "orange", "purple"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        document.getElementById("colorText").style.color = randomColor;
    }

    function updateContent() {
        let paragraph = document.getElementById("dynamicParagraph");
        paragraph.innerHTML = "This content is dynamically updated!";
    }

    function addListItem() {
        let list = document.getElementById("dynamicList");
        let newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode("New Item"));
        list.appendChild(newItem);
    }

    // Additional features: Arrays, Objects, Functions, etc.
    let numbers = [1, 2, 3, 4, 5];
    let person = {
        name: "John Doe",
        age: 30,
        profession: "Web Developer"
    };

    function greetPerson(person) {
        return "Hello, " + person.name + "!";
    }

    console.log("Numbers:", numbers);
    console.log("Person:", person);
    console.log(greetPerson(person));

    console.log("Sum of numbers:", processNumbers(numbers));

    function processNumbers(numbers) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return sum;
    }

    // Simple interaction function
    window.showAlert = function () {
        alert("Simple Interaction: Button Clicked!");
    };
});

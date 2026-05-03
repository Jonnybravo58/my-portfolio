// ================================
// CONSOLE TEST
// ================================

console.log("JavaScript is connected! 🔥");

// ================================
// VARIABLES
// ================================

const myName = "Jonathan";
const city = "Chicago";
const age = 34;
const year = 2026;
const isLearning = true;
const isGivingUp = false;

const skills = ["HTML", "CSS", "JavaScript"];

const developer = {
    name: "Jonathan",
    city: "Chicago",
    goal: "Frontend Developer",
    motivated: true
};

console.log(myName);
console.log(city);
console.log("My name is " + myName + " from " + city);
console.log(skills);
console.log(developer);

// ================================
// DOM MANIPULATION
// ================================

const greeting = document.getElementById("greeting");
greeting.textContent = "Hi, I'm Jonathan 👋 - JavaScript just changed this!";
greeting.style.color = "#ffffff";

// ================================
// FUNCTIONS
// ================================

function greet(name) {
    return "Hello " + name + "! Welcome to my portfolio 👋";
}

console.log(greet("Jonathan"));
console.log(greet("World"));

// Arrow function version
const multiply = (a, b) => a * b;
console.log(multiply(5, 10)); // → 50
console.log(multiply(3, 7)); // → 21

// ================================
// CONDITIONALS
// ================================

const isLoggedIn = true;
const hour = new Date().getHours(); // gets current hour 0-23

if (hour < 12) {
    console.log("Good morning! ☀️");
} else if (hour < 18) {
    console.log("Good afternoon! 🌤️");
} else {
    console.log("Good evening! 🌙");
}

// Combine with functions
function checkSkillLevel(months) {
    if (months < 1) {
        return "Just getting started 🌱";
    } else if (months < 3) {
        return "Building momentum 🔥";
    } else if (months < 6) {
        return "Getting serious 💪";
    } else {
        return "Job ready! 🚀";
    }
}

console.log(checkSkillLevel(1));
console.log(checkSkillLevel(3));
console.log(checkSkillLevel(6));

// ================================
// SMART BUTTON
// ================================

const helloBtn = document.getElementById("hello-btn");
let clickCount = 0;

helloBtn.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        helloBtn.textContent = "Hey! 👋";
        helloBtn.style.backgroundColor = "#f59e0b";
    } else if (clickCount === 2) {
        helloBtn.textContent = "Keep clicking! 😄";
        helloBtn.style.backgroundColor = "#818cf8";
    } else if (clickCount === 3) {
        helloBtn.textContent = "Jonathan built this! 🔥";
        helloBtn.style.backgroundColor = "#6ee7b7";
    } else {
        helloBtn.textContent = "Say Hello 👋";
        helloBtn.style.backgroundColor = "#6ee7b7";
        clickCount = 0;
    }
});  

// ================================
// LOOPS
// ================================

const mySkills = ["HTML", "CSS", "JavaScript", "Flexbox", "CSS Grid", "Responsive Design"];
const skillsList = document.getElementById("skills-list");

for (let skill of mySkills) {
    const skillItem = document.createElement("p");
    skillItem.textContent = "✅ " + skill;
    skillItem.style.color = "#6ee7b7";
    skillItem.style.fontWeight = "600";
    skillsList.appendChild(skillItem);   
}

// ================================
// ARRAY METHODS
// ================================

const devSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 60 },
    { name: "React", level: 20 },
    { name: "Git", level: 15 }
];

// 1. forEach - loop through every item
devSkills.forEach(skill => {
    console.log(skill.name + " - " + skill.level + "%");
})

// 2. map - create a new array of just the names
const skillNames = devSkills.map(skill => skill.name);
console.log(skillNames);

// 3. filter - only skills above 50%
const strongSkills = devSkills.filter(skill => skill.level > 50);
console.log(strongSkills);

// 4. find - locate JavaScript specifically
const jsSkill = devSkills.find(skill => skill.name === "JavaScript");
console.log(jsSkill);

// 5. push and pop
const languages = ["HTML", "CSS", "JavaScript"];
languages.push("React");
console.log(languages);
languages.pop();
console.log(languages);

// 6. Display filtered skills on the page
const progressDiv = document.getElementById("skills-progress");

strongSkills.forEach(skill => {
    const p = document.createElement("p");
    p.textContent = "💪 " + skill.name + " - " + skill.level + "%";
    p.style.color = "#6ee7b7";
    p.style.fontWeight = "600";
    progressDiv.appendChild(p);
});

// ================================
// TEMPLATE LITERALS
// ================================

const firstName = "Jonathan";
const role = "Frontend Developer";
const monthsLearning = 1;

// Old way
console.log("Hi I'm " + firstName + " and I'm training to be a " + role);

// New way - template literal
console.log(`Hi I'm ${firstName} and I'm training to be a ${role}`);

// You can put expressions inside ${}
console.log(`I have been learning for ${monthsLearning} month`);
console.log(`2 + 2 = ${2 + 2}`);
console.log(`My skill level: ${checkSkillLevel(monthsLearning)}`);

// Multi-line strings - no more \n needed
const bio = `
    Name: ${firstName}
    Role: ${role}
    Months learning: ${monthsLearning}
    Motivated: absoulutely 🔥
`;
console.log(bio);

// ================================
// DOM DEEP DIVE
// ================================

// getElementById - only works with ids
const el1 = document.getElementById("greeting");

// querySelector - works with ANY CSS selector
const el2 = document.querySelector("#greeting");        // by id
const el3 = document.querySelector(".intro-section"); // by class
const el4 = document.querySelector("header h1");        // by tag + parent
const el5 = document.querySelector("nav a");            // first nav link

// querySelectorAll - grabs ALL matching elements
const allSections = document.querySelectorAll("section");
const allSkillCards = document.querySelectorAll(".skill-card");

console.log(`Found ${allSections.length} sections on the page`);
console.log(`Found ${allSkillCards.length} skill cards`);

// classList - add, remove, toggle classes
const firstSection = document.querySelector("section");

// add a class
firstSection.classList.add("highlight");

// remove a class
// firstSection..classList.remove("hightlight");

// toggle - adds if not there, removes if it is
// firstSection.classList.toggle("hightlight");

// check if class exists
console.log(`Has highlight: ${firstSection.classList.contains("highlight")}`);

// createElement - make new elements
const newSkill = document.createElement("li");
newSkill.textContent = "React ⚛️ - coming soon";
newSkill.style.color = "#818cf8";

// Find the existing ul in What I'm Learning section
const learningList = document.querySelector("section ul");
learningList.appendChild(newSkill);

// removeChild - remove an element
// learningList.removeChild(newSkill);

// Input + button interaction
const userInput = document.getElementById("user-input");
const greetBtn = document.getElementById("greet-btn");
const greetOutput = document.getElementById("greet-output");

greetBtn.addEventListener("click", function() {
    const name = userInput.value;

    if (name === "") {
        greetOutput.textContent = "Please type your name first! 😄";
        greetOutput.style.color = "#f59e0b";
    } else {
        greetOutput.textContent = `Hey ${name}! Welcome to Jonathan's portfolio 🔥`;
        greetOutput.style.color = "#6ee7b7";
    }
})

// ================================
// DARK / LIGHT MODE TOGGLE
// ================================

const themeToggle = document.getElementById("theme-toggle");

// Check if user had a preference saved
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }
});
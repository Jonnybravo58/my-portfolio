// ================================
// WEATHER APP 🌤️
// ================================

// YOUR API KEY - paste yours here after signing up
const API_KEY = "e9a18b3eebae423a8827e4ba2219a90f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Grab elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherCard = document.getElementById("weather-card");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const errorMessage = document.getElementById("error-message");
const searchTagsDiv = document.getElementById("search-tags");

// Recent searches array
let recentSearches = [];

// ================================
// SHOW / HIDE HELPERS
// ================================

function showLoading() {
    loading.classList.remove("hidden");
    weatherCard.classList.add("hidden");
    errorDiv.classList.add("hidden");
}

function showError(message) {
    loading.classList.add("hidden");
    weatherCard.classList.add("hidden");
    errorDiv.classList.remove("hidden");
    errorMessage.textContent = message;
}

function showWeather() {
    loading.classList.add("hidden");
    weatherCard.classList.remove("hidden");
    errorDiv.classList.add("hidden");
}

// ================================
// FORMAT DATE
// ================================

function formatDate() {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// ================================
// FETCH WEATHER DATA
// ================================

async function fetchWeather(city) {
    showLoading();

    try {
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data);
        addToRecentSearches(city);

    } catch (error) {
        showError(`❌ "${city}" not found. Please check the city name and try again.`);
    }
}

// ================================
// DISPLAY WEATHER
// ================================

function displayWeather(data) {
    // Extract data from API response
    const cityName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed);
    const description = data.weather[0].description;

    // Update the DOM
    document.getElementById("city-name").textContent = `${cityName}, ${country}`;
    document.getElementById("weather-date").textContent = formatDate();
    document.getElementById("temperature").textContent = temp;
    document.getElementById("feels-like").textContent = `${feelsLike}°F`;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("wind-speed").textContent = `${windSpeed} mph`;
    document.getElementById("weather-description").textContent = description;

    showWeather();
}

// ================================
// RECENT SEARCHES
// ================================

function addToRecentSearches(city) {
    // Capitalize city name
    const formatted = city.charAt(0).toUpperCase() + city.slice(1);

    // Remove if already exists
    recentSearches = recentSearches.filter(s =>
        s.toLowerCase() !== city.toLowerCase()
    );

    // Add to front
    recentSearches.unshift(formatted);

    // Keep only last 5
    recentSearches = recentSearches.slice(0, 5);

    // Update display
    updateSearchTags();
}

function updateSearchTags() {
    searchTagsDiv.innerHTML = "";

    recentSearches.forEach(city => {
        const tag = document.createElement("span");
        tag.classList.add("search-tag");
        tag.textContent = city;
        tag.addEventListener("click", () => {
            cityInput.value = city;
            fetchWeather(city);
        });
        searchTagsDiv.appendChild(tag);
    });
}

// ================================
// EVENT LISTENERS
// ================================

// Search button click
searchBtn.addEventListener("click", function() {
    const city = cityInput.value.trim();
    if (city === "") {
        showError("Please enter a city name! 🏙️");
        return;
    }
    fetchWeather(city);
});

// Press Enter to search
cityInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();
        if (city !== "") fetchWeather(city);
    }
});

// ================================
// LOAD DEFAULT CITY
// ================================

// Load your city on startup!
fetchWeather("Chicago");
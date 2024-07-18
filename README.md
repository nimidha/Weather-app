# Weather-app

This repository contains a simple weather app program that retrieves real-time weather information based on the city name provided by the user. The app displays the following weather details:

    City Name
    Temperature in Celsius
    Humidity
    Description of the Weather
    Emoji Related to the Climate of the City

# Usage

To use the weather app, follow these steps:

    Enter the city name in the provided input field.
    Submit the form to retrieve weather information.
    View the results displaying the city name, temperature, humidity, weather description, and an emoji depicting the climate of the city.

# Technologies Used

    HTML
    CSS
    JavaScript
    api.openweathermap.org API

# How to Run Locally

To run this project locally, you will need:

    Clone this repository:

git clone https://github.com/your-username/weather-app.git

Navigate into the project directory:

    cd weather-app

Open the .html file in web-browser

# API Key

This project uses the weatherapp.org API to fetch real-time weather data. You can obtain your API key from api.openweathermap.org and include it in your JavaScript code where the API request is made.

Example of how to include your API key:

javascript

const apiKey = 'your-api-key';
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

Replace 'your-api-key' with your actual API key obtained from api.openweathermap.org.

# Screenshots
![image](https://github.com/user-attachments/assets/1426a07e-935a-439e-abb0-5e49fe323b33)
![image](https://github.com/user-attachments/assets/121b0b28-7ed6-4657-b25d-52706a081d04)

# Acknowledgments

    This project makes use of the api.openweathermap.org API to retrieve real-time weather data.

Feel free to reach out if you have any questions or feedback about this project

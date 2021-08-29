# Weather App

This project is a command line interface to display weather details of a specific location.

## Api Used 

[Accuweather APIs](https://developer.accuweather.com/)

Internally the project uses two Apis. 
- Find the location key of the desired location.
- Display the weather forecast of the loaction using location key.

## Getting Started

1. Fork the repository.

2. Clone the forked repository.
```bash
git clone https://github.com/<your_user_name>/Weather-App-CLI.git
```
3. Navigate to the cloned repository.
```bash
cd Weather-App-CLI
```

### Prerequisite

Download Node.js from [here](https://nodejs.org/en/download/).

Verify installation by checking the version.
```bash
node -v
npm -v
```

### Installation

Install the dependencies by running the command in the terminal.
```bash
npm install
```

## Usage

To run the project first need an api key for weather forecast.

1. Create your account on [Accuweather APIs](https://developer.accuweather.com/).

2. Create a new app and generate your own api key.

3. Create a new file in the project directory.
```bash
touch .env
or
type nul > .env
```

4. Open the file and type your generated api key.
```bash
API_KEY=<your_api_key>
```

To start with the project run the command and get the complete weather forecast of the desired city.
```bash
node app.js "<city_name>"
```
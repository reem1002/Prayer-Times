
# Prayer Times Dashboard

This project is a simple yet effective web application that displays prayer times for selected cities. It is built using HTML, CSS, and JavaScript and utilizes the Aladhan API to fetch accurate prayer timings. The dashboard features a clean and modern user interface that is fully responsive across various devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Integration](#api-integration)
- [Responsive Design](#responsive-design)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display accurate prayer times for selected cities.
- Responsive design for optimal viewing on all devices.
- Error handling for API issues and city selection.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Aladhan API](http://api.aladhan.com/v1/timingsByCity)

## Setup and Installation

### Clone the Repository:

   ```bash
   git clone https://github.com/reem1002/prayer-times-dashboard.git
```

### Navigate to the Project Directory:

```bash
cd prayer-times-dashboard
```

### Install Dependencies:

If you're using npm, you can install the required dependencies (Axios) using the following command:

```bash
npm install
```

### Open the Project:

Open the `index.html` file in your browser to view the application.

## Usage

### Select a City:

Use the dropdown menu at the top of the page to select a city (Cairo, Alexandria, Menoufia).

### View Prayer Times:

The application will display the prayer times for the selected city along with the current date in both Hijri and Gregorian formats.

### Error Handling:

If the city is not found or if there is an issue with the API, an error message will be displayed.

## File Structure

Here is an overview of the file structure:

```plaintext
prayer-times-dashboard/
│
├── index.html          # Main HTML file
├── style.css           # Main CSS file for styling
├── app.js              # JavaScript file for functionality
├── /img                # Directory for images
│   ├── Sprite-0001.png
│   ├── intrancebg1.png
├── /node_modules       # Directory for npm packages (if using npm)
└── README.md           # This README file
```

## API Integration

The project integrates with the Aladhan API to fetch prayer times based on the selected city. The API provides accurate timings for Fajr, Dhuhr, Asr, Maghrib, and Isha prayers.

### Example API Request:

```javascript
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: {
        city: cityValue,
        country: 'EG'
    }
})
.then(function (response) {
    // Handle the response
})
.catch(function (error) {
    // Handle the error
});
```

## Responsive Design

The dashboard is designed to be fully responsive, ensuring a seamless user experience across different devices. The CSS media queries adjust the layout and font sizes to fit the screen size, providing optimal readability and usability on mobile devices, tablets, and desktops.

### Media Queries Example:

```css
@media (max-width: 768px) {
  .city {
    font-size: 2rem;
  }
  /* Additional styles for smaller screens */
}
```

## Known Issues

- The application relies on the Aladhan API. If the API is down or there are connectivity issues, the prayer times will not be fetched, and an error message will be displayed.
- The list of cities is currently hardcoded. Future improvements could include dynamically fetching available cities from an API.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

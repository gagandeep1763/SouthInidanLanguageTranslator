# South Indian Language Translator

This is a responsive web-based language translator application that supports translation between major South Indian languages and English.
Built using HTML, CSS, and JavaScript, it uses the MyMemory Translation API to fetch real-time translations. 
The project is designed with a sleek user interface and aims to help users bridge communication gaps across languages like Tamil, Telugu, Kannada, Malayalam, and Tulu.

## Overview

The application provides an easy-to-use interface where users can:
- Select the source and target languages
- Enter text in one language
- Translate it instantly with a single click

Although the API does not natively support Tulu, it has been included in the dropdown for design consistency and potential future expansion.

## Features

- Supports multiple South Indian languages: Tamil, Telugu, Kannada, Malayalam, and English
- Real-time translation using MyMemory API
- Clean, dark-themed UI with gradient effects
- Responsive layout suitable for desktops and tablets
- Input and output text areas for better usability
- Error handling for empty or failed requests

## How to Use

1. Clone or download the repository to your local machine.

2. Open the `index.html` file in your preferred browser.

3. Choose the "From" and "To" languages using the dropdowns.

4. Enter your text in the first text box.

5. Click the **Translate** button to see the translated text.

## Files Included

- `index.html` – Contains the structure of the translator UI
- `styles.css` – Styles the layout, color themes, buttons, and responsiveness
- `script.js` – Handles language selection, API requests, and displays the translated output

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [MyMemory Translation API](https://mymemory.translated.net/)

## Limitations

- The Tulu language option is currently a placeholder, as most public APIs (including MyMemory) do not yet support it.
- API rate limits may apply depending on usage volume.
- No backend storage or history of translations is implemented.

## Developed By

Gagandeep D  
Google Certified UI/UX Designer

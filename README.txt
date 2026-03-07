WEB APPLICATION – GALLERY MANAGEMENT APP University Assignment

1.  Project Overview This project is a Node.js web application developed
    using the Express.js framework and Handlebars templating engine. The
    application allows users to view galleries and explore items within
    each gallery. The project demonstrates a basic Model–View–Controller
    (MVC) architecture and uses JSON files as a simple data storage
    mechanism.

The application was created as part of a university web development
assignment to demonstrate understanding of server-side JavaScript,
routing, templating, and data handling.

2.  Technologies Used

-   Node.js
-   Express.js
-   Express-Handlebars
-   HTML5
-   CSS3
-   JavaScript
-   JSON (for data storage)

3.  Project Structure The project follows a structured layout separating
    server logic, routes, models, controllers, and views.

Key folders include:

controllers/ Contains the controller logic for handling requests and
responses for different pages such as: - start page - galleries -
individual gallery - about page

models/ Handles data management using JSON files. This folder contains
the stores used to read and write data.

views/ Contains Handlebars (.hbs) templates used to render dynamic HTML
pages.

views/layouts/ Defines the main layout used across all pages.

views/partials/ Reusable UI components such as navigation menus and
gallery lists.

public/ Contains static files including: - CSS stylesheets - Client-side
JavaScript

utils/ Utility functions used throughout the application.

server.js Main entry point of the application that configures Express,
middleware, and routing.

routes.js Defines the application’s routes and links them to their
corresponding controllers.

4.  Features

-   Homepage displaying application information
-   List of galleries
-   Individual gallery view pages
-   Navigation menu across all pages
-   Data stored and retrieved from JSON files
-   Dynamic page rendering using Handlebars templates

5.  Installation Instructions

6.  Download or clone the project repository.

7.  Navigate to the project folder in a terminal.

8.  Install dependencies using:

npm install

6.  Running the Application

After installing dependencies, start the server with:

node server.js

The application will start and can be accessed through a web browser,
typically at:

http://localhost:3000

7.  Educational Purpose This project demonstrates:

-   Server-side application development with Node.js
-   MVC project structure
-   Express routing
-   Dynamic templates using Handlebars
-   Basic data storage using JSON files
-   Separation of concerns in web applications

8.  Possible Improvements Future improvements could include:

-   Adding a database such as MongoDB or PostgreSQL
-   Implementing user authentication
-   Allowing users to create, edit, and delete galleries
-   Improved styling and responsive design
-   Form validation and error handling

9. AI Generated Content All images and textual content used within this
    project were generated using artificial intelligence tools. These
    AI-generated assets were used for demonstration and educational
    purposes only as part of the university assignment. The use of AI
    helped create placeholder gallery content and descriptive text
    without relying on copyrighted material.

The application logic, structure, and implementation of the web
application were developed by the student.

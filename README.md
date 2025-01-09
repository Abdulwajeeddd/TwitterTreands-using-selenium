# STIR ASSIGNMENT


## Introduction
This project is a task that involves using Selenium for web scraping, ProxyMesh for managing IP addresses, and MongoDB for data storage. The project includes a simple web interface to trigger the scraping process and display the results.


1. Clone the repository:


2.Install the dependencies:
 ```sh
npm install
```
## Configuration
Twitter Credentials: Update the index.js file with your Twitter username and password.

MongoDB: Update the MongoDB URI in index.js with your MongoDB connection string.

## Usage
Start the server:
 ```sh
node index.js
```
Open http://localhost:3000 in your browser.
Click the "Click here to run the script" button under the Trending Topic to run the Selenium script and display the results.

## Project Structure
`index.html`: The HTML file providing the web interface.
`index.js`: The Express.js server file handling HTTP requests and the Selenium script for web scraping and data storage.
`package.json`: The Node.js project configuration file.


##Example Configuration
Update the `.env` file with your credentials:

```javascript
MONGO_URI=mongodb://localhost:27017   //(Local Mongodb Database)
MONGO_DB_NAME=<your_database_name>
MONGO_COLLECTION_NAME=your_collection_name>
EMAIL=<your_email>
USERNAME=<your_username>
PASSWORD=<your_password>

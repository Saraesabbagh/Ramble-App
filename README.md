<img align="right" src="react-frontend/src/components/images/logo.png"  width="100">
# Ramble Web App
<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

***
Ramble helps athletes or people who like to exercise to find someone to exercise together.
We are here to help you find a partner for these activities and make your journey according to your goals. 🏃 🚴 🚶

***
<img src="http://ForTheBadge.com/images/badges/built-by-developers.svg">

<a href="https://github.com/karolina-codes"> Karolina Joksaite</a>
<a href ="https://github.com/ParisMonson"> Paris Monson </a>
<a href="https://github.com/Saraesabbagh" >Sara Sabbagh</a>
<a href="https://github.com/taybenca">Tayanne Bencardino</a>
***

### User story:

````
As a user
I want to create an account on Ramble
So that I can post a journey I would like to do

As a user
I want to post a journey
So that I can find people to join me

As a user
I want to request to join peoples' journeys
So that I can join in
````

### How did we approach designing our solution to the problem?
The group created a database in MongoDB with two different schemas: one for users and one for journeys.
On the front-end side, we requested the backend API using the POST method to add information about the user and their journeys in the database. Users can add start and end locations when they create a new journey. In this way, we send a request to the Google Maps API to find the geolocation coordinates and send them to us. With the coordinates, we can make another request that creates the routes of the journey.


### How to install and run this code and tests?

```
nvm use node
npm init -y
npm add jest
npm install
npm install -g jest
node app.js

jest
````
To run the application go into the react-frontend directory and type:
```
npm start
```




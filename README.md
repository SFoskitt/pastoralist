# pastoralist

SpaceApps Hackathon 2016 - Cross Campus, Pasadena, CA
https://2016.spaceappschallenge.org/challenges/earth/emobile-pastoralism

Datasets : Earth observation data
NASA Global Imagery Browse Services (GIBS): https://earthdata.nasa.gov/about/science-system-description/eosdis-components/global-imagery-browse-services-gibs
EARTHDATA: https://earthdata.nasa.gov/
More Information about the global phenomenon: http://www.ifad.org/lrkm/factsheet/women_pastoralism.pdf
https://code.nasa.gov/#/
OnEarth software on GitHub: https://github.com/nasa-gibs/onearth




# Built with # Angular Express Starter

A simple yet full-featured starting point for Angular+Express applications with token based authentication.

## Features
* JSON Web Token based Authentication
* Local Authentication using Email and Password
* OAuth 2.0 Authentication via Facebook and Google
* Account Management:
    * Change, forgot, reset Password
    * Change profile details
    * Link local and OAuth strategies to one account
    * Delete Account
* Material Design using Angular Material
* Simple project structure following current best practices for scalable apps

## Technologies used
* **Mongo DB** - NoSQL Database
* **Mongoose** - MongoDB object modeling tool
* **Express** - Web framework for Node.js
* **Angular** - Client side JavaScript framework
* **Angular UI Router** - Advanced Angular routing
* **Angular Material** - Material Design UI Components for Angular
* **Satellizer** - JSON Web Token based Authentication
* **Nodemailer** - Send password reset emails

## Demo
[see it live](https://angular-express-starter.herokuapp.com/)

## How to use

### Prerequisites
* install [Node](https://nodejs.org/)
* install [MongoDB](https://www.mongodb.org/)
* install [Bower](http://bower.io/)
    `npm install -g bower`
* clone or download this repository
* install the dependencies
```
npm install
bower install
```
* start the server
`npm start`
* open your browser at `localhost:3000`

### Set up API-Keys
* check [the satellizer instructions](https://github.com/sahat/satellizer#obtaining-oauth-keys)
  on how to get your OAuth keys.
  Set them as environment variables or insert them into `server/config.js` and `client/app.js`

### TODO:
* [ ] implement account deletion
* [ ] switch to component router when ready
* [ ] switch to angular2 when ready
* [ ] introduce gulp  or another build process when necessary
* [ ] write a lot of tests

## Contributing
Found a bug? Submit an issue or a pull request.

## License
MIT
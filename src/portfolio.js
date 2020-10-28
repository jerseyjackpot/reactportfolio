import React from 'react';
import "./style.css";
import ARTGAL from "./img/ARTGAL.png";
import LifePT from "./img/Lifepoint.png";
import EATBURG from "./img/EatBurg.png";
import DayPlan from "./img/DayPlanner.png";
import ASQUIZ from "./img/AstQuiz.png";
import WEATDASH from "./img/Wedash.png";
import {Link} from 'react-router-dom';

function Portfolio() {
    return (
        <div id="portfolio" className="container-fluid .align-middle">
            <div className="row">
                <div className="col">
                <img src={ARTGAL} className="img-fluid" alt="Virtual Art Gallery"/>
                </div>
                <div className="col">
                    <br></br>
                        <h4>Virtual Art Gallery</h4>
                        <p className="text-black-50 mb-0">Virtual Art Gallery is an interactive site that enables a user to create
                        a saved list of all the art they enjoy from Magic the Gathering cards. After creating your art
                        collection, you are matched with a humorous giphy that is interrelated to your card art. Users can then save
                        or share their collection using the dropbox button. The application we built utilized HTML, the Materialize framework, and CSS
                        stylesheets coupled with Javascript and Jquery functionality. The API’s we used for the project were Scryfall (API for
                                Magic Cards), GIPHY (for random GIFs and Images) and Dropbox (for direct download).</p>
                        <a href="https://nlamonaco86.github.io/Virtual_Art_Gallery/" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://github.com/jerseyjackpot/Virtual_Art_Gallery" target="_blank">Click here to checkout Github Repo </a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br></br>
                        <h4>Life Point</h4>
                        <p className="text-black-50 mb-0">Life point is an all in one source for reminders, mood and habit tracking, a daily
                        journal, and an affirmation generator to keep us mindful of the bright side of life. A full stack application that is member
                        driven using sequelize and mysql for database management, middleware to communicate and manage data and models for
                        objects to connect or create tables. Other dependencies used are Express, Express Handlebars, Sequelize/My SQL2, Bcrypt, Passport, CalendarJS, and
                        Express-Session.</p>
                        <a href="life-point.herokuapp.com" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://github.com/jerseyjackpot/life-point" target="_blank">Click here to checkout Github Repo</a>
                </div>
                <div className="col">
                    <img src={LifePT} className="img-fluid" alt="Life-Point"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={EATBURG} className="img-fluid" alt="Eat Da Burger"/>
                </div>
                <div className="col">
                    <br></br>
                    <h4>Eat Da Burger</h4>
                        <p className="text-black-50 mb-0">Eat Da Burger is a javascript page deployed on heroku that utilizes handlebars to display database information on the HTML page. 
                        The list of existing burgers can be edited or you can add to the log of either burgers devoured or burgers to be eaten.</p>
                        <a href="https://agile-lake-35945.herokuapp.com/" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://github.com/jerseyjackpot/Eat-Da-Burger" target="_blank">Click here to checkout Github Repo </a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br></br>
                    <h4>Day Planner</h4>
                        <p className="text-black-50 mb-0">Created a simple calendar application that allows the user to save events for each hour of the day. This app features dynamically 
                        updated HTML and CSS powered by jQuery. The page uses the Moment.js library to work with date and time. </p>
                        <a href="https://jerseyjackpot.github.io/Day-Planner/" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://jerseyjackpot.github.io/Day-Planner/" target="_blank">Click here to checkout Github Repo</a>
                </div>
                <div className="col">
                    <img src={DayPlan} className="img-fluid" alt="Day Planner"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={ASQUIZ} className="img-fluid" alt="Astronomy Quiz"/>
                </div>
                <div className="col">
                    <br></br>
                    <h4>Astronomy Quiz</h4>
                        <p className="text-black-50 mb-0">Astronomy Quiz is a timed javascript game that asks a round of dynamically rendered questions.
                        when the quiz ends you are advised to enter your initials. this will post your score to the high score page with is saved on the client side.</p>
                        <a href="https://jerseyjackpot.github.io/Code-Quiz/" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://github.com/jerseyjackpot/Code-Quiz" target="_blank">Click here to checkout Github Repo</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br></br>
                        <h4>Weather Dashboard</h4>
                        <p className="text-black-50 mb-0">Weather Dashboard is a javascript page that utilizes the OpenWeather API to retrieve weather data for cities.
                        The weather information is generated by dynamically updated HTML and CSS, and features a color-coded UV Index. The cities that are searched also generate 
                        a previously searched list that is saved locally and can be cleared with the click of a button</p>
                        <a href="https://jerseyjackpot.github.io/weather-dashboard/" target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href="https://github.com/jerseyjackpot/weather-dashboard" target="_blank">Click here to checkout Github Repo </a>
                </div>
                <div className="col">
                    <img src={WEATDASH} className="img-fluid" alt="Weather Dashboard"/>
                </div>
            </div>
        </div>
  );
}
export default Portfolio;                                                                         
import React from "react";

function Git() {
    return (
        // eslint-disable-next-line react/style-prop-object
        <main class="container" id="portfolio">
            <div style={{ backgroundImage: `url("./software_img.jpg")`, backgroundRepeat: "repeat-y", backgroundSize: "100%" }}>
                <b><a class="nav-link" href="https://github.com/Deepali-Gtech" target="_blank" rel="noreferrer">
                    <h3>GitHub Profile</h3>
                </a></b>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-4" id="fitconnect">
                            <b>Fit Connect</b>
                            <p>Fit-Connect is a web based application that allows you to create events for fitness activities in your surrounding areas.</p>
                            Technology - MongoDB, Express, React, Node, React-Bootstrap, Formik, Yup 
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://shrouded-shore-55489.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/ayejayhicks/fit-connect" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>
                        <div class="col-8">
                            <img src="./fit-connect.png" alt="fit-connect website" class="img-fluid col-sm-9 p-2"></img>
                        </div>
                    </div>
                </div>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-8">
                            <img src="./outwrite.png" alt="Outwrite website" class="img-fluid col-sm-9 p-2"></img>
                        </div>
                        <div class="col-4" id="outwrite">
                            <b>OutWrite</b>
                            <p>This website is for writers looking to flex their muscles and get a little inspiration.

Designed with collaboration in mind, OUTWrite is a site for writers looking to create collaborative stories. </p>
Technology - JavaScript, HTML5, Goodreads API, Random Prompt API, Bootstrap, Bulma
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://strawberry-crisp-31516.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/Deepali-Gtech/outWrite" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>

                    </div>
                </div>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-4" id="feedme">
                            <b>Feed Me</b>
                            <p>Worked on a website that helps you and your indecisive friends figure out where you go for dinner. </p>
                            Technology - UIKit, Google Maps Geocoding API, Zomato API, jQuery, JavaScript, CSS, HTML5
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://a-andres1.github.io/feed-me-tm/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/a-andres1/feed-me-tm" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>
                        <div class="col-8">
                            <img src="./feed-me.png" alt="Feed me web pge" class="img-fluid col-sm-9 p-2"></img>
                        </div>
                    </div>
                </div>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-8">
                            <img src="./employeeDirectory.png" alt="Feed me website" class="img-fluid col-sm-9 p-2"></img>
                        </div>
                        <div class="col-4" id="feedme">
                            <b>Employee Directory</b>
                           <p> App will allow to view entire employee directory at once so that you have quick access to their information.</p>
                           Technology - MongoDB, Express, React, Node, Mongoose
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://deepali-gtech.github.io/employee-directory/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/Deepali-Gtech/employee-directory" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>

                    </div>
                </div>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-4" id="googlebooksearch">
                            <b>Google Books Search</b>
                            <p>This is a React-based Google Books Search app. This create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches.</p>
                            Technology - MongoDB, Express, React, Node, Mongoose
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://cryptic-basin-72321.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/Deepali-Gtech/google-books-search" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>
                        <div class="col-8">
                            <img src="./googlebook.png" alt="google book search" class="img-fluid col-sm-9 p-2"></img>
                        </div>
                    </div>
                </div>

                <div class="container tableOne">
                    <div class="row">
                        <div class="col-8">
                            <img src="./techblog.png" alt="techblog" class="img-fluid col-sm-11 p-2"></img>
                        </div>
                        <div class="col-4" id="techblog">
                            <b>Tech Blog</b>
                            <p>This app build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers??? posts as well.</p>
                            Technology - MySQL, Express, Sequelize, Node, Dotenv
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://mysterious-stream-65434.herokuapp.com/" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/Deepali-Gtech/tech_blog" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>

                    </div>
                </div>
            </div>
        </main>

    );
}

export default Git;

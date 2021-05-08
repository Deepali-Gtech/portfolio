import React from "react";

function Git() {
    return (
        // eslint-disable-next-line react/style-prop-object
        <main class="container">
            <div style={{ backgroundImage: `url("./software_img.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                <b><a class="nav-link" href="https://github.com/Deepali-Gtech" target="_blank" rel="noreferrer">
                    <h3>GitHub Profile</h3>
                </a></b>

                <div class="container" id="tableOne">
                    <div class="row">
                        <div class="col-4" id="outwrite">
                            <b>OutWrite</b>
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
                        <div class="col-8">
                            <img src="./outwrite.png" alt="outwrite website" class="img-fluid col-sm-6 p-2"></img>
                        </div>
                    </div>
                </div>

                <div class="container" id="tableOne">
                    <div class="row">
                    <div class="col-8">
                            <img src="./feed-me.png" alt="Feed me website" class="img-fluid col-sm-6 p-2"></img>
                        </div>
                        <div class="col-4" id="feedme">
                            <b>Feed Me</b>
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
                        
                    </div>
                </div>

                <div class="container" id="tableOne">
                    <div class="row">
                        <div class="col-4" id="weather">
                            <b>Weather Dashboard</b>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://deepali-gtech.github.io/weather_dashboard" target="_blank" rel="noreferrer" >Deployed link</a>
                            </li>
                            <li>
                                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                <a class="websiteLink" href="https://github.com/Deepali-Gtech/weather_dashboard" target="_blank" rel="noreferrer">GitHub
                                link</a>
                            </li>
                        </div>
                        <div class="col-8">
                            <img src="./weather-dashboard.png" alt="weather website" class="img-fluid col-sm-6 p-2"></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Git;

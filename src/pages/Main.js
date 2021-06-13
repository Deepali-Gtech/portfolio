import React from "react";


function Main() {
    return (
        // eslint-disable-next-line react/style-prop-object
        <main class="container">
            <div id="full" style={{ backgroundImage: `url("./software_img.jpg")`, backgroundRepeat: "repeat-y", backgroundSize: "100%" }}>
            <h2 class="text"><b>Deepali Garg</b></h2>
                <div id="profileImage">
                    
                    <img src="./deepali.png" alt="Remote Classroom" class="img-fluid col-sm-8 p-2" />
                </div>

                <div id="bio">
                    <p>Full-stack Web Developer. Innovation optimized solution seeker. Recently earned a certificate in full stack development from The Georgia Institute of Technology, with newly developed skills in JavaScript, CSS, React.js, Node, Express, Mongodb, SQL and responsive web design. Innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. Also worked on a team of four to develop a single-page MERN app that helps people to connect through fitness activities. I am an effective communicator and team player, demonstrated throughout my bootcamp, where I kept open and regular communication with my teammates. Exhibited time management, leadership and conflict resolution skills by taking up the responsibility of scrum master along with application design and development in the team project. I am ambitious, adventurous, assiduous & animated. Excited to pursue my dream career as web developer and ready to utilize my problem solving skills to build innovative applications.</p>
                </div>
            <div class="text">
            Email Id: deepaligarg.chd@gmail.com
            <br />
            Contact Me: 404-800-3641
            </div>
            </div>
        </main>
    );
}

export default Main;

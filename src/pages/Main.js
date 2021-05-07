import React from "react";


function Main() {
    return (
        // eslint-disable-next-line react/style-prop-object
        <main class="container">
            <div style={{ backgroundImage: `url("./software_img.jpg")`, backgroundRepeat: "no-repeat" }}>
                <h1><b>Designer & Coder</b></h1>
                <div id="profileImage">
                    <img src="./deepali.png" alt="Remote Classroom" class="img-fluid col-sm-4 p-2" />
                </div>
                <h2><b>Deepali Garg</b></h2>
                <p>Web Developer</p><br />
            Email Id: deepaligarg.chd@gmail.com
            <br />
            Contact Me: 404-800-3641
        </div>
        </main>
    );
}

export default Main;

import React from "react";

function Nav() {
  return (
    <header class="container">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand mb-0 h1" href="./index.html">Deepali Garg</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="./git.html" >Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/deepali-garg-7a04a5115/"
                  target="_blank" rel="noreferrer">Linkedin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/Deepali-Gtech" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://studentlaniertech-my.sharepoint.com/:w:/g/personal/dgarg_student_laniertech_edu/EV9Io31swktOksi75Tn3ie4BqUPpxOQbhChfpAsZlWzXDw?e=3u9qvb" target="_blank" rel="noreferrer">Resume</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

import React from "react";
import { Helmet } from "react-helmet";

function Nav() {
  return (
    <header class="container">
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
          integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
          crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
          integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
          crossorigin="anonymous"></script>
      </Helmet>
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

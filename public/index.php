<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://code.jquery.com/jquery-3.6.4.js"
        integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Essay Speed Checker</title>
</head>

<body>
    <div id="overlay" onclick="off(this.id)">

    </div>
    <div id="sign-in-space">
        <div id="sign-in-modal">
            <div id="login-title">Sign In</div>
            <div class="sign-in-label">email</div>
            <div><input type="text" id="login-email-input"></div>
            <div class="sign-in-label">password:</div>
            <div><input type="password" id="login-password-input"></div>
            <div id="login-cred">Log In</div>
            <div id="sign-up-now-btn" onclick="sign_up_now()">Sign up now</div>
        </div>
    </div>
    <div id="sign-up-space">
        <div id="sign-up-modal">
            <div id="register-title">Sign Up</div>
            <div id="sign-up-role">
                <div id="student" class="select-role-icon" onclick="sel_role_input(this.id)"><i
                        class="material-icons">school</i></div>
                <div id="teacher" class="select-role-icon" onclick="sel_role_input(this.id)"><i
                        class="material-icons">person</i></div>
                <div id="administrator" class="select-role-icon" onclick="sel_role_input(this.id)"><i
                        class="material-icons">supervisor_account</i></div>
            </div>
            <div id="role-output">role: Teacher</div>
            <div id="sign-up-content">
                <div class="sign-up-label">username :</div>
                <div><input type="text" id="username-input"></div>
                <div class="sign-up-label">email :</div>
                <div><input type="email" id="email-input"></div>
                <div class="sign-up-label">password :</div>
                <div><input type="password" id="password-input"></div>
                <div class="sign-up-label">confirm password :</div>
                <div><input type="password" id="cpassword-input"></div>
                <div class="sign-up-label">cellphone number :</div>
                <div><input type="tel" placeholder="11 digits" pattern="[0-9]{11}" required id="contact-number-input">
                </div>
                <div class="sign-up-label">upload 1x1 profile picture :</div>
                <div><input type="file" accept="image/*" id="fileToUpload"></div>
                <div id="register-cred">Register</div>
            </div>

        </div>
    </div>
    <div id="navbar">
        <div id="navbar-left">
            <div id="navbar-title">ESSAY SPEED CHECKER</div>
        </div>
        <div id="navbar-right">
            <div id="sign-in-btn" onclick="on(this.id)">LOG IN</div>
            <div id="sign-up-btn" onclick="on(this.id)">SIGN UP</div>
        </div>
    </div>
    <div id="dashboard-content">
        <div>
            <img src="images/image-1.gif" alt="">
            <div class="persuade-text">ESCAPE ESSAY</div>
            <div class="persuade-text">PAPER WORK HELL</div>
        </div>
        <div>
            <img src="images/image-2.gif" alt="">
            <div class="persuade-text">SWIFTLY FINISH</div>
            <div class="persuade-text">CHECKING ESSAYS</div>
        </div>
        <div>
            <img src="images/image-3.gif" alt="">
            <div class="persuade-text">COMMIT YOUR HOURS</div>
            <div class="persuade-text">TO WHAT MATTERS</div>
        </div>
        <div id="invisible-img">
            <img src="images/profile.png" alt="" id="upload-img">
        </div>
    </div>
    <script src="js/jquery-latest.min.js"></script>
    <script>

    </script>
    <script src='js/index.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
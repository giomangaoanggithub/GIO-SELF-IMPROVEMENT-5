<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/page_admin.css">
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
    <div id="acc-view-space">
        <div id="acc-view-modal">
            <div id="acc-view-header">
                <div id="view-header-img"><img src="images/profile.png" alt="" id="account-focus"
                        class="people-pic img-fluid">
                </div>
                <div id="acc-view-title"></div>
            </div>
            <div id="acc-view-details">
                <div id="acc-email"></div>
                <div id="acc-contact-num"></div>
                <div id="acc-role"></div>
            </div>
        </div>
    </div>
    <div id="admin-navbar">
        <div id="admin-navbar-left">
            <div id="company-name">COMPANY TIME AS LONG AS IT TAKES THE SPACE WELL</div>
        </div>
        <div id="admin-navbar-right" onclick="on()">
            <div><img src="images/profile.png" alt="" id="profile-pic"></div>
            <div id="vl"></div>
            <div id="admin-name-placement">Uvuvwevwevwe onyetenvewve ugwemubwem ossas</div>
        </div>
    </div>
    <div id="admin-sub-bar">
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab1">People</div>
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab1-1"><i class="material-icons">groups</i></div>
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab2">Question & Answers</div>
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab2-2"><i class="material-icons">assignment</i></div>
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab3">Student Grades</div>
        <div class="admin-sub-bar-tab" id="admin-sub-bar-tab3-3"><i class="material-icons">assignment_turned_in</i>
        </div>
    </div>
    <div class="admin-view" id="admin-view-people">
        <div id="table-output-people">
            <table id="view-people-table">
                <thead id="thead-vpt"></thead>
                <tbody id="tbody-vpt"></tbody>
            </table>
        </div>
        <div id="table-output-people-sorter">
            <div><label for="find-username">Username: </label><br><input id="find-username" type="text"></div>
            <div><label for="find-role">Role: </label><br><select name="roles" id="find-role">
                    <option value="All">All</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                </select></div>
            <div><label for="find-email">Email: </label><br><input id="find-email" type="text"></div>
            <div><label for="find-tel">Contact: </label><br><input id="find-tel" type="tel" id="phone" name="phone"
                    pattern="[0-9]{11}"></div>
        </div>
    </div>
    <div class="admin-view" id="admin-view-qanda">
        <div id="table-output-qanda">
            <table id="view-qanda-table">
                <thead id="thead-qanda"></thead>
                <tbody id="tbody-qanda"></tbody>
            </table>
        </div>
        <div id="table-output-qanda-sorter">
            <div><label for="find-question">Question: </label><br><input id="find-question" type="text"></div>
            <div><label for="find-q-username">Username: </label><br><input id="find-q-username" type="text"></div>
        </div>
    </div>
    <div class="admin-view" id="admin-view-grades">
        <div id="table-output-grades">
            <table id="view-grades-table">
                <thead id="thead-grades"></thead>
                <tbody id="tbody-grades"></tbody>
            </table>
        </div>
        <div id="table-output-grades-sorter">
            <div><label for="find-s-username">Username: </label><br><input id="find-username" type="text"></div>
            <div><label for="find-s-email">Email: </label><br><input id="find-email" type="email"></div>
            <div><label for="find-s-grade">Grades: </label><br><select name="roles" id="find-role">
                    <option value="All">All</option>
                    <option value="Teacher">PASSING</option>
                    <option value="Student">FAILING</option>
                </select></div>
        </div>
    </div>












    <script src='js/page_admin.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
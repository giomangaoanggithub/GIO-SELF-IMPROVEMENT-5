<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/page_student.css">
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
    <div id="account-space">
        <div id="account-modal">
            <div id="account-title">SETTINGS</div>
            <div id="account-username">Gio Allanson Mangaoang</div>
            <div><input type="text" placeholder="Update Username"></div>
            <div id="set-cred"><button>SET</button></div>
            <div id="account-email">giomangaoang215@gmail.com</div>
            <div><input type="email" placeholder="Update email"></div>
            <div id="set-cred"><button>SET</button></div>
            <div id="account-cnumber">09608663386</div>
            <div><input type="tel" pattern="[0-9]{11}" placeholder="Update cellphone-number"></div>
            <div id="set-cred"><button>SET</button></div>
        </div>
    </div>
    <div id="answer-space">
        <div id="answer-modal">
            <div id="answer-title">Question is here?</div>
            <div><textarea name="" id="" cols="30" rows="5"></textarea></div>
            <div>SUBMIT</div>
        </div>
    </div>
    <div id="student-navbar">
        <div id="company-title" class="col-12" data-toggle="tooltip" title="Hooray!">
            
        </div>
        <div id="student-details" class="col-12">
            <div><img src="images/profile.png" id="profile-pic" alt=""></div>
            <div id="vl"></div>
            <div id="profile-name-email"><img src="images/loading.gif" alt="" style="height: 30px"></div>
        </div>
        <div id="student-sub-bar" class="col-12">
            <div class="student-sub-bar-tab" id="student-sub-bar-tab1">Room</div>
            <div class="student-sub-bar-tab" id="student-sub-bar-tab1-1"><i class="material-icons">door_front</i></div>
            <div class="student-sub-bar-tab" id="student-sub-bar-tab2">Tasks</div>
            <div class="student-sub-bar-tab" id="student-sub-bar-tab2-2"><i class="material-icons">add_circle</i></div>
            <div class="student-sub-bar-tab" id="student-sub-bar-tab3">Grades</div>
            <div class="student-sub-bar-tab" id="student-sub-bar-tab3-3"><i
                    class="material-icons">assignment_turned_in</i></div>
        </div>

    </div>
    <div id="student-rooms" class="col-12">
        <div id="list-of-rooms" class="col-12">
            <div>
                <div id="table-rooms">
                    <table>
                        <thead>
                            <tr>
                                <th>room name</th>
                                <th>teacher</th>
                                <th>Status</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-rooms">
                            <tr>
                                <td></td>
                                <td><img src="images/loading.gif" alt="" style="height: 30px"></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="room-search">
                <div><label class="search-room-label" for="search-room">Room: </label><input type="text"
                        id="search-room"></div>
                <div><label class="search-room-label" for="room-code">Code: </label><input type="text" id="search-code">
                </div>
                <div><button class="search-room-label-btn">SEARCH</button><img src="images/loading.gif" id="loading-room-image"></div>
            </div>
        </div>
    </div>
    <div id="student-write" class="col-12">
        <div id="list-of-tasks" class="col-12">
            <div>
                <div id="table-tasks">
                    <table>
                        <thead>
                            <tr>
                                <th>question</th>
                                <th>due date</th>
                                <th>teacher</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-lot">
                            <tr>
                                <td></td>
                                <td style="text-align: right;"><img src="images/loading.gif" alt="" style="height: 30px"></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id="student-grades" class="col-12">
        <div id="table-grades">
            <table>
                <thead>
                    <tr>
                        <th style="width: 40%">Question</th>
                        <th style="width: 40%">Answer</th>
                        <th style="width: 10%">Score</th>
                        <th style="width: 10%">action</th>
                    </tr>
                </thead>
                <tbody id="tbody-grades">
                    <tr>
                        <td></td>
                        <td style="text-align: right;"><img src="images/loading.gif" alt="" style="height: 30px"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script src='js/page_student.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
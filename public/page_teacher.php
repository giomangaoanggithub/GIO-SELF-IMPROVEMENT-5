<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/page_teacher.css">
    <script src="https://code.jquery.com/jquery-3.6.4.js"
        integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Essay Speed Checker</title>
</head>

<body>
    <div id="teacher-navbar">
        <div id="company-title" class="col-12">
            Mother of Divine Providence School
        </div>
        <div id="teacher-details" class="col-12">
            <div><img src="images/profile.png" id="profile-pic" alt=""></div>
            <div id="vl"></div>
            <div id="profile-name-email">Name: Gio Allanson Mangaoang <br> Email: giomangaoang215@gmail.com <br> Role:
                Teacher</div>
        </div>
        <div id="teacher-sub-bar" class="col-12">
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab1">Room</div>
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab1-1"><i class="material-icons">door_front</i></div>
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab2">Create</div>
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab2-2"><i class="material-icons">add_circle</i></div>
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab3">Student Grades</div>
            <div class="teacher-sub-bar-tab" id="teacher-sub-bar-tab3-3"><i
                    class="material-icons">assignment_turned_in</i></div>
        </div>
        <div id="teacher-rooms" class="col-12">
            <div id="list-of-rooms-appli" class="col-12">
                <div>
                    <div id="table-rooms">
                        <table>
                            <thead id="thead-lor"></thead>
                            <tbody id="tbody-lor"></tbody>
                        </table>
                    </div>
                    <div id="room-sorter">
                        <label for="find-room">Room: </label><input type="text" id="find-room">
                    </div>

                </div>
                <div>
                    <div id="table-newstud">
                        <table>
                            <thead id="thead-newstud">
                            </thead>
                            <tbody id="tbody-newstud">
                            </tbody>
                        </table>
                    </div>
                    <div id="newstud-sorter">
                        <div><label for="find-newstud">Student: </label><input type="text" id="find-newstud"></div>
                        <div><label for="find-newstudroom">Room: </label><input type="text" id="find-newstudroom"></div>

                    </div>

                </div>



            </div>
        </div>
        <div id="teacher-create" class="col-12">
            <div>
                <div id="room-title-create-q" class="col-12">Room: </div>
                <div id="table-cq">
                    <table>
                        <thead id="thead-cq"></thead>
                        <tbody id="tbody-cq"></tbody>
                    </table>
                </div>
                <div id="create-q-area"><label for="create-q" id="create-q-label">Create Question: </label><br><textarea
                        id="create-q" rows="4" cols="60"></textarea>
                </div>
            </div>
        </div>
        <div id="teacher-grades" class="col-12">

        </div>
    </div>
    <script src='js/page_teacher.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
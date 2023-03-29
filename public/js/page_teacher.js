function on(input) {
  document.getElementById("overlay").style.display = "block";
  if (input == "sign-in-btn") {
    document.getElementById("sign-in-modal").style.display = "flex";
  } else {
    document.getElementById("sign-up-modal").style.display = "flex";
  }
}

function off(input) {
  if (input == "overlay") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sign-in-modal").style.display = "none";
    document.getElementById("sign-up-modal").style.display = "none";
  }
}

var fetch_rooms = "";
var fetch_newstud = "";
var fetch_cq = "";
var fetch_curr_room = "";

function page_fetch_data() {
  $.get("php/zerver_page_teacher_fetch_rooms.php", function (data) {
    fetch_rooms = JSON.parse(data);
    $.get("php/zerver_page_teacher_fetch_newstuds.php", function (data) {
      fetch_newstud = JSON.parse(data);
      $.get("php/zerver_page_teacher_fetch_questions.php", function (data) {
        fetch_cq = JSON.parse(data);

        page_start();
      });
    });
  });
}

$("#teacher-sub-bar-tab1").click(function () {
  document.getElementById("teacher-rooms").style.display = "flex";
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-create").style.display = "none";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-grades").style.display = "none";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
  document.getElementById("room-title-create-q").innerHTML = "Room: ";
  page_fetch_data();
});

$("#teacher-sub-bar-tab2").click(function () {
  if (document.getElementById("room-title-create-q").innerHTML == "Room: ") {
    alert("Please create or pick a room...");
    return;
  }
  document.getElementById("teacher-rooms").style.display = "none";
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-create").style.display = "flex";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-grades").style.display = "none";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
  $("#thead-cq").empty();
  $("#thead-cq").append(
    "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
  );
  $("#tbody-cq").empty();

  for (i in fetch_cq) {
    if (fetch_cq[i]["publish"] == "1") {
      $("#tbody-cq").append(
        "<tr><td>" +
          fetch_cq[i]["question"] +
          "</td><td>" +
          fetch_cq[i]["HPS"] +
          "</td><td>" +
          fetch_cq[i]["time_of_issue"] +
          "</td><td>" +
          fetch_cq[i]["due_date"] +
          "</td><td>" +
          "PUBLISHED" +
          "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
          fetch_cq[i]["question_id"] +
          ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    } else if (fetch_cq[i]["publish"] == "0") {
      $("#tbody-cq").append(
        "<tr><td>" +
          fetch_cq[i]["question"] +
          "</td><td>" +
          fetch_cq[i]["HPS"] +
          "</td><td>" +
          fetch_cq[i]["time_of_issue"] +
          "</td><td>" +
          fetch_cq[i]["due_date"] +
          "</td><td>" +
          "NOT PUBLISHED" +
          "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
          fetch_cq[i]["question_id"] +
          ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    }
  }
});

$("#teacher-sub-bar-tab3").click(function () {
  document.getElementById("teacher-rooms").style.display = "none";
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-create").style.display = "none";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-grades").style.display = "flex";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("room-title-create-q").innerHTML = "Room: ";
});

$("#teacher-sub-bar-tab1-1").click(function () {
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-rooms").style.display = "flex";
  document.getElementById("teacher-create").style.display = "none";
  document.getElementById("teacher-grades").style.display = "none";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
  document.getElementById("room-title-create-q").innerHTML == "Room: ";
});

$("#teacher-sub-bar-tab2-2").click(function () {
  if (document.getElementById("room-title-create-q").innerHTML == "Room: ") {
    alert("Please create or pick a room...");
    return;
  }
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-rooms").style.display = "none";
  document.getElementById("teacher-create").style.display = "flex";
  document.getElementById("teacher-grades").style.display = "none";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
  $("#thead-cq").empty();
  $("#thead-cq").append(
    "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
  );
  $("#tbody-cq").empty();
  for (i in fetch_cq) {
    if (fetch_cq[i]["publish"] == "1") {
      $("#tbody-cq").append(
        "<tr><td>" +
          fetch_cq[i]["question"] +
          "</td><td>" +
          fetch_cq[i]["HPS"] +
          "</td><td>" +
          fetch_cq[i]["time_of_issue"] +
          "</td><td>" +
          fetch_cq[i]["due_date"] +
          "</td><td>" +
          "PUBLISHED" +
          "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
          fetch_cq[i]["question_id"] +
          ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    } else if (fetch_cq[i]["publish"] == "0") {
      $("#tbody-cq").append(
        "<tr><td>" +
          fetch_cq[i]["question"] +
          "</td><td>" +
          fetch_cq[i]["HPS"] +
          "</td><td>" +
          fetch_cq[i]["time_of_issue"] +
          "</td><td>" +
          fetch_cq[i]["due_date"] +
          "</td><td>" +
          "NOT PUBLISHED" +
          "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
          fetch_cq[i]["question_id"] +
          ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    }
  }
});

$("#teacher-sub-bar-tab3-3").click(function () {
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-rooms").style.display = "none";
  document.getElementById("teacher-create").style.display = "none";
  document.getElementById("teacher-grades").style.display = "flex";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("room-title-create-q").innerHTML == "Room: ";
});

function room_enter(input) {
  x = 0;
  y = 0;
  while (x < fetch_rooms.length && fetch_rooms[x]["room_id"] != input) {
    x++;
  }
  while (
    y < fetch_cq.length &&
    fetch_cq[y]["classroom_id"] != fetch_rooms[x]["room_id"]
  ) {
    y++;
  }
  //alert(fetch_rooms[x]["room_name"]);
  document.getElementById("room-title-create-q").innerHTML =
    fetch_rooms[x]["room_name"];
  $("#tbody-cq").empty();
  if (y < fetch_cq.length) {
    $.post(
      "php/zerver_page_teacher_fetch_question_room.php",
      { room: fetch_cq[y]["classroom_id"] },
      function (data) {
        fetch_cq = JSON.parse(data);
        for (i in fetch_cq) {
          if (fetch_cq[i]["publish"] == "1") {
            $("#tbody-cq").append(
              "<tr><td>" +
                fetch_cq[i]["question"] +
                "</td><td>" +
                fetch_cq[i]["HPS"] +
                "</td><td>" +
                fetch_cq[i]["time_of_issue"] +
                "</td><td>" +
                fetch_cq[i]["due_date"] +
                "</td><td>" +
                "PUBLISHED" +
                "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                fetch_cq[i]["question_id"] +
                ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
            );
          } else if (fetch_cq[i]["publish"] == "0") {
            $("#tbody-cq").append(
              "<tr><td>" +
                fetch_cq[i]["question"] +
                "</td><td>" +
                fetch_cq[i]["HPS"] +
                "</td><td>" +
                fetch_cq[i]["time_of_issue"] +
                "</td><td>" +
                fetch_cq[i]["due_date"] +
                "</td><td>" +
                "NOT PUBLISHED" +
                "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                fetch_cq[i]["question_id"] +
                ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
            );
          }
        }
        if (window.innerWidth > 829) {
          document.getElementById("teacher-sub-bar-tab2").click();
        } else if (window.innerWidth < 830) {
          document.getElementById("teacher-sub-bar-tab2-2").click();
        }
      }
    );
  } else {
    if (window.innerWidth > 829) {
      document.getElementById("teacher-sub-bar-tab2").click();
    } else if (window.innerWidth < 830) {
      document.getElementById("teacher-sub-bar-tab2-2").click();
    }
    $("#tbody-cq").empty();
  }
}

function publish_unpublish(input) {
  x = 0;
  while (x < fetch_cq.length && input != fetch_cq[x]["question_id"]) {
    x++;
  }
  if (fetch_cq[x]["publish"] == "1") {
    $.post(
      "php/zerver_page_teacher_question_unpublish.php",
      { id: fetch_cq[x]["question_id"] },
      function (data) {
        message_data = data;
        $.get("php/zerver_page_teacher_fetch_questions.php", function (data) {
          fetch_cq = JSON.parse(data);
          $("#thead-cq").empty();
          $("#thead-cq").append(
            "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
          );
          $("#tbody-cq").empty();
          for (i in fetch_cq) {
            if (fetch_cq[i]["publish"] == "1") {
              $("#tbody-cq").append(
                "<tr><td>" +
                  fetch_cq[i]["question"] +
                  "</td><td>" +
                  fetch_cq[i]["HPS"] +
                  "</td><td>" +
                  fetch_cq[i]["time_of_issue"] +
                  "</td><td>" +
                  fetch_cq[i]["due_date"] +
                  "</td><td>" +
                  "PUBLISHED" +
                  "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                  fetch_cq[i]["question_id"] +
                  ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
              );
            } else if (fetch_cq[i]["publish"] == "0") {
              $("#tbody-cq").append(
                "<tr><td>" +
                  fetch_cq[i]["question"] +
                  "</td><td>" +
                  fetch_cq[i]["HPS"] +
                  "</td><td>" +
                  fetch_cq[i]["time_of_issue"] +
                  "</td><td>" +
                  fetch_cq[i]["due_date"] +
                  "</td><td>" +
                  "NOT PUBLISHED" +
                  "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                  fetch_cq[i]["question_id"] +
                  ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
              );
            }
          }
          alert(message_data);
        });
      }
    );
  } else if (fetch_cq[x]["publish"] == "0") {
    $.post(
      "php/zerver_page_teacher_question_publish.php",
      { id: fetch_cq[x]["question_id"] },
      function (data) {
        message_data = data;
        $.get("php/zerver_page_teacher_fetch_questions.php", function (data) {
          fetch_cq = JSON.parse(data);
          $("#thead-cq").empty();
          $("#thead-cq").append(
            "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
          );
          $("#tbody-cq").empty();
          for (i in fetch_cq) {
            if (fetch_cq[i]["publish"] == "1") {
              $("#tbody-cq").append(
                "<tr><td>" +
                  fetch_cq[i]["question"] +
                  "</td><td>" +
                  fetch_cq[i]["HPS"] +
                  "</td><td>" +
                  fetch_cq[i]["time_of_issue"] +
                  "</td><td>" +
                  fetch_cq[i]["due_date"] +
                  "</td><td>" +
                  "PUBLISHED" +
                  "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                  fetch_cq[i]["question_id"] +
                  ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
              );
            } else if (fetch_cq[i]["publish"] == "0") {
              $("#tbody-cq").append(
                "<tr><td>" +
                  fetch_cq[i]["question"] +
                  "</td><td>" +
                  fetch_cq[i]["HPS"] +
                  "</td><td>" +
                  fetch_cq[i]["time_of_issue"] +
                  "</td><td>" +
                  fetch_cq[i]["due_date"] +
                  "</td><td>" +
                  "NOT PUBLISHED" +
                  "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
                  fetch_cq[i]["question_id"] +
                  ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
              );
            }
          }
          alert(message_data);
        });
      }
    );
  }
}

function page_start() {
  if (window.innerWidth < 830) {
    document.getElementById("teacher-sub-bar-tab1-1").style.display = "block";
    document.getElementById("teacher-sub-bar-tab2-2").style.display = "block";
    document.getElementById("teacher-sub-bar-tab3-3").style.display = "block";
    document.getElementById("teacher-sub-bar-tab1").style.display = "none";
    document.getElementById("teacher-sub-bar-tab2").style.display = "none";
    document.getElementById("teacher-sub-bar-tab3").style.display = "none";
    $("#thead-lor").empty();
    $("#thead-lor").append(
      "<tr><td>room name</td><td>room code</td><td>students</td><td>action</td></tr>"
    );
    $("#tbody-lor").empty();
    for (i in fetch_rooms) {
      $("#tbody-lor").append(
        "<tr><td>" +
          fetch_rooms[i]["room_name"] +
          "</td><td>" +
          fetch_rooms[i]["room_code"] +
          "</td><td class='see-room-studs-h'>" +
          "##" + //fetch_rooms[i][""]
          "<i class='see-room-studs material-icons'>visibility</i></td><td><i class='enter-room material-icons' onclick='room_enter(" +
          fetch_rooms[i]["room_id"] +
          ")'>meeting_room</i><i class='edit-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    }
    $("#thead-newstud").empty();
    $("#thead-newstud").append(
      "<tr><td>action</td><td>time of issue</td><td>room name</td><td>new students</td></tr>"
    );
    $("#tbody-newstud").empty();
    for (i in fetch_newstud) {
      $("#tbody-newstud").append(
        "<tr><td>" +
          "<i class='decline-stud material-icons'>close</i><i class='accept-stud material-icons'>how_to_reg</i>" +
          "</td><td>" +
          "####-##-## 23:04:20" +
          "</td><td>" +
          fetch_newstud[i]["room_name"] +
          "</td><td>" +
          fetch_newstud[i]["student_email"] +
          "</td><tr>"
      );
    }
    $("#thead-cq").empty();
    $("#thead-cq").append(
      "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
    );
    $("#tbody-cq").empty();
    for (i in fetch_cq) {
      if (fetch_cq[i]["publish"] == "1") {
        $("#tbody-cq").append(
          "<tr><td>" +
            fetch_cq[i]["question"] +
            "</td><td>" +
            fetch_cq[i]["HPS"] +
            "</td><td>" +
            fetch_cq[i]["time_of_issue"] +
            "</td><td>" +
            fetch_cq[i]["due_date"] +
            "</td><td>" +
            "PUBLISHED" +
            "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
            fetch_cq[i]["question_id"] +
            ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
        );
      } else if (fetch_cq[i]["publish"] == "0") {
        $("#tbody-cq").append(
          "<tr><td>" +
            fetch_cq[i]["question"] +
            "</td><td>" +
            fetch_cq[i]["HPS"] +
            "</td><td>" +
            fetch_cq[i]["time_of_issue"] +
            "</td><td>" +
            fetch_cq[i]["due_date"] +
            "</td><td>" +
            "NOT PUBLISHED" +
            "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
            fetch_cq[i]["question_id"] +
            ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
        );
      }
    }
  }
  if (window.innerWidth > 829) {
    document.getElementById("teacher-sub-bar-tab1-1").style.display = "none";
    document.getElementById("teacher-sub-bar-tab2-2").style.display = "none";
    document.getElementById("teacher-sub-bar-tab3-3").style.display = "none";
    document.getElementById("teacher-sub-bar-tab1").style.display = "block";
    document.getElementById("teacher-sub-bar-tab2").style.display = "block";
    document.getElementById("teacher-sub-bar-tab3").style.display = "block";
    $("#thead-lor").empty();
    $("#thead-lor").append(
      "<tr><th>room name</th><th>room code</th><th>students</th><th>action</th></tr>"
    );
    $("#tbody-lor").empty();
    for (i in fetch_rooms) {
      $("#tbody-lor").append(
        "<tr><td>" +
          fetch_rooms[i]["room_name"] +
          "</td><td>" +
          fetch_rooms[i]["room_code"] +
          "</td><td class='see-room-studs-h'>" +
          "##" + //fetch_rooms[i][""]
          "<i class='see-room-studs material-icons'>visibility</i></td><td><i class='enter-room material-icons' onclick='room_enter(" +
          fetch_rooms[i]["room_id"] +
          ")'>meeting_room</i><i class='edit-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
      );
    }
    $("#thead-newstud").empty();
    $("#thead-newstud").append(
      "<tr><th>action</th><th>time of issue</th><th>room name</th><th>new students</th></tr>"
    );
    $("#tbody-newstud").empty();
    for (i in fetch_newstud) {
      $("#tbody-newstud").append(
        "<tr><td>" +
          "<i class='decline-stud material-icons'>close</i><i class='accept-stud material-icons'>how_to_reg</i>" +
          "</td><td>" +
          "####-##-## 23:04:20" +
          "</td><td>" +
          fetch_newstud[i]["room_name"] +
          "</td><td>" +
          fetch_newstud[i]["student_email"] +
          "</td><tr>"
      );
    }
    $("#thead-cq").empty();
    $("#thead-cq").append(
      "<tr><th>questions</th><th>HPS</th><th>time of issue</th><th>due date</th><th>status</th><th>actions</th></tr>"
    );
    $("#tbody-cq").empty();
    for (i in fetch_cq) {
      if (fetch_cq[i]["publish"] == "1") {
        $("#tbody-cq").append(
          "<tr><td>" +
            fetch_cq[i]["question"] +
            "</td><td>" +
            fetch_cq[i]["HPS"] +
            "</td><td>" +
            fetch_cq[i]["time_of_issue"] +
            "</td><td>" +
            fetch_cq[i]["due_date"] +
            "</td><td>" +
            "PUBLISHED" +
            "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
            fetch_cq[i]["question_id"] +
            ")'>unpublished</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
        );
      } else if (fetch_cq[i]["publish"] == "0") {
        $("#tbody-cq").append(
          "<tr><td>" +
            fetch_cq[i]["question"] +
            "</td><td>" +
            fetch_cq[i]["HPS"] +
            "</td><td>" +
            fetch_cq[i]["time_of_issue"] +
            "</td><td>" +
            fetch_cq[i]["due_date"] +
            "</td><td>" +
            "NOT PUBLISHED" +
            "</td><td><i class='delete-room material-icons' onclick='publish_unpublish(" +
            fetch_cq[i]["question_id"] +
            ")'>publish</i><i class='delete-room material-icons'>edit</i><i class='delete-room material-icons'>delete</i></td></tr>"
        );
      }
    }
  }
  document.getElementById("teacher-rooms").style.display = "flex";
  document.getElementById("teacher-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-create").style.display = "none";
  document.getElementById("teacher-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-grades").style.display = "none";
  document.getElementById("teacher-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("teacher-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("teacher-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
}

$(window).resize(function () {
  page_start();
});

page_fetch_data();

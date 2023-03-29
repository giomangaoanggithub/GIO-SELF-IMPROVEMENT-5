function on(input) {
  document.getElementById("overlay").style.display = "block";
  if (input == 1) {
    document.getElementById("account-modal").style.display = "flex";
  } else if(input == 2){
    document.getElementById("answer-modal").style.display = "flex";
  }
}
function off(input) {
  if (input == "overlay") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("account-modal").style.display = "none";
    document.getElementById("answer-modal").style.display = "none";
  }
}
$("#profile-pic").click(function () {
  on(1);
});
$("#student-sub-bar-tab1").click(function () {
  document.getElementById("student-rooms").style.display = "flex";
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-write").style.display = "none";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("student-grades").style.display = "none";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});
$("#student-sub-bar-tab2").click(function () {
  document.getElementById("student-rooms").style.display = "none";
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("student-write").style.display = "flex";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-grades").style.display = "none";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});
$("#student-sub-bar-tab3").click(function () {
  document.getElementById("student-rooms").style.display = "none";
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("student-write").style.display = "none";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("student-grades").style.display = "flex";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
});
$("#student-sub-bar-tab1-1").click(function () {
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("student-rooms").style.display = "flex";
  document.getElementById("student-write").style.display = "none";
  document.getElementById("student-grades").style.display = "none";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});
$("#student-sub-bar-tab2-2").click(function () {
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("student-rooms").style.display = "none";
  document.getElementById("student-write").style.display = "flex";
  document.getElementById("student-grades").style.display = "none";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});
$("#student-sub-bar-tab3-3").click(function () {
  document.getElementById("student-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("student-rooms").style.display = "none";
  document.getElementById("student-write").style.display = "none";
  document.getElementById("student-grades").style.display = "flex";
  document.getElementById("student-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("student-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
});

$(".search-room-label-btn").click(function () {
  if(document.getElementById("search-room").value == ""){
    return;
  }
  document.getElementById("loading-room-image").style.display = "inline";
  $.post(
    "php/zerver_page_student_search_room_exists.php",
    {
      room_name: document.getElementById("search-room").value,
      room_code: document.getElementById("search-code").value,
    },
    function (data) {
      data = JSON.parse(data);
      teacher = data[0]["owner_email"];
      if (data.length > 0) {
        $.post(
          "php/zerver_page_student_check_application.php",
          {
            room_name: document.getElementById("search-room").value,
            room_teacher: data[0]["owner_email"],
          },
          function (data) {
            data = JSON.parse(data);
            if (data.length > 0) {
              alert("You already have sent your request...");
              document.getElementById("loading-room-image").style.display = "none";
            } else {
              $.post(
                "php/zerver_page_student_send_application.php",
                {
                  room_name: document.getElementById("search-room").value,
                  room_teacher: teacher,
                },
                function (data) {
                  alert(data);
                  document.getElementById("loading-room-image").style.display = "none";
                  page_start();
                }
              );
            }
          }
        );
      } else {document.getElementById("loading-room-image").style.display = "none"; }
    }
  );
});

var fetch_question = "";

function get_question(input) {
  document.getElementById("answer-title").innerHTML = fetch_question[input]["question"];

}

function page_start() {
  document.getElementById("student-rooms").style.display = "flex";
  document.getElementById("student-write").style.display = "none";
  document.getElementById("student-grades").style.display = "none";
  $.get("php/zerver_page_student_fetch_school.php", function(data){
    data = JSON.parse(data);
    document.getElementById("company-title").innerHTML = data[0]["company_name"];
    $.get("php/zerver_page_student_fetch_priority_tasks.php", function (data) {
      data = JSON.parse(data);
      fetch_question = data;
      $("#tbody-lot").empty();
      for (i in data) {
        $("#tbody-lot").append(
          "<tr><td>" +
            data[i]["question"] +
            "</td><td>" +
            data[i]["due_date"] +
            "</td><td>" +
            data[i]["username"] +
            "</td><td><i class='enter-room material-icons' onclick='on(2); get_question("+i+")'>history_edu</i></td></tr>"
        );
      }
      $.get("php/zerver_page_student_fetch_grades.php", function (data) {
        data = JSON.parse(data);
        $("#tbody-grades").empty();
        for (i in data) {
          $("#tbody-grades").append(
            "<tr><td>" +
              data[i]["question"] +
              "</td><td>" +
              data[i]["answer"] +
              "</td><td>" +
              data[i]["HPS"] * (data[i]["grades"] / 100) +
              " / " +
              data[i]["HPS"] +
              "</td><td><i class='enter-room material-icons' data-toggle='tooltip' title='Request re-evaluation?'>priority_high</i></td></tr>"
          );
        }
        $.get("php/zerver_page_student_fetch_account.php", function (data) {
          data = JSON.parse(data);
          document.getElementById("profile-name-email").innerHTML =
            "Name: " +
            data[0]["username"] +
            "<br>Email: " +
            data[0]["email"] +
            "<br>Role: Student";
          document.getElementById("profile-pic").src =
            "php/" + data[0]["profile_pic_address"];
          $.get("php/zerver_page_student_fetch_tsc.php", function (data) {
            data = JSON.parse(data);
            $("#tbody-rooms").empty();
            for (i in data) {
              if (data[i]["t_s_connection"] == "0") {
                $("#tbody-rooms").append(
                  "<tr><td>" +
                    data[i]["room_name"] +
                    "</td><td>" +
                    data[i]["teacher_email"] +
                    "</td><td>On Queue</td><td><i class='enter-room material-icons' data-toggle='tooltip' title='Cancel Request?'>cancel</i></td></tr>"
                );
              } else if (data[i]["t_s_connection"] == "1") {
                $("#tbody-rooms").append(
                  "<tr><td>" +
                    data[i]["room_name"] +
                    "</td><td>" +
                    data[i]["teacher_email"] +
                    "</td><td>ACCEPTED</td><td><i class='enter-room material-icons' data-toggle='tooltip' title='Leave Room?'>close</i></td></tr>"
                );
              }
            }
          });
        });
      });
    });
  });
  
}

$(window).resize(function () {
  page_start();
});
page_start();

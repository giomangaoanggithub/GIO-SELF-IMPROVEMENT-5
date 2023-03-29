function on() {
  document.getElementById("overlay").style.display = "block";
}

function off(input) {
  if (input == "overlay") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("acc-view-modal").style.display = "none";
  }
}

//################################################################################## FETCH DATA

var fetch_teachers = "";
var fetch_students = "";
var fetch_questions = "";
var fetch_answers = "";

//################################################################################## VIEW PEOPLE

$("#admin-sub-bar-tab1").click(function () {
  document.getElementById("admin-view-people").style.display = "block";
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-view-qanda").style.display = "none";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-grades").style.display = "none";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});

$("#admin-sub-bar-tab2").click(function () {
  document.getElementById("admin-view-people").style.display = "none";
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-qanda").style.display = "block";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-view-grades").style.display = "none";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});

$("#admin-sub-bar-tab3").click(function () {
  document.getElementById("admin-view-people").style.display = "none";
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-qanda").style.display = "none";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-grades").style.display = "block";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
});

$("#admin-sub-bar-tab1-1").click(function () {
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-people").style.display = "block";
  document.getElementById("admin-view-qanda").style.display = "none";
  document.getElementById("admin-view-grades").style.display = "none";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});

$("#admin-sub-bar-tab2-2").click(function () {
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#379683";
  document.getElementById("admin-view-people").style.display = "none";
  document.getElementById("admin-view-qanda").style.display = "block";
  document.getElementById("admin-view-grades").style.display = "none";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#379683";
});

$("#admin-sub-bar-tab3-3").click(function () {
  document.getElementById("admin-sub-bar-tab1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3").style.backgroundColor =
    "#5cdb95";
  document.getElementById("admin-view-people").style.display = "none";
  document.getElementById("admin-view-qanda").style.display = "none";
  document.getElementById("admin-view-grades").style.display = "block";
  document.getElementById("admin-sub-bar-tab1-1").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab2-2").style.backgroundColor =
    "#379683";
  document.getElementById("admin-sub-bar-tab3-3").style.backgroundColor =
    "#5cdb95";
});

//################################################################################## VIEW Q & A

//##################################################################################

function page_fetch_data() {
  $.get("php/zerver_page_admin_fetch_teachers.php", function (data) {
    fetch_teachers = JSON.parse(data);
    $.get("php/zerver_page_admin_fetch_students.php", function (data) {
      fetch_students = JSON.parse(data);
      $.get("php/zerver_page_admin_fetch_qanda_questions.php", function (data) {
        fetch_questions = JSON.parse(data);
        $.get("php/zerver_page_admin_fetch_qanda_answers.php", function (data) {
          fetch_answers = JSON.parse(data);
          page_start();
        });
      });
    });
  });
}

function page_start() {
  if (window.innerWidth < 830) {
    document.getElementById("admin-sub-bar-tab1-1").style.display = "block";
    document.getElementById("admin-sub-bar-tab2-2").style.display = "block";
    document.getElementById("admin-sub-bar-tab3-3").style.display = "block";
    document.getElementById("admin-sub-bar-tab1").style.display = "none";
    document.getElementById("admin-sub-bar-tab2").style.display = "none";
    document.getElementById("admin-sub-bar-tab3").style.display = "none";
    $("#thead-vpt").empty();
    $("#tbody-vpt").empty();
    $("#thead-vpt").append(
      "<tr><th style='width: 10%'>profile</th><th style='width: 55%'>username</th><th style='width: 5%'>role</th><th style='width: 30%'>action</th></tr>"
    );
    for (i in fetch_teachers) {
      $("#tbody-vpt").append(
        "<tr><td><img = src='php/" +
          fetch_teachers[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'></td><td>" +
          fetch_teachers[i]["username"] +
          "</td><td>" +
          '<i class="material-icons">person</i>' +
          "</td><td><button id='account_id_" +
          fetch_teachers[i]["user_id"] +
          "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
      );
    }
    for (i in fetch_students) {
      $("#tbody-vpt").append(
        "<tr><td><img src='php/" +
          fetch_students[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'</td><td>" +
          fetch_students[i]["username"] +
          "</td><td>" +
          '<i class="material-icons">school</i>' +
          "</td><td><button id='account_id_" +
          fetch_students[i]["user_id"] +
          "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
      );
    }

    $("#thead-qanda").empty();
    $("#tbody-qanda").empty();
    $("#thead-qanda").append(
      "<tr><th style='width: 5%'>profile</th><th style='width: 35%'>question</th><th style='width: 10%'>action</th></tr>"
    );
    for (i in fetch_questions) {
      $("#tbody-qanda").append(
        "<tr><td><img src='php/" +
          fetch_questions[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'></td><td>" +
          fetch_questions[i]["question"] +
          "</td><td><button id='teacher_question_" +
          fetch_questions[i]["question_id"] +
          "'>VIEW</button></td></tr>"
      );
    }
    // $("#tbody-qanda").append(
    //   "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td><button class='view-qanda'>VIEW</button></td></tr>"
    // );
  }
  if (window.innerWidth > 829) {
    document.getElementById("admin-sub-bar-tab1-1").style.display = "none";
    document.getElementById("admin-sub-bar-tab2-2").style.display = "none";
    document.getElementById("admin-sub-bar-tab3-3").style.display = "none";
    document.getElementById("admin-sub-bar-tab1").style.display = "block";
    document.getElementById("admin-sub-bar-tab2").style.display = "block";
    document.getElementById("admin-sub-bar-tab3").style.display = "block";
    $("#thead-vpt").empty();
    $("#thead-vpt").append(
      "<tr><th style='width: 5%'>profile</th><th style='width: 35%'>username</th><th style='width: 10%'>role</th><th style='width: 25%'>email</th><th style='width: 15%'>contact</th><th style='width: 10%'>action</th></tr>"
    );
    $("#tbody-vpt").empty();
    for (i in fetch_teachers) {
      $("#tbody-vpt").append(
        "<tr><td><img src='php/" +
          fetch_teachers[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'></td><td>" +
          fetch_teachers[i]["username"] +
          "</td><td>" +
          '<i class="material-icons">person</i>' +
          "</td><td>" +
          fetch_teachers[i]["email"] +
          "</td><td>" +
          fetch_teachers[i]["contact_number"] +
          "</td><td><button id='account_id_" +
          fetch_teachers[i]["user_id"] +
          "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
      );
    }
    for (i in fetch_students) {
      $("#tbody-vpt").append(
        "<tr><td><img src='php/" +
          fetch_students[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'></td><td>" +
          fetch_students[i]["username"] +
          "</td><td>" +
          '<i class="material-icons">school</i>' +
          "</td><td>" +
          fetch_students[i]["email"] +
          "</td><td>" +
          fetch_students[i]["contact_number"] +
          "</td><td><button id='account_id_" +
          fetch_students[i]["user_id"] +
          "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
      );
    }

    $("#thead-qanda").empty();
    $("#tbody-qanda").empty();
    $("#thead-qanda").append(
      "<tr><th style='width: 5%'>profile</th><th style='width: 35%'>question</th><th style='width: 20%'>time of issue</th><th style='width: 20%'>due date</th><th style='width: 10%'>action</th></tr>"
    );
    for (i in fetch_questions) {
      $("#tbody-qanda").append(
        "<tr><td><img src='php/" +
          fetch_questions[i]["profile_pic_address"] +
          "' class='people-pic img-fluid'></td><td>" +
          fetch_questions[i]["question"] +
          "</td><td>" +
          fetch_questions[i]["time_of_issue"] +
          "</td><td>" +
          fetch_questions[i]["due_date"] +
          "</td><td><button id='teacher_question_" +
          fetch_questions[i]["question_id"] +
          "'>VIEW</button></td></tr>"
      );
    }
    // $("#tbody-qanda").append(
    //   "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td>sampleemail@gmail.com</td><td>2023-03-13 21:05:50</td><td><button class='view-qanda'>VIEW</button></td></tr>" +
    //     "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td>sampleemail@gmail.com</td><td>2023-03-13 21:05:50</td><td><button class='view-qanda'>VIEW</button></td></tr>" +
    //     "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td>sampleemail@gmail.com</td><td>2023-03-13 21:05:50</td><td><button class='view-qanda'>VIEW</button></td></tr>" +
    //     "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td>sampleemail@gmail.com</td><td>2023-03-13 21:05:50</td><td><button class='view-qanda'>VIEW</button></td></tr>" +
    //     "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td class='justify-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ullam provident quam architecto. Earum, at voluptas neque rerum accusamus laudantium molestiae suscipit, cumque eligendi illum rem minima deserunt eaque?</td><td>sampleemail@gmail.com</td><td>2023-03-13 21:05:50</td><td><button class='view-qanda'>VIEW</button></td></tr>"
    // );
    $("#thead-grades").empty();
    $("#tbody-grades").empty();
    $("#thead-grades").append(
      "<tr><th style='width: 5%'>profile</th><th style='width: 35%'>grades</th><th style='width: 25%'>email</th><th style='width: 15%'>status</th><th style='width: 10%'>action</th></tr>"
    );
    $("#tbody-grades").append(
      "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>" +
        "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>" +
        "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>" +
        "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>" +
        "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>" +
        "<tr><td><img src='images/profile.png' class='img-fluid'/></td><td>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong>Question_idnum : 10/10<strong> | </strong></td><td>sampleemail@gmail.com</td><td>PASSING</td><td><button class='view-grades'>VIEW</button></td></tr>"
    );
  }
}

$("#find-role").on("change", function () {
  //alert(document.getElementById("find-role").value);
  $("#tbody-vpt").empty();
  if (document.getElementById("find-role").value == "All") {
    page_fetch_data();
    return;
  }
  $.post(
    "php/zerver_page_admin_search_role.php",
    {
      search_role: document.getElementById("find-role").value,
    },
    function (data) {
      // alert(data);
      data = JSON.parse(data);
      for (i in data) {
        if (window.innerWidth < 830) {
          if (data[i]["user_role"] == "1") {
            $("#tbody-vpt").append(
              "<tr><td><img src='php/" +
                data[i]["profile_pic_address"] +
                "' class='people-pic img-fluid'></td><td>" +
                data[i]["username"] +
                "</td><td>" +
                '<i class="material-icons">person</i>' +
                "</td><td><button id='account_id_" +
                data[i]["user_id"] +
                "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
            );
          } else {
            $("#tbody-vpt").append(
              "<tr><td><img src='php/" +
                data[i]["profile_pic_address"] +
                "' class='people-pic img-fluid'></td><td>" +
                data[i]["username"] +
                "</td><td>" +
                '<i class="material-icons">school</i>' +
                "</td><td><button id='account_id_" +
                data[i]["user_id"] +
                "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
            );
          }
        } else if (window.innerWidth > 829) {
          if (data[i]["user_role"] == "1") {
            $("#tbody-vpt").append(
              "<tr><td><img src='php/" +
                data[i]["profile_pic_address"] +
                "' class='people-pic img-fluid'></td><td>" +
                data[i]["username"] +
                "</td><td>" +
                '<i class="material-icons">person</i>' +
                "</td><td>" +
                data[i]["email"] +
                "</td><td>" +
                data[i]["contact_number"] +
                "</td><td><button id='account_id_" +
                data[i]["user_id"] +
                "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
            );
          } else {
            $("#tbody-vpt").append(
              "<tr><td><img src='php/" +
                data[i]["profile_pic_address"] +
                "' class='people-pic img-fluid'></td><td>" +
                data[i]["username"] +
                "</td><td>" +
                '<i class="material-icons">school</i>' +
                "</td><td>" +
                data[i]["email"] +
                "</td><td>" +
                data[i]["contact_number"] +
                "</td><td><button id='account_id_" +
                data[i]["user_id"] +
                "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
            );
          }
        }
      }
    }
  );
});

$("#find-email").on("keyup", function () {
  $.post(
    "php/zerver_page_admin_search_teacher_email.php",
    { search_email: document.getElementById("find-email").value },
    function (data) {
      fetch_teachers = JSON.parse(data);
      filtered_email_teachers = [];
      for (i in fetch_teachers) {
        filtered_email = "";
        for (x = 0; x < fetch_teachers[i]["email"].indexOf("@"); x++) {
          filtered_email += fetch_teachers[i]["email"][x];
        }

        filtered_email_teachers.push(filtered_email);
      }
      $.post(
        "php/zerver_page_admin_search_student_email.php",
        { search_email: document.getElementById("find-email").value },
        function (data) {
          fetch_students = JSON.parse(data);
          filtered_email_students = [];
          for (i in fetch_students) {
            filtered_email = "";
            for (x = 0; x < fetch_students[i]["email"].indexOf("@"); x++) {
              filtered_email += fetch_students[i]["email"][x];
            }
            filtered_email_students.push(filtered_email);
          }
          $("#tbody-vpt").empty();
          for (i in fetch_teachers) {
            if (
              filtered_email_teachers[i].includes(
                document.getElementById("find-email").value
              )
            ) {
              if (window.innerWidth > 829) {
                $("#tbody-vpt").append(
                  "<tr><td><img src='php/" +
                    fetch_teachers[i]["profile_pic_address"] +
                    "' class='people-pic img-fluid'></td><td>" +
                    fetch_teachers[i]["username"] +
                    "</td><td>" +
                    '<i class="material-icons">person</i>' +
                    "</td><td>" +
                    fetch_teachers[i]["email"] +
                    "</td><td>" +
                    fetch_teachers[i]["contact_number"] +
                    "</td><td><button id='account_id_" +
                    fetch_teachers[i]["user_id"] +
                    "' onclick='show_account(this.id)'>VIEW<button></td></tr>"
                );
              } else if (window.innerWidth < 830) {
                $("#tbody-vpt").append(
                  "<tr><td><img src='php/" +
                    fetch_teachers[i]["profile_pic_address"] +
                    "' class='people-pic img-fluid'></td><td>" +
                    fetch_teachers[i]["username"] +
                    "</td><td>" +
                    '<i class="material-icons">person</i>' +
                    "</td><td><button id='account_id_" +
                    fetch_teachers[i]["user_id"] +
                    "' onclick='show_account(this.id)'>VIEW<button></td></tr>"
                );
              }
            }
          }
          for (i in fetch_students) {
            if (
              filtered_email_students[i].includes(
                document.getElementById("find-email").value
              )
            ) {
              if (window.innerWidth > 829) {
                $("#tbody-vpt").append(
                  "<tr><td><img src='php/" +
                    fetch_students[i]["profile_pic_address"] +
                    "' class='people-pic img-fluid'></td><td>" +
                    fetch_students[i]["username"] +
                    "</td><td>" +
                    '<i class="material-icons">school</i>' +
                    "</td><td>" +
                    fetch_students[i]["email"] +
                    "</td><td>" +
                    fetch_students[i]["contact_number"] +
                    "</td><td><button id='account_id_" +
                    fetch_students[i]["user_id"] +
                    "' onclick='show_account(this.id)'>VIEW<button></td></tr>"
                );
              } else if (window.innerWidth < 830) {
                $("#tbody-vpt").append(
                  "<tr><td><img src='php/" +
                    fetch_students[i]["profile_pic_address"] +
                    "' class='people-pic img-fluid'></td><td>" +
                    fetch_students[i]["username"] +
                    "</td><td>" +
                    '<i class="material-icons">school</i>' +
                    "</td><td><button id='account_id_" +
                    fetch_students[i]["user_id"] +
                    "' onclick='show_account(this.id)'>VIEW<button></td></tr>"
                );
              }
            }
          }
        }
      );
    }
  );
});

$("#find-username").on("keyup", function () {
  $.post(
    "php/zerver_page_admin_search_teacher_username.php",
    { search_username: document.getElementById("find-username").value },
    function (data) {
      fetch_teachers = JSON.parse(data);
      $.post(
        "php/zerver_page_admin_search_student_username.php",
        { search_username: document.getElementById("find-username").value },
        function (data) {
          // alert(data);
          fetch_students = JSON.parse(data);
          $("#tbody-vpt").empty();
          for (i in fetch_teachers) {
            if (window.innerWidth > 829) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_teachers[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_teachers[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">person</i>' +
                  "</td><td>" +
                  fetch_teachers[i]["email"] +
                  "</td><td>" +
                  fetch_teachers[i]["contact_number"] +
                  "</td><td><button id='account_id_" +
                  fetch_teachers[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            } else if (window.innerWidth < 830) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_teachers[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_teachers[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">person</i>' +
                  "</td><td><button id='account_id_" +
                  fetch_teachers[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            }
          }
          for (i in fetch_students) {
            if (window.innerWidth > 829) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_students[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_students[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">school</i>' +
                  "</td><td>" +
                  fetch_students[i]["email"] +
                  "</td><td>" +
                  fetch_students[i]["contact_number"] +
                  "</td><td><button id='account_id_" +
                  fetch_students[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            } else if (window.innerWidth < 830) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_students[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_students[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">school</i>' +
                  "</td><td><button id='account_id_" +
                  fetch_students[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            }
          }
        }
      );
    }
  );
});

$("#find-tel").on("keyup", function () {
  $.post(
    "php/zerver_page_admin_search_teacher_contactnum.php",
    { search_num: document.getElementById("find-tel").value },
    function (data) {
      fetch_teachers = JSON.parse(data);
      $.post(
        "php/zerver_page_admin_search_student_contactnum.php",
        { search_num: document.getElementById("find-tel").value },
        function (data) {
          fetch_students = JSON.parse(data);
          $("#tbody-vpt").empty();
          for (i in fetch_teachers) {
            if (window.innerWidth > 829) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_teachers[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_teachers[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">person</i>' +
                  "</td><td>" +
                  fetch_teachers[i]["email"] +
                  "</td><td>" +
                  fetch_teachers[i]["contact_number"] +
                  "</td><td><button id='account_id_" +
                  fetch_teachers[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            } else if (window.innerWidth < 830) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_teachers[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_teachers[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">person</i>' +
                  "</td><td><button id='account_id_" +
                  fetch_teachers[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            }
          }
          for (i in fetch_students) {
            if (window.innerWidth > 829) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_students[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_students[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">school</i>' +
                  "</td><td>" +
                  fetch_students[i]["email"] +
                  "</td><td>" +
                  fetch_students[i]["contact_number"] +
                  "</td><td><button id='account_id_" +
                  fetch_students[i]["user_id"] +
                  "' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            } else if (window.innerWidth < 830) {
              $("#tbody-vpt").append(
                "<tr><td><img src='php/" +
                  fetch_students[i]["profile_pic_address"] +
                  "' class='people-pic img-fluid'></td><td>" +
                  fetch_students[i]["username"] +
                  "</td><td>" +
                  '<i class="material-icons">school</i>' +
                  "</td><td><button id='account_id_" +
                  fetch_students[i]["user_id"] +
                  "' onclick='show_account(this.id)' onclick='show_account(this.id)'>VIEW</button></td></tr>"
              );
            }
          }
        }
      );
    }
  );
});

$("#find-q-username").on("keyup", function () {
  $.post(
    "php/zerver_page_admin_search_qanda_username.php",
    {
      search_username_q: document.getElementById("find-q-username").value,
    },
    function (data) {
      fetch_questions = JSON.parse(data);
      $("#tbody-qanda").empty();

      if (window.innerWidth > 829) {
        for (i in fetch_questions) {
          $("#tbody-qanda").append(
            "<tr><td><img src='php/" +
              fetch_questions[i]["profile_pic_address"] +
              "' class='people-pic img-fluid'></td><td>" +
              fetch_questions[i]["question"] +
              "</td><td>" +
              fetch_questions[i]["time_of_issue"] +
              "</td><td>" +
              fetch_questions[i]["due_date"] +
              "</td><td><button id='teacher_question_" +
              fetch_questions[i]["question_id"] +
              "'>VIEW</button></td></tr>"
          );
        }
      } else if (window.innerWidth < 830) {
        for (i in fetch_questions) {
          $("#tbody-qanda").append(
            "<tr><td><img src='php/" +
              fetch_questions[i]["profile_pic_address"] +
              "' class='people-pic img-fluid'></td><td>" +
              fetch_questions[i]["question"] +
              "</td><td><button id='teacher_question_" +
              fetch_questions[i]["question_id"] +
              "'>VIEW</button></td></tr>"
          );
        }
      }
    }
  );
});

$("#find-question").on("keyup", function () {
  $.post(
    "php/zerver_page_admin_search_qanda_question.php",
    {
      search_question: document.getElementById("find-question").value,
    },
    function (data) {
      fetch_questions = JSON.parse(data);
      $("#tbody-qanda").empty();

      if (window.innerWidth > 829) {
        for (i in fetch_questions) {
          $("#tbody-qanda").append(
            "<tr><td><img src='php/" +
              fetch_questions[i]["profile_pic_address"] +
              "' class='people-pic img-fluid'></td><td>" +
              fetch_questions[i]["question"] +
              "</td><td>" +
              fetch_questions[i]["time_of_issue"] +
              "</td><td>" +
              fetch_questions[i]["due_date"] +
              "</td><td><button id='teacher_question_" +
              fetch_questions[i]["question_id"] +
              "'>VIEW</button></td></tr>"
          );
        }
      } else if (window.innerWidth < 830) {
        for (i in fetch_questions) {
          $("#tbody-qanda").append(
            "<tr><td><img src='php/" +
              fetch_questions[i]["profile_pic_address"] +
              "' class='people-pic img-fluid'></td><td>" +
              fetch_questions[i]["question"] +
              "</td><td><button id='teacher_question_" +
              fetch_questions[i]["question_id"] +
              "'>VIEW</button></td></tr>"
          );
        }
      }
    }
  );
});

function show_account(input) {
  on();
  input = input.replace("account_id_", "");
  document.getElementById("acc-view-modal").style.display = "flex";
  x = 0;
  holdx = 0;
  halter = 0;
  while (x < fetch_teachers.length && input != fetch_teachers[x]["user_id"]) {
    x++;
  }
  if (x < fetch_teachers.length && halter == 0) {
    halter = 1;
    // alert(fetch_teachers[x]["user_id"] + " == " + input);
    holdx += x;
  }
  x = 0;
  while (
    x < fetch_students.length &&
    input != fetch_students[x]["user_id"] &&
    halter == 0
  ) {
    x++;
  }
  if (x < fetch_students.length && halter == 0) {
    halter = 2;
    // alert(fetch_students[x]["user_id"] + " == " + input);
    holdx += x;
  }
  if (halter == 1) {
    document.getElementById("account-focus").src =
      "php/" + fetch_teachers[holdx]["profile_pic_address"];
    document.getElementById("acc-view-title").innerHTML =
      fetch_teachers[holdx]["username"];
    document.getElementById("acc-email").innerHTML =
      "Email: <br> " + fetch_teachers[holdx]["email"];
    document.getElementById("acc-contact-num").innerHTML =
      "Contact Number: <br> " + fetch_teachers[holdx]["contact_number"];
    document.getElementById("acc-role").innerHTML = "Role: <br> Teacher";
  } else if (halter == 2) {
    document.getElementById("account-focus").src =
      "php/" + fetch_students[holdx]["profile_pic_address"];
    document.getElementById("acc-view-title").innerHTML =
      fetch_students[x]["username"];
    document.getElementById("acc-email").innerHTML =
      "Email: <br> " + fetch_students[holdx]["email"];
    document.getElementById("acc-contact-num").innerHTML =
      "Contact Number: <br> " + fetch_students[holdx]["contact_number"];
    document.getElementById("acc-role").innerHTML = "Role: <br> Student";
  }
}

$(window).resize(function () {
  page_start();
});

$(document).ready(function () {
  page_fetch_data();
});

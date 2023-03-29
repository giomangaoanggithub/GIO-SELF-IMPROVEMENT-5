upload_img_width = "";
upload_img_height = "";

$(function () {
  $("#fileToUpload").change(function (event) {
    var x = URL.createObjectURL(event.target.files[0]);
    $("#upload-img").attr("src", x);
    console.log(event);
    const img = new Image();
    img.onload = function () {
      upload_img_width = this.width;
      upload_img_height = this.height;
    };
    img.src = document.getElementById("upload-img").src;
  });
});

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

function sign_up_now() {
  document.getElementById("sign-up-modal").style.display = "flex";
}

function sel_role_input(input) {
  if (input == "administrator") {
    document.getElementById("teacher").style.scale = "1";
    document.getElementById("student").style.scale = "1";
    document.getElementById("teacher").style.backgroundColor = "#379683";
    document.getElementById("student").style.backgroundColor = "#379683";
    document.getElementById("role-output").innerHTML = "role: Administrator";
    sel_role = input;
  } else if (input == "teacher") {
    document.getElementById("administrator").style.scale = "1";
    document.getElementById("student").style.scale = "1";
    document.getElementById("administrator").style.backgroundColor = "#379683";
    document.getElementById("student").style.backgroundColor = "#379683";
    document.getElementById("role-output").innerHTML = "role: Teacher";
    sel_role = input;
  } else if (input == "student") {
    document.getElementById("teacher").style.scale = "1";
    document.getElementById("administrator").style.scale = "1";
    document.getElementById("teacher").style.backgroundColor = "#379683";
    document.getElementById("administrator").style.backgroundColor = "#379683";
    document.getElementById("role-output").innerHTML = "role: Student";
    sel_role = input;
  }
  document.getElementById(input).style.scale = "1.5";
  document.getElementById(input).style.backgroundColor = "#296e61";
  //   alert(sel_role);
}

document.getElementById("teacher").style.scale = "1.5";
document.getElementById("teacher").style.backgroundColor = "#296e61";
//################################################
//################################################

// PUBLIC VARIABLE

var sel_role = "teacher";

function profile_pic_upload(input1) {
  var file_data = $("#fileToUpload").prop("files")[0]; //Fetch the file
  var form_data = new FormData();
  // alert(file_data);
  form_data.append("file", file_data);
  form_data.append("filename", input1);
  //Ajax to send file to upload
  $.ajax({
    url: "php/zerver_profile_pics_upload.php", //Server api to receive the file
    type: "POST",
    dataType: "script",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    success: function (dat2) {
      if (dat2 == 1) {
        return "1";
      } else {
        return "0";
      }
    },
  });
}

$("#login-cred").click(function () {
  input1 = document.getElementById("login-email-input").value;
  input2 = document.getElementById("login-password-input").value;
  if (input1 == "" || input2 == "") {
    alert("Please fill out all inputs to LOGIN...");
    return;
  }
  $.post(
    "php/zerver_page_sign-in-up_check-login.php",
    {
      email: input1,
      password: input2,
    },
    function (data) {
      if (data == '["' + input1 + '"]') {
        alert("WELCOME BACK USER");
        $.post(
          "php/zerver_page_sign-in-up_role.php",
          {
            email: input1,
          },
          function (data) {
            if (data == '["2"]') {
              window.location.href = "page_admin.php";
            } else if (data == '["1"]') {
              window.location.href = "page_teacher.php";
            } else {
              window.location.href = "page_student.php";
            }
          }
        );
      } else {
        alert("INCORRECT EMAIL OR PASSWORD");
      }
    }
  );
});

$("#register-cred").click(function () {
  // CHECK INPUTS ----------------------

  var input1 = document.getElementById("email-input").value;
  var input2 = document.getElementById("username-input").value;
  var input3 = document.getElementById("password-input").value;
  var input4 = document.getElementById("cpassword-input").value;
  var input5 = document.getElementById("contact-number-input").value;
  var selected_role = sel_role;

  if (input1 == "") {
    alert("Please insert your email");
    return;
  }
  // CHECK CORRECTNESS OF EMAIL ---------------------------
  if (
    input1.includes(".") == false ||
    input1.includes("@") == false ||
    input1[0] == "@" ||
    input1.length < 9 ||
    input1.includes(" ") == true
  ) {
    alert("Example: dummy123@email.com");
    return;
  }

  if (input2 == "") {
    alert("Please insert your username");
    return;
  }
  // CHECK CORRECTNESS OF USERNAME --------------------------------
  swear_words_arr = [
    "fuck",
    "shit",
    "piss",
    "dickhead",
    "ass",
    "asshole",
    "bitch",
    "bastard",
    "damn",
    "cunt",
    "bollocks",
    "bugger",
    "bloody hell",
    "choad",
    "wanker",
    "shag",
    "twat",
  ];
  username_arr = input2.split(/[ _-]+/);
  for (e = 0; e < username_arr.length; e++) {
    for (i = 0; i < swear_words_arr.length; i++) {
      if (username_arr[e].toLowerCase() == swear_words_arr[i]) {
        alert("Please don't use swear words... >:(");
        return;
      }
    }
  }

  if (input3 == "") {
    alert("Please insert your password");
    return;
  }
  // CHECK CORRECTNESS OF PASSWORD ---------------------------------
  password_req = "";
  if (input3.length < 8) {
    password_req += "Your password must be atleast 8 characters long...\n";
  }
  function checkCase(character) {
    if (!isNaN(character * 1)) {
      return "numeric";
    } else {
      if (character == character.toUpperCase()) {
        return "uppercase";
      }
      if (character == character.toLowerCase()) {
        return "lowercase";
      }
    }
  }
  detect_numeric = 0;
  detect_uppercase = 0;
  detect_lowercase = 0;
  for (i = 0; i < input3.length; i++) {
    if (checkCase(input3[i]) == "numeric") {
      detect_numeric++;
    } else if (checkCase(input3[i]) == "uppercase") {
      detect_uppercase++;
    } else if (checkCase(input3[i]) == "lowercase") {
      detect_lowercase++;
    }
  }
  if (detect_numeric == 0) {
    password_req += "Your password must have atleast one digit number...\n";
  }
  if (detect_uppercase == 0) {
    password_req += "Your password must atleast have one uppercase letter...\n";
  }
  if (detect_lowercase == 0) {
    password_req += "Your password must atleast have one lowercase letter...\n";
  }
  if (password_req != "") {
    alert(password_req);
    return;
  }
  if (input4 == "") {
    alert("Please insert your confirm password");
    return;
  }
  if (input3 != input4) {
    alert("Your confirm password is not the same as your inputted password.");
    return;
  }

  if (input5 == "") {
    alert("Please insert your contact number");
    return;
  }
  // CHECK CORRECTNESS OF CELLPHONE NUMBER ------------------------------------
  if (input5[0] != 0 || input5.length < 11) {
    alert("Please input your cellphone number correctly.");
    return;
  }

  // CHECK FOR IMAGE UPLOAD

  if (document.getElementById("fileToUpload").files.length == 0) {
    alert("REQUIRED profile picture...");
    return;
  }
  if (Math.abs(upload_img_width - upload_img_height) > 30) {
    alert("Please upload a square image...");
    return;
  }

  // CHECK FOR EXISTING EMAIL
  $.post(
    "php/zerver_page_sign-in-up_fetch-email.php",
    {
      email: input1,
    },
    function (data, status) {
      // alert("Data: " + data + "\nStatus: " + status);
      if (data != '[""]' && status == "success") {
        alert(
          "Apologies, you have inserted an existing email in this website."
        );
        return;
      } else if (data == '[""]' && status == "success") {
        // alert("Proceeding ACCOUNT INSERTION");
        // alert(
        //   input1 +
        //     "\n" +
        //     input2 +
        //     "\n" +
        //     input3 +
        //     "\n" +
        //     input5 +
        //     "\n" +
        //     selected_role
        // );

        profile_pic_upload(input1);

        // alert(document.getElementById("fileToUpload").value);
        x = document.getElementById("fileToUpload").value.length;
        // alert(x);
        while (document.getElementById("fileToUpload").value[x] != ".") {
          x--;
        }
        file = "";
        while (x < document.getElementById("fileToUpload").value.length) {
          file += document.getElementById("fileToUpload").value[x];
          x++;
        }
        // alert(file);
        $.post(
          "php/zerver_page_sign-in-up_insert-email.php",
          {
            email: input1,
            username: input2,
            password: input3,
            contact_number: input5,
            user_role: selected_role,
            filetype: file,
          },
          function (data) {
            if (data == "student") {
              window.location.href = "page_student.php";
            } else if (data == "teacher") {
              window.location.href = "page_teacher.php";
            } else if (data == "administrator") {
              window.location.href = "page_admin.php";
            }
          }
        );
      }
    }
  );
});

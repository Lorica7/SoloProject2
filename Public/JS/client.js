
//Saving Client and Saving Clothes
$(document).ready(function () {

  $("#createUser").on("click", function (event) {
    event.preventDefault();

    var newUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      type: $("#type").val().trim()
    };

    $.post("/api/register", newUser)

      .then(function (data) {
        console.log(newUser);
        console.log(data);
      });

    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");

    $("#type").val("");

    ;


    $("#updateUser").on("click", function (event) {
      event.preventDefault();
      console.log("Hi, listener works")


      var updateUser = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        email: $("#email").val().trim(),
        passwordNew: $("#passwordNew").val().trim(),
        passwordOld: $("#passwordOld").val().trim(),
        size: $("#size").val(),
        type: $("#type").val()
      };


      var updateFunc = (updateUser) => {
        $.ajax({
          method: "PUT",
          url: "/api/update",
          data: updateUser
        }).then(console.log(updateUser));
      }

      updateFunc(updateUser);

      $("#firstName").val("");
      $("#lastName").val("");
      $("#email").val("");
      $("#passwordNew").val("");
      $("#passwordOld").val("");
      $("#passwordConf").val("");
      $("#size").val("");
      $("#type").val("");

    })
  })

  $("#signIn").on("click", function(event) {
    event.preventDefault();
  console.log("Listening")
    let signersIn = {
      email: $("#emailSign").val().trim(),
      password: $("#passSign").val().trim(),
    };
    $.post("/api/login", signersIn)
      .then(function(data) {
       console.log(signersIn);
        console.log(data);
      });
  
    $("#emailSign").val("");
    $("#passwordSign").val("");
    res.redirect('/search')
});





});
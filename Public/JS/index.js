$(document).ready(function () {

    ///// Sign - in just gathers email records. It DOES not verify username and passwords. It currently does
    ///// not start sessions or play any role in route protection. 

    $("#signersIn").on("click", function (event) {
        event.preventDefault();
        console.log("Listening")

        let signersIn = {
            email: $("#emailSign").val().trim(),
            password: $("#passSign").val().trim(),
        };

        var getEmail = (data) => {
            $.ajax({
                method: "POST",
                url: "/api/user/:email",
                data: signersIn
            }).then(function (res) {
                console.log(res)
                const msgS = $("<h5 class=groupItems>").text("You successfully signed in.")
                $("#signArea").append(msgS)
               window.location.href = "/search";
            }).catch((error) => {
                console.log(error);
                const msgF = $("<h5 class=groupItems>").text("Your email or password is incorrect.")
                $("#signArea").append(msgF)
            });
           
            $("#emailSign").val("");
            $("#passSign").val("");
        };
        getEmail(signersIn);
        return signersIn
    });

    $("#retrieveRes").on("click", (event) => {

        event.preventDefault();
        console.log("Listener Works")

        var getRes = () => {
            $.ajax({
                method: "POST",
                url: "/api/user/:email",
                data: signersIn
            }).then(function (res) {
                console.log(res)
                window.location.href = "/search";
                //res.render ???
            }).catch((error) => {
                console.log(error);
                const msg = $("<h5 class=groupItems>").text("Your email or password is incorrect")
                $("#signArea").append(msg)
            });
            getRes(signersIn);
        }
    })
})

let searchGarments = require("../../Controllers/utils/API")
let websearch = require("../../Controllers/utils/API")
// Contextual Web
$(document).ready(function () {

    // $.ajax({
    //     url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=petite+pants&count=25&autocorrect=false",
    //     headers: { "X-RapidAPI-Key": apikey },
    //     method: "GET"
    // })
    //     .then(function (response, err) {
    //         console.log(response);
    //     })

    // Google Custom Search


    $("#search").on("click", function (event) {
        event.preventDefault();
        console.log("Listener Works")

        let allParams = {
            params: $('#garmentSearch').val(),
            params2: $('#sizeSearch').val(),
            params3: $('#colorSearch').val()
        }

        searchGarments(allParams)

            .then((response) =>{
                var results = response.data;
                console.log(results)
                // for (var i = 0; i < results.length; i++) {


                //     var heroes = $("<div class=\"Hero-items\">");
                //     var heroImages = $("<img>").attr("src", response.hero[i].image)
                //     var heroName = $("<h1>").text(response.hero[i].name);

                //     $("#hero-div").append(heroes, heroImages, heroName);
                // }
            });
    })


});
   



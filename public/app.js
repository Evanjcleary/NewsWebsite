

var viewNews = function() {
    location.assign("/news")
}

var newArticleScrape = function() {
    console.log("Getting new articles...")
    $.ajax({
        method: "GET",
        url: "/scrape"
    })
        .then(function(data){
            console.log(data);
            // location.reload();
        })
}


$(document).on("click", "p", function() {
    console.log("clicked to make a comment")

    var thisId = $(this).attr("data-id");
    console.log(thisId);

    // $.ajax({
    //     method: "GET",
    //     url: "/articles/" + thisId
    // })
    // .then(function(data) {

    // })

})



$(document).on("submit", "#comment-form", function(data){
    event.preventDefault();
    // console.log(event);
    console.log(data)
    console.log("click")
    console.log($(this).val())
    console.log($(this).username)
})

$(document).on("click", "#delete-comment", function(event){
    console.log("you've clicked the delete button")
    console.log($(this).val())
    thisId = $(this).val()


    $.ajax({
        method: "PUT",
        url: "/comment/delete/" + thisId 
    })
        .then(function(data) {

            // console.log(data);
            location.reload();
        })
})

$("#delete-comment").on("click", function(event) {
    event.preventDefault();
    console.log("click")
})

// Write your code here!
var announcements = $("div.announcement");

announcements.each(function() {

    var x = $("<button>close</button>");
    var currentDiv = $(this);

    $(this).append(x);

    x.on("click", function() {

        var $button = $(this);

        if ($button.text() === "close") {

            currentDiv.find("p").hide();
            $button.text("Show announcement");
        }
        else {
            currentDiv.find("p").show();
            $button.text("close");
        }
    });
});
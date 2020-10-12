$("#btnExtend1").click(function() {
    if ($("#detail-fulltext1").css("display") == "block") {
        $("#detail-shorttext1").css("display", "block");
        $("#detail-fulltext1").css("display", "none");
        $("#btnExtend1").html('View more <span class="greater">></span>');
    } else {
        $("#detail-shorttext1").css("display", "none");
        $("#detail-fulltext1").css("display", "block");
        $("#btnExtend1").html('View less <span class="greater">></span>');
    }
})

$("#btnExtend2").click(function() {
    if ($("#detail-fulltext2").css("display") == "block") {
        $("#detail-shorttext2").css("display", "block");
        $("#detail-fulltext2").css("display", "none");
        $("#btnExtend2").html('View more <span class="greater">></span>');
    } else {
        $("#detail-shorttext2").css("display", "none");
        $("#detail-fulltext2").css("display", "block");
        $("#btnExtend2").html('View less <span class="greater">></span>');
    }
})
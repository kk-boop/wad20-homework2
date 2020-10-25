const toggleDropdown = function() {
    $(".dropdown-content").addClass("dropdown-visible");
    $(".click-out").show()
    console.log("bss")
};
$(".click-out").click(function() {
    $(".click-out").hide()
    $(".dropdown-content").removeClass("dropdown-visible");
})
$(".click-out").hide();
$(".dropdown").click(toggleDropdown);

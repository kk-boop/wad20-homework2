$.get("https://private-anon-4dd301a5cd-wad20postit.apiary-mock.com/profiles", function (data) {

    console.log(data)
    for(const noku of data){
        const post = $("#profile-template").clone();
        post.attr("id", "")

        const avatar = post.find(".avatar")
        avatar.find("img").attr("src", noku.avatar)

        const name = post.find(".man-name")
        name.find("h3").text(noku.firstname + noku.lastname)

        const button = post.find("button")

        button.click(function() {
            if (button.text() === "Follow") {
                button.text("Followed")
                button.addClass("Subscribed")
            }else {
                button.text("Follow")
                button.removeClass("Subscribed")
            }
        })

        post.appendTo(".main-container-profiles")
    }
});

$.get("https://private-anon-a454d25152-wad20postit.apiary-mock.com/users/1", function(data) {
    console.log(data)
    const {firstname, lastname, email, avatar} = data;
    $("#full-name").text(`${firstname} ${lastname}`);
    $("#email").text(email);
    $(".avatar").attr('src', avatar);
});
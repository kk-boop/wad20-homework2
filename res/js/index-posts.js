$.get("https://private-anon-a080ab24c0-wad20postit.apiary-mock.com/posts", function (data) {
    console.log(data)

    for (const {id, author, createTime, text, media, likes} of data) {
        const post = $("#post-template").clone();
        post.attr('id', "")

        const {firstname, lastname, avatar} = author
        if (media) {
            const {type, url} = media
        }

        //Post time
        const authorDiv = post.find('.post-author');
        authorDiv.find('small').text(createTime)

        //Author name & avatar
        const authorInfo = authorDiv.find('.post-author-info');
        authorInfo.find('img').attr('src', avatar);
        authorInfo.find('small').text(`${firstname} ${lastname}`)

        //Post content
        const postDiv = post.find('.post-image');
        if (media) {
            const {type, url} = media
            if (type === 'video') {
                postDiv.find('img').hide()
                postDiv.append(`<video controls> <source src='${url}' </video>`)
            } else {
                postDiv.find('img').attr('src', url);
            }
        } else {
            postDiv.find('img').hide()
        }

        //Post title
        const titleDiv = post.find('.post-title');
        titleDiv.find('h3').text(text);

        //Like button
        const actionsDiv = post.find('.post-actions');
        const likeButton = actionsDiv.find('button');
        likeButton.text(likes)
        likeButton.click(function () {
            likeButton.toggleClass('liked')
        })

        post.appendTo(".main-container")

    }
});
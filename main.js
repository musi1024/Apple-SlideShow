$('li').on('click', function(e){
    let photoIndex = $(e.currentTarget).index()
    console.log(photoIndex)
    $('.mainPhoto').css({
        transform: 'translate(-'+ (photoIndex - 1) * 920 + 'px)'
    })
})


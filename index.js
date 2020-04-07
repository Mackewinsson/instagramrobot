let likesGiven = 0;

setInterval(() => {

	let heart = document.querySelector('div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
    let arrow = document.querySelector('.coreSpriteRightPaginationArrow');

	if (heart) {
        likesGiven++;
        heart.click();
    }
    arrow.click();
    
    console.log(`You've liked ${likesGiven} post(s)!`);
    
}, 10000);
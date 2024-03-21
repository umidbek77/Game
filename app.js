const playBtn = document.querySelector('.play-btn'),
    firstPlayer = document.querySelector('.first-player'),
    secondPlayer = document.querySelector('.second-player'),
    img = document.querySelector('.game-img'),
    imgSecond = document.querySelector('.game-img-second');


function getRandomNUmber() {
    return Math.round(Math.random() * (3 - 1) + 1);
}



function checkRandomNumber(randomNumber, img, player) {
    switch (randomNumber) {
        case 1:
            img.setAttribute('src', './img/photo_2024-01-18_13-41-45.jpg');

            break;
        case 2:
            img.setAttribute('src', './img/photo_2024-01-18_13-41-55.jpg');
            player.append(img);
            break;
        case 3:
            img.setAttribute('src', './img/photo_2024-01-18_13-42-07.jpg');
            player.append(img);
            break;
        default:
            break;
    }
}



playBtn.addEventListener('click', () => {
    checkRandomNumber(getRandomNUmber(), img, firstPlayer);
    checkRandomNumber(getRandomNUmber(), imgSecond, secondPlayer);
});
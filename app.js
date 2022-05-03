const section = document.querySelector('section');
const playerLivesCounter = document.querySelector('.playerLivesCounter');
const playerPointsCounter = document.querySelector('.playerPointsCounter');
 let playerLives = 10;
 let playerPoints = 0;

playerLivesCounter.textContent = playerLives;
playerPointsCounter.textContent = playerPoints;

const getData = () => [
    {imgSrc: "./images/beatles.jpeg", name: 'beatles'},
    {imgSrc: "./images/blink182.jpeg", name: 'blink 182'},
    {imgSrc: "./images/fkatwigs.jpeg", name: 'fka twigs'},
    {imgSrc: "./images/fleetwood.jpeg", name: 'fleetwood'},
    {imgSrc: "./images/joy-division.jpeg", name: 'joy division'},
    {imgSrc: "./images/ledzep.jpeg", name: 'led zeppelin'},
    {imgSrc: "./images/metallica.jpeg", name: 'metallica'},
    {imgSrc: "./images/pinkfloyd.jpeg", name: 'pink floyd'},
    {imgSrc: "./images/beatles.jpeg", name: 'beatles'},
    {imgSrc: "./images/blink182.jpeg", name: 'blink 182'},
    {imgSrc: "./images/fkatwigs.jpeg", name: 'fka twigs'},
    {imgSrc: "./images/fleetwood.jpeg", name: 'fleetwood'},
    {imgSrc: "./images/joy-division.jpeg", name: 'joy division'},
    {imgSrc: "./images/ledzep.jpeg", name: 'led zeppelin'},
    {imgSrc: "./images/metallica.jpeg", name: 'metallica'},
    {imgSrc: "./images/pinkfloyd.jpeg", name: 'pink floyd'},
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - .5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imgSrc;
        card.setAttribute('data-name', item.name)

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) =>{
            card.classList.toggle('toggle-card');
            
            checkCards(e);

          
        })
    })

}

const checkCards = (e) =>{
    const clickedCard = e.target;
    console.log(clickedCard);
    e.target.classList.add('flipped');
    const  flippedCards = document.querySelectorAll('.flipped');

    if(flippedCards.length === 2){    

        if(flippedCards[0].getAttribute('data-name') === flippedCards[1].getAttribute('data-name')){
            console.log('match');
            playerPoints++;
            playerPointsCounter.textContent = playerPoints;
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })

            if (playerPoints === 8){
                console.log('you won')
            }
        } else{
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggle-card'), 1500);
            })


            playerLives--;
            playerLivesCounter.textContent = playerLives;

            if (playerLives === 0){
                setTimeout(restart, 4000)
            }
        }
    }

};

const restart = () => {
    document.location.reload(true);
    playerLives = 6;
    playerLivesCounter.textContent = playerLives;

   
    
}

cardGenerator();
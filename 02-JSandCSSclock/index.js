const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) +  ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hrs = now .getHours();
    const hrsDegrees = ((hrs / 12) * 360) + ((mins / 60) * 30) + 90;
    hrHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
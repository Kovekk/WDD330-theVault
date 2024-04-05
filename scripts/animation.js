async function animate() {
    const cards = document.querySelectorAll(".vaultCard");
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.top = "0px";
        cards[i].style.opacity = "1.0";
        await delay(200);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

animate();
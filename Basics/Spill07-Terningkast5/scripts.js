const button = document.querySelector("button");
const meldingTilSpillere = document.querySelector(".meldingTilSpillere");
const spiller1 = document.querySelector("#spiller1");
const spiller2 = document.querySelector("#spiller2");
const terningSymboler = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];
button.addEventListener("click", function () {
    let kast = [terningKast(6), terningKast(6)];
    let melding;

    if (kast[0] == kast[1]) {
        melding = "lik terningkast, dermed uavgjort :-)"
    } else if (kast[0] > kast[1]) {
        melding = "Spiller 1 vinner!  "
    } else {
        melding = "Spiller 2 vinner!  "
    }
    oppdatereMelding(spiller1, kast[0]);
    oppdatereMelding(spiller2, kast[1]);
    meldingTilSpillere.innerHTML = melding;


})

function oppdatereMelding(el, num) {
    let huskeKast = bygger(num);
    if (el.children[0]) {
        el.children[0].remove();
    }
    el.appendChild(huskeKast);

}

function bygger(num) {
    let div = document.createElement("div");
    let terninger = terningSymboler[num - 1];
    console.log(terninger);
    for (x = 1; x < 10; x++) {
        let span = document.createElement("div");
        span.setAttribute("class", "dot");
        if (terninger.includes(x)) {
            span.classList.add("black");
        }
        div.appendChild(span);

    }
    div.setAttribute("class", "terning");
    return div;


}

function terningKast(num) {
    let terning = Math.floor(Math.random() * num) + 1;
    return terning;


}

const spillFarger = ["red", "green", "blue", "yellow"];
const melding = document.querySelector(".melding");
const spillerom = document.querySelector(".spillerom");
const button = document.querySelector("button");

let spillKlikker = [];
let brukerKlikker = [];
let iSpill = false;
let spillNum = 2;

button.addEventListener("click", function () {
//            console.log("dette virker så langt!");
    if (!iSpill) {
        spiller();
    }

})

window.addEventListener("load", oppsett);

function spiller() {
    button.disabled = true;
    button.style.display = "none";
    meldingTilSpillere("Vinn ved å matche mønsteret du ble visst!");
    spillKlikker = [];
    brukerKlikker = [];
    kjoreSekvens(spillNum);

}

function kjoreSekvens(num) {
    let kvadrat = document.querySelectorAll(".boks");
    num--;
    if (num < 0) {
        iSpill = true;
        return;
    }
    let tilfelldigNum = Math.floor(Math.random() *
        spillFarger.length);
//    console.log(kvadrat[tilfelldigNum]);
    spillKlikker.push(spillFarger[tilfelldigNum]);
    console.log(spillKlikker);
    kvadrat[tilfelldigNum].style.opacity = "1";
    setTimeout(function () {
        kvadrat[tilfelldigNum].style.opacity = "0.5";
        setTimeout(function () {
            kjoreSekvens(num);
        }, 100);

    }, 500);
}

function oppsett() {
    console.log("siden er lastet!");
    for (let x = 0; x < 4; x++) {
        let div = elementFabrikk("div");
        div.style.background = spillFarger[x];
        div.classList.add("boks");
        div.style.opacity = "0.5";
        div.minFarge = spillFarger[x];
        div.addEventListener("click", sjekkeSvar);
        spillerom.appendChild(div);
    }
}

function sjekkeSvar(e) {
    if (iSpill) {
        let element = e.target;
        console.log(element.minFarge);
        brukerKlikker.push(element.minFarge);
        element.style.opacity = "1";
        setTimeout(function () {
            element.style.opacity = "0.5";
        }, 500);
        if (brukerKlikker.length == spillKlikker.length) {
            iSpill = false;
            avslutteSpill();
        }

    }

//    console.log(brukerKlikker);
}

function meldingTilSpillere(meld) {
    melding.innerHTML = meld;


}

function avslutteSpill() {
    console.log("Spillet avsluttes!");
    button.disabled = false;
    button.style.display = "block";
    if (brukerKlikker.toString() == spillKlikker.toString()) {
        spillNum++;
        meldingTilSpillere("Hurra, du vant og kan prøve en litt vanskeligere mønster ?");
//        console.log(meldingTilSpillere.innerHTML);
    } else {
        meldingTilSpillere("Ikke samme mønster som vist av datamaskin, prøve igjen ?");
//        console.log(meldingTilSpillere.innerHTML);

    }
//    spillNum = 2;

}

function elementFabrikk(elementType) {
    let element = document.createElement(elementType);
    return element;
}


const Melding = document.querySelector(".Melding");
const Poeng = document.querySelector(".Poeng");
const Knapper = document.querySelectorAll("button");
// Array holder statistik om hvem som vant -  først Spiller, andre datamaskin og tredje uavgjort
let Statistikk = [0, 0, 0];
console.log(Knapper);

// "click" skrives på engelsk ettersom den er type event altså element.addEventListener(event, function, useCapture)
for (let i = 0; i < Knapper.length; i++) {
    Knapper[i].addEventListener("click", spilleSpill);


}


//funskjon for skrive besjed


function skriveMelding(melding) {
    Melding.innerHTML = melding;
}


// funksjon for å spille spill og la Datamaskin ta sitt valg ved tilfelldighet altså ved e = click
function spilleSpill(e) {
    let SpillersValg = e.target.innerHTML;
    let DatamaskinsValg = Math.random();
    if (DatamaskinsValg < 0.34) {
        DatamaskinsValg = "Stein";
    } else if (DatamaskinsValg <= 0.67) {
        DatamaskinsValg = "Papir";
    } else {
        DatamaskinsValg = "Saks";
    }

    console.log(SpillersValg, DatamaskinsValg);

    let resultat = finneVinner(SpillersValg, DatamaskinsValg);

    if (resultat === "Spiller") {
        resultat += " vant!";
        Statistikk[0]++;

    } else if (resultat === "Datamaskin") {
        resultat += " vant!";
        Statistikk[1]++;

    } else if (resultat === "Uavgjort") {
        resultat = "Spillet er uavgjort";
        Statistikk[2]++;

    }

    console.log(resultat);


    //        skriveMelding(SpillersValg + " mot " + DatamaskinsValg + "<br><b>" + resultat + "</b>" + "<br><br>" + "Her følger statistikk over spillet så langt:" + "<br>");
    skriveMelding(SpillersValg + " mot " + DatamaskinsValg + "<br><b>" + resultat + "</b>" + "<br><br>" + "Her følger statistikk over spillet så langt:" + "<br>" + "Spiller - " + Statistikk[0] + "<br>" + " Datamaskin - " + Statistikk[1] + "<br>" + "Uavgjort - " + Statistikk[2]);

//            skriveMelding("Her følger statistikk over spillet så langt:" + "<br>")
//            skriveMelding("Spiller["+Statistikk[0]+"] Datamaskin["+Statistikk[1]+"] Uavgjort["+Statistikk[2]+"]" );

//            Poeng.innerHTML = "Spiller- " + Statistikk[0] + " , Datamaskin- " + Statistikk[1] + " , Uavgjort[" + Statistikk[2] + "";

}


// funksjon for å finne ut hvem som har vunnet "busiuness rules"
function finneVinner(Spiller, Datamaskin) {
    if (Spiller === Datamaskin) {
        return "Uavgjort";
    }
    if (Spiller === "Stein") {
        if (Datamaskin === "Papir") {
            return "Datamaskin";
        } else {
            return "Spiller";
        }
    }
    if (Spiller === "Papir") {
        if (Datamaskin === "Saks") {
            return "Datamaskin";
        } else {
            return "Spiller";
        }
    }
    if (Spiller === "Saks") {
        if (Datamaskin === "Stein") {
            return "Datamaskin";
        } else {
            return "Spiller";
        }
    }
}


// Hårdkodade variabler för användarnamn och lösenord:
var namn = "test";
var losenord = "1234";

// Få åtkomst till element:
let bodyE = document.getElementById("body-id");
let formE = document.getElementById("form-id");
let inpNamn = document.getElementById("namn-id");
let inpLosen = document.getElementById("losen-id");
let loginB = document.getElementById("loginb-id");

let foot = document.getElementById('foot');

// Spara inloggningsuppgifter i localStorage (click på knapp):
loginB.addEventListener('click', function() {
    let iNamn = inpNamn.value;
    let iLosen = inpLosen.value;

    if (iNamn && iLosen) {
        localStorage.setItem(iNamn, iLosen);
    }
});

// Hämtar data från localStorage:
    var one = localStorage.key(0);
    var two = localStorage.getItem(one);

/* Statement som kontrollerar inloggningsuppgifter 
    och modifierar sidan beroende på om inloggning lyckas
    eller inte */
if (one === namn && two === losenord) {
    manSidaOK();    // Funktion inloggning ok
}
else if (one !== namn && two === losenord) {
    manSidaEJOK();  //Funktion inloggning ej ok
}
else if (one === namn && two !== losenord) {
    manSidaEJOK();  //Funktion inloggning ej ok
}
else if (one && two && one !== namn && two !== losenord) {
    manSidaEJOK();  //Funktion inloggning ej ok
}

// Funktion som modifierar sidan om inloggning lyckas:
function manSidaOK() {
    bodyE.removeChild(formE);
    var paraE = document.createElement("p");
    paraE.innerHTML = "Välkommen! Du är inloggad.";
    bodyE.appendChild(paraE);
    bodyE.insertBefore(paraE, foot);

    bodyE.insertAdjacentHTML('beforeend', '<button id="log-outb">Logga ut</button>');
    let logoutb = document.getElementById("log-outb");
    bodyE.insertBefore(logoutb, foot);
}

// Funktion som modifierar sidan om inloggning misslyckas:
function manSidaEJOK() {
    bodyE.removeChild(formE);
    var paraE = document.createElement("p");
    paraE.innerHTML = "Felkod: Fel användarnamn eller lösenord.";
    bodyE.appendChild(paraE);
    bodyE.insertBefore(paraE, foot);

    bodyE.insertAdjacentHTML('beforeend', '<button id="re-turnb"><--Tillbaka</button>');
    let returnb = document.getElementById("re-turnb");
    bodyE.insertBefore(returnb, foot);
}

/* If-statement som kontrollerar vilken knapp som ska aktiveras
på de modifierade sidorna beroende på om inloggning lyckats eller misslyckats */
if (one === namn && two === losenord) {
    let logoutb = document.getElementById("log-outb");

    logoutb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
}
else if (one !== namn && two === losenord) {
    let returnb = document.getElementById("re-turnb");

    returnb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
}
else if (one === namn && two !== losenord) {
    let returnb = document.getElementById("re-turnb");

    returnb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
});
}
else if (one && two && one !== namn && two !== losenord) {
    let returnb = document.getElementById("re-turnb");

    returnb.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
});
}
/* ===================== Exercițiul 1 – Prima listă ===================== */
let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Lista:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Număr de elemente:", fructe.length);

/* ===================== Exercițiul 2 – Adaugă și elimină ===================== */
let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");      // adaugă la sfârșit
orase.unshift("Soroca");  // adaugă la început
orase.pop();              // elimină ultimul
orase.shift();            // elimină primul

console.log("Lista finală de orașe:", orase);

/* ===================== Exercițiile 3 și 4 – Lista de cumpărături ===================== */
let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaLista() {
  const zona = document.getElementById("lista");
  if (produse.length === 0) {
    zona.textContent = "Lista este goală!";
  } else {
    zona.textContent = produse.join(", ");
  }
}

function citesteProdus() {
  const camp = document.getElementById("produs");
  const valoare = camp.value.trim();
  camp.value = "";
  return valoare;
}

function adaugaSfarsit() {
  const p = citesteProdus();
  if (p === "") return;
  produse.push(p);
  afiseazaLista();
}

function adaugaInceput() {
  const p = citesteProdus();
  if (p === "") return;
  produse.unshift(p);
  afiseazaLista();
}

function stergePrimul() {
  produse.shift();
  afiseazaLista();
}

function stergeUltimul() {
  produse.pop();
  afiseazaLista();
}

/* ===================== Exercițiul 5 – Catalog electronic ===================== */
let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

// Afișează catalogul și numărul de elevi
function afiseazaElevi() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  document.getElementById("numar").textContent = "Număr de elevi: " + elevi.length;

  elevi.forEach(function (elev, index) {
    const div = document.createElement("div");
    div.className = "elev";

    const titlu = document.createElement("p");
    const bold = document.createElement("strong");
    bold.textContent = (index + 1) + ". " + elev.nume;
    titlu.appendChild(bold);

    const varsta = document.createElement("p");
    varsta.textContent = "Vârsta: " + elev.varsta;

    const nota = document.createElement("p");
    nota.textContent = "Nota: " + elev.nota;

    div.append(titlu, varsta, nota);
    catalog.appendChild(div);
  });
}

// Adaugă un elev nou
function adaugaElev() {
  const mesaj = document.getElementById("mesajAdauga");
  const nume = document.getElementById("nume").value.trim();
  const varsta = Number(document.getElementById("varsta").value);
  const nota = Number(document.getElementById("nota").value);

  if (nume === "" || !varsta || !nota) {
    mesaj.textContent = "Completează toate câmpurile!";
    return;
  }
  if (nota < 1 || nota > 10) {
    mesaj.textContent = "Nota trebuie să fie între 1 și 10!";
    return;
  }

  let elevNou = {
    nume: nume,
    varsta: varsta,
    nota: nota
  };

  elevi.push(elevNou);

  mesaj.textContent = "";
  document.getElementById("nume").value = "";
  document.getElementById("varsta").value = "";
  document.getElementById("nota").value = "";
  afiseazaElevi();
}

// Găsește un elev după nume (fără diferență între majuscule și minuscule)
function gasesteElev(nume) {
  const cautat = nume.trim().toLowerCase();
  return elevi.find(function (e) {
    return e.nume.toLowerCase() === cautat;
  });
}

// Șterge un elev după nume
function stergeElev() {
  const mesaj = document.getElementById("mesajSterge");
  const elev = gasesteElev(document.getElementById("numeSterge").value);

  if (elev === undefined) {
    mesaj.textContent = "Elevul nu a fost găsit!";
    mesaj.className = "eroare";
    return;
  }

  const index = elevi.indexOf(elev);
  elevi.splice(index, 1);

  mesaj.textContent = "Elevul " + elev.nume + " a fost șters.";
  mesaj.className = "ok";
  document.getElementById("numeSterge").value = "";
  afiseazaElevi();
}

// Caută un elev și îi afișează datele
function cautaElev() {
  const rezultat = document.getElementById("rezultat");
  const elev = gasesteElev(document.getElementById("numeCauta").value);
  rezultat.innerHTML = "";

  if (elev === undefined) {
    rezultat.textContent = "Elevul nu a fost găsit!";
    rezultat.className = "eroare";
    return;
  }

  rezultat.className = "ok";
  const linii = [
    "Elev găsit!",
    "Nume: " + elev.nume,
    "Vârsta: " + elev.varsta,
    "Nota: " + elev.nota
  ];
  linii.forEach(function (text) {
    const p = document.createElement("p");
    p.textContent = text;
    rezultat.appendChild(p);
  });
}

/* ===================== La încărcarea paginii ===================== */
afiseazaLista();
afiseazaElevi();
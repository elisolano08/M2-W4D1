const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    }
];


function ricercaLavoro(lavoroCercato, localitaCercata)  {
    console.log("Ricerca Lavoro: start");
    let listaRisultati = {
        count: 0,
        results: []
    }    
    lavoroCercato = lavoroCercato.toLowerCase().trim();
    localitaCercata = localitaCercata.toLowerCase().trim();
    if (lavoroCercato=="" || localitaCercata == "") {
        alert("Devi inserire un lavoro e una località");
        console.log("Ricerca lavoro: errore di input");
        return false;
    }
    for (let i=0; i<jobs.length; i++) {
        let title=jobs[i].title.toLowerCase();
        let location=jobs[i].location.toLocaleLowerCase();
        if (title.search(lavoroCercato) != -1 && location.search(localitaCercata) != -1){
            console.log("Ricerca Lavoro: trovata corrispondenza. Title=" + title + " - Location=" + location);
            listaRisultati.count++;
            listaRisultati.results.push(jobs[i]);
        }
    }
    console.log("Ricerca Lavoro: risultato: ");
    console.log(listaRisultati);
    console.log("Ricerca Lavoro: end");
    stampaRisultati(listaRisultati);    
}

function stampaRisultati(listaRisultati){
    const areaRisultati = document.getElementById('risultati');
    if (listaRisultati.count == 0) {
        areaRisultati.innerHTML = "<div class='voidResult'>Spiacente, nessun risultato corrisponde alla tua ricerca.</div>";
    } else {

        // svuota l'area dei risultati
        areaRisultati.innerHTML = "";

        // Introduzione ai risultati
        let _intro = document.createElement('p');
        _intro.setAttribute('class', 'resultsIntro');
        _intro.textContent = "La tua ricerca ha prodotto " + listaRisultati.count + " risultati."
        areaRisultati.appendChild(_intro);
        
        // UL della lista risultati
        let _ul=document.createElement('ul');
        _ul.setAttribute('class', "resultsList");
        areaRisultati.appendChild(_ul);

        // LI della lista risultati
        for(let i=0; i<listaRisultati.results.length; i++){
            let _li=document.createElement('li');
            _li.setAttribute('class', 'resultsItem');
            _li.textContent = listaRisultati.results[i].title + " (" + listaRisultati.results[i].location + ")";
            _ul.appendChild(_li);
        }

    }
}


// const listaFinale = document.getElementById('risultatoRicerca');
// const counter = document.createElement('p');
// counter.textContent = "Risultato = " + risultato.length;
// listaFinale.appendChild(counter);
// listaFinale.appendChild(listaRisultato);  

// const listaRisultato = document.createElement("ul");

// if (risultato.length > 0) {
//     for (let ) {
//         const listItem = document.createElement("li"),
//         listItem.textContent = (lavoro.title - lavoro.location),
//         listaRisultato.appendChild(listItem);
//     }
// } 
//     else {
//     const nontrovato = document.createElement('p');
//     noLavoro.textContent = "ci dispiace! non abbiamo trovato offerte di lavoro relativi alla tua ricerca.";
//     listaRisultato.appendChild(nontrovato);
// }
  
    
1
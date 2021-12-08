//Vi indsamler alle items (kalenderlåger)
//i en nodelist der hedder "items"
let items = document.querySelectorAll(".item");

//Vi deklarerer et tomt arra der hedder "OpenOrClosed"
let openOrClosed = [];

//Vi tjekker om der er et item i localStorage der hedder days
//og hvis der er sætter vi vores tomme array lig med days
if (localStorage.days){
    openOrClosed = JSON.parse(localStorage.getItem("days"));
}

//vi deklarerer en variabel med et dato objekt og trækker
//dags dato ud den får navnet "currentDate"
let d = new Date();
let currentDate = d.getDate();

//For at teste kan vi manuelt ændre dato værdien, husk at slette
//eller udkommentere denne linje når programmet er færdigt
//her under er datoen som eksempel sat til den 3. 
// currentDate = 3;


//Vi looper igennem alle lågerne og sætter en click event på hver.
//Click eventen trigger funktionen "clickHandler".
//I loopet tjekker i også om lågen allerede er sat 
//til at være åben (=true) i vores OpenOrClosed array
//Hvis det er tilfældet tilføjer vi klassen "open" til elementet
items.forEach(function(element, index){
    element.addEventListener("click", clickHandler);
    if (openOrClosed[index] == true){
        element.classList.add("open");
    }
});

//Her er vores clickHandler funktion
//Først tjekker vi om datoen er mindre eller lig med
//den dato der står i html elementets (=this) data-date attribute.
//Hvis man ikke må åbne lågen endnu hopper vi ned til alert koden, sidst i funktionen

//Hvis man må åbne lågen tjekker vi om den allerede er åben
//Er den allerede åben giver vil klikket fjerne css-klassen (lukke lågen)
//og opdatere værdien i arrayet til false
//Er den lukket tilføjer vi css-klassen (åbner lågen) 
//og opdaterer værdien i arraet til true

function clickHandler(event){ 
    if(currentDate >= this.dataset.date ){
        if (this.classList.contains("open")){
            this.classList.remove("open");
            openOrClosed[this.dataset.date-1] = false;
        }else{
            this.classList.add("open");
            openOrClosed[this.dataset.date-1] = true;
        }
        
        localStorage.setItem("days", JSON.stringify(openOrClosed));
    }
    else{
        alert("Hov hov, du. Du må ikke åbne denne låge endnu!");
    }
}
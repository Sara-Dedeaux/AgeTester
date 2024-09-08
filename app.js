
let today= new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
let maxAge;
let userInput; 
today = yyyy + '-' + mm + '-' + dd;
let displayText=document.getElementById("display")
console.log(displayText)
let displayPicture=document.getElementById("moviePic");




maxYear= parseInt(yyyy)-120

maxDate= maxYear + '-' + mm + '-' + dd;


let dateRange = document.getElementById("date");
dateRange.setAttribute("max", today )
dateRange.setAttribute("min", maxDate)

console.log(dateRange)


let submitBtn= document.getElementById("Submit");


submitBtn.addEventListener("click", ()=>{

    let currentDate= new Date(today); 
    userInput=dateRange.value; 
    console.log(userInput)
    
    
    dateRange.value="";
    
    
    ///testing out subtracting days 
    
    let start = new Date(userInput);
    let end = new Date(currentDate);
    let diff = parseInt((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    console.log(diff); // Outputs the difference in days
    
    let yearsOld= parseInt(diff/365) 
    console.log(yearsOld);
    
    displayText.innerHTML= "Age:" + yearsOld;

    if(yearsOld>=62){
        displayPicture.src="./media/casablanca.jpg"
    }else if (yearsOld>=21) {
        displayPicture.src="./media/GoT.jpg"
    }else if (yearsOld>=17) {
        displayPicture.src="./media/americanPie.jpg"
    }else if (yearsOld>=13) {
        displayPicture.src="./media/anchorMan.jpg"
    }else if (yearsOld>=10) {
        displayPicture.src="./media/harryPotter.jpg"

    }else if (yearsOld>=5) {
        displayPicture.src="./media/rescuers.jpg"

    }else if (yearsOld>=3) {
        displayPicture.src="./media/blueClues.jpg"

    }else if (yearsOld<3) {
        displayPicture.src="./media/movingArt.jpg"

    }

});
    

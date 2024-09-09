
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
let movieName= document.getElementById("movieRec");

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
    console.log(diff +" diff ")

    displayText.innerHTML= "Age: " + yearsOld;

    if (yearsOld>120 || diff<1) {
        alert("That date is outside of the expected age range")
    }
    else if(yearsOld>=62){
        displayPicture.src="./media/casablanca.jpg"
        movieName.innerHTML= "Casablanca"
        movieName.style.fontSize="40px"
    }else if (yearsOld>=21) {
        displayPicture.src="./media/GoT.jpg"
         movieName.innerHTML= "Game of Thrones"
        movieName.style.fontSize="40px"
    }else if (yearsOld>=17) {
        displayPicture.src="./media/americanPie.jpg"
         movieName.innerHTML= "American Pie"
        movieName.style.fontSize="40px"
    }else if (yearsOld>=13) {
        displayPicture.src="./media/anchorMan.jpg"
         movieName.innerHTML= "Anchor Man The legend of Ron Burgandy "
        movieName.style.fontSize="40px"
    }else if (yearsOld>=10) {
        displayPicture.src="./media/harryPotter.jpg"
         movieName.innerHTML= "Harry Potter"
        movieName.style.fontSize="40px"

    }else if (yearsOld>=5) {
        displayPicture.src="./media/rescuers.jpg"
         movieName.innerHTML= "The Rescuers Down Under"
        movieName.style.fontSize="40px"

    }else if (yearsOld>=3) {
        displayPicture.src="./media/blueClues.jpg"
         movieName.innerHTML= "Blue's Clues"
        movieName.style.fontSize="40px"

    }else if (yearsOld<3) {
        displayPicture.src="./media/movingArt.jpg"
         movieName.innerHTML= "Moving Art"
        movieName.style.fontSize="40px"

    }

});
    

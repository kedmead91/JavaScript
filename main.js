//Selectors
const firstRow = document.getElementById("rowOne");
const secondRow = document.getElementById("rowTwo");
const thirdRow = document.getElementById("rowThree");
const fourthRow = document.getElementById("rowFour");
const fifthRow = document.getElementById("rowFive");
const sixthRow = document.getElementById("rowSix");

//Event Listener(none included)

//Functions
const spaces = "Spaces Available";
const booked = "Fully Booked";

//First Row
function rowOneData() {
    bookingStatus = firstRow.insertCell(1);
    const dateCell = firstRow.insertCell(2);

    const timeCell = firstRow.insertCell(3);
    bookingStatus.innerHTML = spaces;
    dateCell.innerHTML = "Monday 1st March";
    timeCell.innerHTML = "9:00";

}

//Second Row
function rowTwoData() {
    bookingStatus = secondRow.insertCell(1);
    const dateCell = secondRow.insertCell(2);
    const timeCell = secondRow.insertCell(3);
    secondRow.style.backgroundColor = "orange";
    bookingStatus.innerHTML = booked;
    dateCell.innerHTML = "Monday 1st March";
    timeCell.innerHTML = "18:00";
}

//Third Row
function rowThreeData() {
    bookingStatus = thirdRow.insertCell(1);
    const dateCell = thirdRow.insertCell(2);
    const timeCell = thirdRow.insertCell(3);
    bookingStatus.innerHTML = spaces;
    dateCell.innerHTML = "Tuesday 2nd March";
    timeCell.innerHTML = "18:00";
}

//Fourth Row
function rowFourData() {
    bookingStatus = fourthRow.insertCell(1);
    const dateCell = fourthRow.insertCell(2);
    const timeCell = fourthRow.insertCell(3);
    //bookingStatus.innerHTML = spaces;
    fourthRow.style.backgroundColor = "orange";
    bookingStatus.innerHTML = booked;
    dateCell.innerHTML = "Thursday 4th March";
    timeCell.innerHTML = "18:00";
}

//Fifth Row
function rowFiveData() {
    bookingStatus = fifthRow.insertCell(1);
    const dateCell = fifthRow.insertCell(2);
    const timeCell = fifthRow.insertCell(3);
    //bookingStatus.innerHTML = spaces;
    bookingStatus.innerHTML = spaces;
    dateCell.innerHTML = "Friday 4th March";
    timeCell.innerHTML = "10:00";
}

//Sixth Row
function rowSixData() {
    bookingStatus = sixthRow.insertCell(1);
    const dateCell = sixthRow.insertCell(2);
    const timeCell = sixthRow.insertCell(3);
    //bookingStatus.innerHTML = spaces;
    bookingStatus.innerHTML = spaces;
    dateCell.innerHTML = "Friday 4th March";
    timeCell.innerHTML = "17:00";
}

//Runs all functions together in one function 

function callData() {
    rowOneData();
    rowTwoData();
    rowThreeData();
    rowFourData();
    rowFiveData();
    rowSixData();

}

callData();
document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const body = document.body;

    let currentIndex = 0;

    // Function to move to specific slide
    const moveToSlide = (index) => {
        const slideWidth = slides[0].clientWidth;
        carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;

        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active-dot'));
        // Add active class to current dot
        dots[index].classList.add('active-dot');

        // Update body class to reflect current slide
        body.className = `slide-${index + 1}`;
        currentIndex = index;
    };

    // Initialize carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });

    // Set initial active dot
    dots[0].classList.add('active-dot');

    // Event listener for previous button
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Event listener for next button
    const nextBtn = document.querySelector(".next-btn");
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });
});

// Source: https://www.codingnepalweb.com/dynamic-calendar-html-css-javascript/
// Calender     
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
selectedDate = document.querySelector(".selected-date"),
prevNextIcon = document.querySelectorAll(".icons span");

selectedDate.innerText = "Please select a date"; 

//Selected date
let dateSelected = null
let monthSelected = null
let yearSelected = null
let dateFormat = null
let daySelected = null

let items = null

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    
    let count = 0

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive prev-month">${lastDateofLastMonth - i + 1}</li>`;
        count++;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        
        let isSelected = i === dateSelected && currMonth === monthSelected && currYear === yearSelected
                         ? "selected" : "";

        count++;
        let isHoliday = count % 7 == 0 ? "holiday" : "";
        liTag += `<li class="${isToday} ${isSelected}" id="${isHoliday}">${i}</li>`;
    }

    for (let i = 1; i <= 42-count; i++) { // creating li of next month first days
        liTag += `<li class="inactive next-month">${i}</li>`
    }

    daysTag.innerHTML = liTag;

    currentDate.innerText = `${months[currMonth]}`

    //select date
    items = document.querySelectorAll(".days li")
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.addEventListener("click", changeActiveClass);
      }
      
      function changeActiveClass(e)
      {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          item.classList.remove('selected');
        }
        if(e.target.classList.contains("prev-month")){
            currMonth -= 1;
            if (currMonth < 0) {
                currMonth = 11;
                currYear -= 1;
            }
        }else if(e.target.classList.contains("next-month")){
            currMonth += 1;
            if (currMonth > 11) {
                currMonth = 0;
                currYear += 1;
            }
        }
        e.target.classList.add('selected');
        dateSelected =  Number(e.target.innerText);
        monthSelected = currMonth;
        yearSelected = currYear;
        dateFormat = `${yearSelected}-${monthSelected+1}-${dateSelected}`
        daySelected = new Date(dateFormat).getDay()

        selectedDate.innerText = `${yearSelected}, ${weekday[daySelected]} ${months[monthSelected]} ${dateSelected}`; 
        renderCalendar()
    }

    
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


//Counter Input
let personNum = 0
let durationNum = 0

let Person = document.querySelector(".controllerContainer.Person")
let Duration = document.querySelector(".controllerContainer.Duration")

function decrementCounterPerson(){
    let placeholder = document.querySelector(".placeholder.Person")
    if(personNum <= 0){
        placeholder.innerText = "Choose Person"
        return
    }
    personNum--
    if(personNum <= 0){
        placeholder.innerText = "Choose Person"
        return
    }
    placeholder.innerText = personNum
}

function incrementCounterPerson(){
    let placeholder = document.querySelector(".placeholder.Person")
    if(personNum >= 4){
        return
    }
    personNum++
    placeholder.innerText = personNum
}

function decrementCounterDuration(){
    let placeholder = document.querySelector(".placeholder.Duration")
    if(durationNum <= 0){
        placeholder.innerText = "Choose Duration"
        return
    }
    durationNum--
    if(durationNum <= 0){
        placeholder.innerText = "Choose Duration"
        return
    }
    placeholder.innerText = durationNum
}

function incrementCounterDuration(){
    let placeholder = document.querySelector(".placeholder.Duration")
    if(durationNum >= 2){
        return
    }
    durationNum++
    placeholder.innerText = durationNum
}

Person.childNodes[1].addEventListener("click", decrementCounterPerson)
Person.childNodes[5].addEventListener("click", incrementCounterPerson)
Duration.childNodes[1].addEventListener("click", decrementCounterDuration)
Duration.childNodes[5].addEventListener("click", incrementCounterDuration)



// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.addEventListener("click", changeActiveClass);
// }
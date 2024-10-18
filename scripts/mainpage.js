//Time getting and greeting
const time_btn = document.querySelector('.time_btn')
const greeting = document.querySelector('.greeting')

time_btn.addEventListener('click', () => {
    const time = document.querySelector('.header__time');
    const nowTime = new Date();
    const dateTime = nowTime.toLocaleTimeString();

    time.textContent = dateTime;
})

greeting.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    switch (true) {
        case (hours >= 5 && hours < 12):
            greeting = "Good Morning!";
            break;
        case (hours >= 12 && hours < 18):
            greeting = "Good Afternoon!";
            break;
        case (hours >= 18 && hours < 22):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Good Night!";
            break;
    }
    alert(greeting);
})




//Sorting tool
const sortButt = document.querySelector('.sort');

sortButt.addEventListener('click', () => {
    const numbers = document.getElementById('numbers').value;
    const order = document.getElementById('order').value;
    const result = document.getElementById('result');

    result.textContent = '';

    let numbersArray = numbers.split(',').map(num => num.trim());
    numbersArray = numbersArray.map(Number);

    if (numbersArray.some(isNaN) == true) {
        result.textContent = 'Error';
        return;
    }

    if(order == 'asc'){
        numbersArray.sort((a, b) => a - b);
    }
    else{
        numbersArray.sort((a, b) => b - a);
    }

    result.textContent = numbersArray.join(', ');
})


//Star Rating
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');

        stars.forEach(s => {
            s.textContent = '☆';
            s.classList.remove('selected');
        });

        for (let i = 0; i < rating; i++) {
            stars[i].textContent = '★';
            stars[i].classList.add('selected');
        }
    });
});


//Keys
document.addEventListener('keydown', (e) => {
    const navItems = document.querySelectorAll('.header__nav a');
    let focused = document.activeElement;

    let index = Array.from(navItems).indexOf(focused);

    if (e.key === 'ArrowRight') {
      if (index < navItems.length - 1) {
        navItems[index + 1].focus();
      } else {
        navItems[0].focus();
      }
    }

    if (e.key === 'ArrowLeft') {
      if (index > 0) {
        navItems[index - 1].focus();
      } else {
        navItems[navItems.length - 1].focus();
      }
    }
});



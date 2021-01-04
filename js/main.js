document.querySelector('#submitButton').addEventListener('click', outputHoroscope)

// grabs users birthdate from an input form and outputs a horoscope
// output displays zodiac sign and text horoscope


// function outputHoroscope() {
//     let displayHoroscope = document.querySelector('#mainContent'); 
//     let birthday = document.querySelector('#inputData').value;
//     console.log(birthday);
//     if (displayHoroscope.style.visibility === "hidden") {
//         displayHoroscope.style.visibility = "visible";
//     } 
//     document.querySelector('#zodiac').innerText = birthday;
// }

// console.log(typeof(inputData));
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(typeof(Number(date.getDate())));
// console.log((Number(date.getDate())));

function outputHoroscope() {
    let mainContent = document.querySelector('.main');
    let inputData = document.querySelector('#inputData').value;
    inputData = new Date(inputData);
    let date = inputData;
    let month = 1 + (Number(date.getMonth()));
    let day = 1 + (Number(date.getDate()));

    // shows horoscope if data is inputed, keeps hidden if not
    if (inputData === '') {
        mainContent.style.visibility = 'hidden';
    } else {
        mainContent.style.visibility = 'visible';
    }

    console.log(month, day)

    // 01/20 - 02/18 === Aquarius
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
 
    // 02 / 19 - 03 / 20 === Pisces
    } else if (month == 2 && day <= 19) {
        document.querySelector('#zodiacSign').innerText = 'Pisces';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 3 && day >= 20) {
        document.querySelector('#zodiacSign').innerText = 'Pisces';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    
    //if 03/21 - 04/19 === Aries
    } else if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 04/20 - 05/20 === Taurus
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 05/21 - 6/20 === Gemini
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 6/21 - 7/22 === Cancer
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 7/23 - 8/22 === Leo
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 8/23 - 9/22 === Virgo
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 9/23 - 10/22 === Libra
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 10/23 - 11/21 === Scorpio
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 11/22 - 12/21 === Sagittarius
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }

    //if 12/22 - 01/19 === Capricorn
    if (month == 1 && day <= 20) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    } else if (month == 2 && day >= 18) {
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = 'Hey look it\'s a horoscope.';
    }


        
}
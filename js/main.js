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

document.querySelector('#submitButton').addEventListener('click', outputHoroscope)

function outputHoroscope() {
    let mainContent = document.querySelector('.main');
    let usersBirthday = document.querySelector('#inputData').value;
    usersBirthday = new Date(usersBirthday);
    let month = 1 + (Number(usersBirthday.getMonth()));
    let day = 1 + (Number(usersBirthday.getDate()));

    console.log(month, day)

    // 01/20 - 02/18 === Aquarius
    if (month == 1 && day >= 20) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = '2021 is the year to be an Aquarius! It is all about your ever-evolving sign that presents a unique and accepting perspective to the world at large. You are here to really provide inspiration to the planet as everyone around you seems to be super confused about where to turn next.';
    } else if (month == 2 && day <= 18) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Aquarius';
        document.querySelector('#horoscopeText').innerText = '2021 is the year to be an Aquarius! It is all about your ever-evolving sign that presents a unique and accepting perspective to the world at large. You are here to really provide inspiration to the planet as everyone around you seems to be super confused about where to turn next.';
 
    // 02 / 19 - 03 / 20 === Pisces
    } else if (month == 2 && day >= 19) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Pisces';
        document.querySelector('#horoscopeText').innerText = 'There\'s a difficult energy to pin down this year, Pisces. You have to really take the approach of allowing life to come as it is for your sensitive sign of the Fish.';
    } else if (month == 3 && day <= 20) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Pisces';
        document.querySelector('#horoscopeText').innerText = 'There\'s a difficult energy to pin down this year, Pisces. You have to really take the approach of allowing life to come as it is for your sensitive sign of the Fish.';
    
    //if 03/21 - 04/19 === Aries
    } else if (month == 3 && day >= 21) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Aries';
        document.querySelector('#horoscopeText').innerText = 'There is a great deal to be learned through the other side of the story these days, Aries. 2020 brought out your more practical and protective side. You were forced to dive so deeply inward, and now you know what you are able to take, and what you can no longer tolerate in your life.';
    } else if (month == 4 && day <= 19) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Aries';
        document.querySelector('#horoscopeText').innerText = 'There is a great deal to be learned through the other side of the story these days, Aries. 2020 brought out your more practical and protective side. You were forced to dive so deeply inward, and now you know what you are able to take, and what you can no longer tolerate in your life.';
    
    //if 04/20 - 05/20 === Taurus
    } else if (month == 4 && day >= 20) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Taurus';
        document.querySelector('#horoscopeText').innerText = 'Welcome to a brand-new year ahead of you, Taurus! There\'s a ton of unpacking you have yet to do, and yet you do not even know where to fully begin. You\'ve been experiencing the lessons of having the planet of chaos charging through your sign with both glimpses in 2018 and moving full-on in 2019. However, this year adds a bit of strife to this energy.';
    } else if (month == 5 && day <= 20) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Taurus';
        document.querySelector('#horoscopeText').innerText = 'Welcome to a brand-new year ahead of you, Taurus! There\'s a ton of unpacking you have yet to do, and yet you do not even know where to fully begin. You\'ve been experiencing the lessons of having the planet of chaos charging through your sign with both glimpses in 2018 and moving full-on in 2019. However, this year adds a bit of strife to this energy.';
    
    //if 05/21 - 6/20 === Gemini
    } else if (month == 5 && day >= 21) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Gemini';
        document.querySelector('#horoscopeText').innerText = 'There’s for sure plenty to talk about this year, Gemini! 2021 is a highly stimulating year for your creative sign. You are able to feel more aligned with your highest good, and can even make some pretty fantastic new friends along the way. You might actually be the go-to person when things get a little rocky, mainly because you adjust so easily and quickly to things and are able to see the humor in almost any situation.';
    } else if (month == 6 && day <= 20) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Gemini';
        document.querySelector('#horoscopeText').innerText = 'There’s for sure plenty to talk about this year, Gemini! 2021 is a highly stimulating year for your creative sign. You are able to feel more aligned with your highest good, and can even make some pretty fantastic new friends along the way. You might actually be the go-to person when things get a little rocky, mainly because you adjust so easily and quickly to things and are able to see the humor in almost any situation.';

    //if 6/21 - 7/22 === Cancer
    } else if (month == 6 && day >= 21) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Cancer';
        document.querySelector('#horoscopeText').innerText = 'You are here for a major reason, and 2021 is one of those years where you\'ve got to surrender to the outcome. You made some incredible changes during 2020 and are making some real headway. There were many ups and downs that could have felt a little more traumatic than normal, especially for your compassionate sign of the Crab.';
    } else if (month == 7 && day <= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Cancer';
        document.querySelector('#horoscopeText').innerText = 'You are here for a major reason, and 2021 is one of those years where you\'ve got to surrender to the outcome. You made some incredible changes during 2020 and are making some real headway. There were many ups and downs that could have felt a little more traumatic than normal, especially for your compassionate sign of the Crab.';

    //if 7/23 - 8/22 === Leo
    } else if (month == 7 && day >= 23) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Leo';
        document.querySelector('#horoscopeText').innerText = 'This is a huge year for your exuberant sign, Leo! There is so much going on, that it is often hard to keep track of all the wonderful goodies in store for your sign of the Lion! A major component of this year is also learning how to let go and surrender to the unknown.';
    } else if (month == 8 && day <= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Leo';
        document.querySelector('#horoscopeText').innerText = 'This is a huge year for your exuberant sign, Leo! There is so much going on, that it is often hard to keep track of all the wonderful goodies in store for your sign of the Lion! A major component of this year is also learning how to let go and surrender to the unknown.';

    //if 8/23 - 9/22 === Virgo
    } else if (month == 8 && day >= 23) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Virgo';
        document.querySelector('#horoscopeText').innerText = 'This is a major career year for your sign, Virgo. Your analytical self will enjoy the hard work and dedication it takes to make your dreams become a reality, but you also get a little boost of love from the cosmic cycles as well. You\'ve done a lot of good deeds for so many people that it\'s kind of your time to let some good be returned to you as well. The only problem is sitting still and letting yourself have some fun along the way!';
    } else if (month == 9 && day <= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Virgo';
        document.querySelector('#horoscopeText').innerText = 'This is a major career year for your sign, Virgo. Your analytical self will enjoy the hard work and dedication it takes to make your dreams become a reality, but you also get a little boost of love from the cosmic cycles as well. You\'ve done a lot of good deeds for so many people that it\'s kind of your time to let some good be returned to you as well. The only problem is sitting still and letting yourself have some fun along the way!';

    //if 9/23 - 10/22 === Libra
    } else if (month == 9 && day >= 23) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Libra';
        document.querySelector('#horoscopeText').innerText = 'Wow, what a year you truly have in store for yourself, Libra! 2021 emphasizes your true gift of communication bringing out the more creative qualities of your sign. You might even consider focusing your attention on your more artistic and altruistic forms of expression. As an air sign, you find yourself on a quest for knowledge and might even consider entering a program of study that expands your understanding of various subjects.';
    } else if (month == 10 && day <= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Libra';
        document.querySelector('#horoscopeText').innerText = 'Wow, what a year you truly have in store for yourself, Libra! 2021 emphasizes your true gift of communication bringing out the more creative qualities of your sign. You might even consider focusing your attention on your more artistic and altruistic forms of expression. As an air sign, you find yourself on a quest for knowledge and might even consider entering a program of study that expands your understanding of various subjects.';

    //if 10/23 - 11/21 === Scorpio
    } else if (month == 10 && day >= 23) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Scorpio';
        document.querySelector('#horoscopeText').innerText = 'This is an extremely important year for your powerful sign of the Scorpion. Several transits tug and pull at major points in your personal chart, bringing you brand-new perspectives, and also requiring you to implement decisions that contribute to both, your family and career life.';
    } else if (month == 11 && day <= 21) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Scorpio';
        document.querySelector('#horoscopeText').innerText = 'This is an extremely important year for your powerful sign of the Scorpion. Several transits tug and pull at major points in your personal chart, bringing you brand-new perspectives, and also requiring you to implement decisions that contribute to both, your family and career life.';

    //if 11/22 - 12/21 === Sagittarius
    } else if (month == 11 && day >= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Sagittarius';
        document.querySelector('#horoscopeText').innerText = 'What an absolute turning point kind of year 2021 will be for you, Sagittarius! There is a miraculous energy all around you that is quite refreshing for your benevolent sign of the Centaur. You will have times of massive self-reflection that can trigger old wounds, also met by extremely gracious moments of friendship!';
    } else if (month == 12 && day <= 21) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Sagittarius';
        document.querySelector('#horoscopeText').innerText = 'What an absolute turning point kind of year 2021 will be for you, Sagittarius! There is a miraculous energy all around you that is quite refreshing for your benevolent sign of the Centaur. You will have times of massive self-reflection that can trigger old wounds, also met by extremely gracious moments of friendship!';

    //if 12/22 - 01/19 === Capricorn
    } else if (month == 12 && day >= 22) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Capricorn';
        document.querySelector('#horoscopeText').innerText = 'You have woken up to a different version of yourself this year, Capricorn! You are a unique soul that is here for a welcoming purpose on this earth! The presence of your home planet Saturn through the sign of Aquarius is in full force this year, and has many lessons for your sign of the Goat to take in and process.';
    } else if (month == 1 && day <= 19) {
        mainContent.style.visibility = 'visible';
        document.querySelector('#zodiacSign').innerText = 'Capricorn';
        document.querySelector('#horoscopeText').innerText = 'You have woken up to a different version of yourself this year, Capricorn! You are a unique soul that is here for a welcoming purpose on this earth! The presence of your home planet Saturn through the sign of Aquarius is in full force this year, and has many lessons for your sign of the Goat to take in and process.';

    // keeps main content window hidden if valid data is not inputed and console logs an error
    } else {
        console.log('error');
        mainContent.style.visibility = 'hidden';
    }      
}
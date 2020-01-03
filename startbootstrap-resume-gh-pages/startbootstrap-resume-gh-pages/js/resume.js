(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function Init() {
  const URL_people = `https://swapi.co/api/people/?page=1`;
  Request(URL_people);
  const URL_planets = `https://swapi.co/api/planets/?page=1`;
  Request2(URL_planets);
  const URL_starships = `https://swapi.co/api/starships/?page=1`;
  Request3(URL_starships);
}
Init();

function People(data) {
  for (let i = 0; i < 10; i++) {
    const img = document.querySelector(`.img${[i]}`);
    img.innerHTML = `<img src=\'https://starwars-visualguide.com/assets/img/characters/${[i + 1]}.jpg\' width=\'150px\' height=\'200px\'>`;
    const name = document.querySelector(`.name${[i]}`);
    name.innerHTML = data.results[i].name;
    const height = document.querySelector(`.height${[i]}`);
    height.innerHTML = "Висота: " + data.results[i].height + " sm";
    const mass = document.querySelector(`.mass${[i]}`);
    mass.innerHTML = "Вага: " + data.results[i].mass + "kg";
    const hair_color = document.querySelector(`.hair_color${[i]}`);
    hair_color.innerHTML = "Колір волосся: " + data.results[i].hair_color;
    const eye_color = document.querySelector(`.eye_color${[i]}`);
    eye_color.innerHTML = "Колір очей: " + data.results[i].eye_color;
    const birth_year = document.querySelector(`.birth_year${[i]}`);
    birth_year.innerHTML = "Дата народження: " + data.results[i].birth_year;
  }
}

function Planets(data) {
  for (let i = 0; i < 10; i++) {
    const pimg = document.querySelector(`.pimg${[i]}`);
    pimg.innerHTML = `<img src=\'https://starwars-visualguide.com/assets/img/planets/${[i + 2]}.jpg\' width=\'150px\' height=\'200px\'>`;
    const pname = document.querySelector(`.pname${[i]}`);
    pname.innerHTML = data.results[i].name;
    const rotation_period = document.querySelector(`.rotation_period${[i]}`);
    rotation_period.innerHTML = "Період обертання: " + data.results[i].rotation_period + "";
    const orbital_period = document.querySelector(`.orbital_period${[i]}`);
    orbital_period.innerHTML = "Орбітальний період: " + data.results[i].orbital_period + "";
    const diameter = document.querySelector(`.diameter${[i]}`);
    diameter.innerHTML = "Діаметер: " + data.results[i].diameter;
    const population = document.querySelector(`.population${[i]}`);
    population.innerHTML = "Населення: " + data.results[i].population;
    const climate = document.querySelector(`.climate${[i]}`);
    climate.innerHTML = "Клімат: " + data.results[i].climate;
    const gravity = document.querySelector(`.gravity${[i]}`);
    gravity.innerHTML = "Сила тяжіння: " + data.results[i].gravity;
  }
}

function Starships(data) {
  for (let i = 0; i < 10; i++) {
    const img = document.querySelector(`.simg${[i]}`);
    img.innerHTML = `<img src=\'https://starwars-visualguide.com/assets/img/starships/${[i + 9]}.jpg\' width=\'150px\' height=\'200px\'>`;
    const name = document.querySelector(`.sname${[i]}`);
    name.innerHTML = data.results[i].name;
    const model = document.querySelector(`.model${[i]}`);
    model.innerHTML = "Модель: " + data.results[i].model + " sm";
    const length = document.querySelector(`.length${[i]}`);
    length.innerHTML = "Довжина: " + data.results[i].length + "kg";
    const cargo_capacity = document.querySelector(`.cargo_capacity${[i]}`);
    cargo_capacity.innerHTML = "Вантажопідйомність: " + data.results[i].cargo_capacity;
    const passengers = document.querySelector(`.passengers${[i]}`);
    passengers.innerHTML = "Кількість пасажирів: " + data.results[i].passengers;
    const crew = document.querySelector(`.crew${[i]}`);
    crew.innerHTML = "Екіпаж: " + data.results[i].crew;
  }
}

function Request(URL) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", URL, true);
  console.log(xhr);
  xhr.onreadystatechange = function (aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        People(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}

function Request2(URL) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", URL, true);
  console.log(xhr);
  xhr.onreadystatechange = function (aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        Planets(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}

function Request3(URL) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", URL, true);
  console.log(xhr);
  xhr.onreadystatechange = function (aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        Starships(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}

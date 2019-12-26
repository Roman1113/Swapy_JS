(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function Init() {
 
}
Request();

function Request() {
  let xhr = new XMLHttpRequest();
  const URL = `https://swapi.co/api/people/1`;
  xhr.open("GET", URL, true);
  console.log(xhr);
  xhr.onreadystatechange = function (aEvt) {
      if (xhr.readyState == 4) {
          if (xhr.status == 200) {
              const data = JSON.parse(xhr.responseText);
              const name = document.querySelector(".name");
              name.innerHTML = data.name;
              const height = document.querySelector(".height");
              height.innerHTML = "Висота: " + data.height + " sm";
              const mass = document.querySelector(".mass");
              mass.innerHTML = "Вага: " + data.mass + "kg";
              const hair_color = document.querySelector(".hair_color");
              hair_color.innerHTML ="Колір волосся: " + data.hair_color;
              const eye_color = document.querySelector(".eye_color");
              eye_color.innerHTML ="Колір очей: " + data.eye_color;
              const birth_year = document.querySelector(".birth_year");
              birth_year.innerHTML ="Дата народження: " + data.birth_year;
              // const starships = document.querySelector(".mb-5");
              // starships.innerHTML = data.starships.name;
          
              // console.log(data);
              // let local_Info = document.querySelector(".locations");
              // let table = document.createElement("table");
              // table.setAttribute("width", "300px");
              // for (let i = 0; i < data.devices.length; i++) {
              //     let div = document.createElement("tr");
              //     div.innerHTML = `<td>${[i + 1]}.</td>
              //     <td>${data.devices[i].fullAddressUa}</td>
              //     <td>${data.devices[i].placeUa}</td>
              //     <td>${data.devices[i].cityUA}</td>
              //     <button id = but_${[i + 1]} style = "margin-left = 10px">on map</button>`;
              //     table.appendChild(div);
              // }
              // local_Info.appendChild(table);

          } else {
              console.log("Error loading page\n");
          }
      }
  };
  xhr.send();
}

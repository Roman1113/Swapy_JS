l = document.getElementById('lang');
len = l.textContent;
$(document).on('load', Init(len));

//window.addEventListener("load", Init(len));
// let btnClickLanguage = document.querySelectorAll(".btnLanguage");
// btnClickLanguage.forEach(item => {
//   item.addEventListener("click", click_language);
// });
// let btnCategoryArr = document.querySelectorAll(".btnCategory");
// btnCategoryArr.forEach(item => {
//   item.addEventListener("click", SwitchCatrgory);
// });
$(".btnLanguage").on('click', click_language);
$(".btnCategory").on('click', SwitchCatrgory);

async function SwitchCatrgory() {
  l = document.getElementById('lang');
  len = l.textContent;
  let category = this;
  category = category.textContent.toLowerCase();
  Request(len, category, GetNewsFromCategory);
  if (category === "currency") {
    let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    let wrapperChack = document.querySelector(".wrapper");
    if (wrapperChack != null) {
      wrapperChack.remove();
    }
    let mymain = document.querySelectorAll("#mymain");
    mymain.forEach(item => {
      item.remove();
    });
    RequestCurrency(url, GetCurrency);
  }
  console.log("category", category);
}

function Init(lenguage) {
  let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  l = document.getElementById('lang');
  l.innerHTML = lenguage;

  const categoryArr = [
    "sport",
    "entertainment",
    "health",
    "science",
    "technology"
  ];

  RequestCurrency(url, GetCurrency);

  for (let i = 0; i < categoryArr.length; i++) {
    NewsRequest(lenguage, categoryArr[i], GetNews);
  }
  console.log("lenguage", lenguage);
}

async function NewsRequest(country, category, callback) {
  //Preloader();

  //const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=93395f34a1bd41ea945fea1ef380ff4c`;
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9c7ff5764f3244609848d2ec67438a8d`;
  await fetch(URL, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      callback(category, data);
      //console.log(URL);
    })
    .catch(err => {
      console.log("Catch => ", err);
    });
}

function NewsRequest2(country, category, callback) {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9c7ff5764f3244609848d2ec67438a8d`;
  //let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(category, data);
    }
  };

}

async function Request(country, category, callback) {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9c7ff5764f3244609848d2ec67438a8d`;
  //let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
}

async function RequestCurrency(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
}

async function GetCurrency(data) {
  let delcarr = document.querySelectorAll(".delcar");
  if (delcarr != null) {
    delcarr.forEach(item => {
      item.remove();
    });
  }

  let currency = document.querySelector("#currency");
  for (let i = 0; i < data.length; i++) {
    let delcar = document.createElement("div");
    delcar.className = "delcar";
    currency.appendChild(delcar);
    let ccy = document.createElement("div");
    ccy.className = "ccy";
    ccy.innerHTML = data[i].ccy;
    delcar.appendChild(ccy);
    let buy = document.createElement("div");
    buy.className = "buy";
    buy.innerHTML = data[i].buy;
    delcar.appendChild(buy);
    let base_ccy = document.createElement("div");
    base_ccy.className = "base_ccy";
    base_ccy.innerHTML = data[i].base_ccy;
    delcar.appendChild(base_ccy);
    let sale = document.createElement("div");
    sale.className = "sale";
    sale.innerHTML = data[i].sale;
    delcar.appendChild(sale);
  }
}

async function GetNews(category, data) {
  let wrapperChack = document.querySelector(".wrapper");
  if (wrapperChack != null) {
    wrapperChack.style.display = "block";
  }
  if (category === "sport") {
    var sport = document.querySelector("#sport");
  } else if (category === "health") {
    var sport = document.querySelector("#health");
  } else if (category === "entertainment") {
    var sport = document.querySelector("#entertainment");
  } else if (category === "technology") {
    var sport = document.querySelector("#technology");
  } else if (category === "science") {
    var sport = document.querySelector("#science");
  }

  for (let i = 0; i < 5; i++) {
    let deldom = document.createElement("div");
    deldom.className = "deldom";
    sport.appendChild(deldom);
    let h3 = document.createElement("h3");
    h3.className = "newsTitle";
    h3.innerHTML = data.articles[i].title;
    deldom.appendChild(h3);
    let img = document.createElement("img");
    img.className = "newsImg";
    img.setAttribute("alt", "Image");
    img.setAttribute("src", data.articles[i].urlToImage);
    deldom.appendChild(img);
    let desc = document.createElement("div");
    desc.className = "newsArticle";
    desc.innerHTML = data.articles[i].description;
    deldom.appendChild(desc);
    let date = document.createElement("span");
    date.className = "newsPublishedAt";
    date.innerHTML = data.articles[i].publishedAt;
    deldom.appendChild(date);
    let author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = data.articles[i].author;
    deldom.appendChild(author);

  }
}

async function GetNewsFromCategory({ articles }) {
  let mymain = document.querySelectorAll(".deldom");
  mymain.forEach(item => {
    item.remove();
  });
  let sport = document.querySelector("#news");
  let wrapperChack = document.querySelector(".wrapper");
  if (wrapperChack != null) {
    wrapperChack.remove();
  }
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  sport.appendChild(wrapper);
  console.log(articles);
  for (let i = 0; i < articles.length; i++) {
    let h3 = document.createElement("h3");
    h3.className = "newsTitle";
    h3.innerHTML = articles[i].title;
    wrapper.appendChild(h3);
    let img = document.createElement("img");
    img.className = "newsImg";
    img.setAttribute("alt", "Image");
    img.setAttribute("src", articles[i].urlToImage);
    wrapper.appendChild(img);
    let desc = document.createElement("div");
    desc.className = "newsArticle";
    desc.innerHTML = articles[i].description;
    wrapper.appendChild(desc);
    let date = document.createElement("span");
    date.className = "newsPublishedAt";
    date.innerHTML = articles[i].publishedAt;
    wrapper.appendChild(date);
    let author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = articles[i].author;
    wrapper.appendChild(author);
    let prob = document.createElement("div");
    // prob.innerHTML = 'style=height:50px';
    // prob.innerHTML = 'background-color: white';
    wrapper.appendChild(prob);
  }
}

function click_language() {
  let cl = this;
  l = document.getElementById('lang');
  l.innerHTML = cl.textContent;
  let leng = cl.value;
  console.log("leng", leng);

  let mymain = document.querySelectorAll(".deldom");
  mymain.forEach(item => {
    item.remove();
  });
  window.addEventListener("load", Init(leng));
  console.log("value", leng);
}


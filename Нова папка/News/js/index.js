window.addEventListener("load", Init);

// let sports = document.querySelector(".sports");
// sports.addEventListener("click",GetSportNews);

// GetSportNews(){
//   alert( 'Спасибо!' );
// }

function Init() {
  let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  console.log("init");
  let btnCategoryArr = document.querySelectorAll(".btnCategory");
  btnCategoryArr.forEach(item => {
    item.addEventListener("click", SwitchCatrgory);
  });

  const categoryArr = [
    "sport",
    "entertainment",
    "health",
    "science",
    "technology"
  ];

  // Request(url, GetCurrency);
  // for (let i = 0; i < categoryArr.length; i++) {
  //   NewsRequest(categoryArr[i], GetNews);
  // }
  NewsRequest(categoryArr[0], GetNews);
}

function SwitchCatrgory() {
  let category = this;
  category = category.textContent.toLowerCase();

  NewsRequest(category, GetNews);
}

function NewsRequest(category, callback) {
  let url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      console.log("Data from API =>", data);
      callback(data);
    }
  };
}

function Request(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
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

function GetCurrency(data) {
  ///console.log("GetCurrency: ", data);

  let currency = document.querySelector("#currency");

  for (let i = 0; i < data.length; i++) {
    let ccy = document.createElement("div");
    ccy.className = "ccy";
    ccy.innerHTML = data[i].ccy;
    currency.appendChild(ccy);
    let base_ccy = document.createElement("div");
    base_ccy.className = "base_ccy";
    base_ccy.innerHTML = data[i].base_ccy;
    currency.appendChild(base_ccy);
    let buy = document.createElement("div");
    buy.className = "buy";
    buy.innerHTML = data[i].buy;
    currency.appendChild(buy);
    let sale = document.createElement("div");
    sale.className = "sale";
    sale.innerHTML = data[i].sale;
    currency.appendChild(sale);
    //console.log(data[i].ccy, " ", data[i].base_ccy, " buy: ", data[i].buy, " sale: ", data[i].sale);
  }
}

function GetNews({ articles }) {
  let sport = document.querySelector("#news");

  let wrapperChack = document.querySelector(".wrapper");
  if (wrapperChack != null) {
    sport.removeChild(wrapperChack);
  }

  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  sport.appendChild(wrapper);

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
  }
}

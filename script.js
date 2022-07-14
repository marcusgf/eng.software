const privateKey = "74720d86a27db2cac0162b4ad0d9f55e580a030b",
publicKey = "985cd64c10884c4f9cfc212f56b03ad7",
content = document.getElementById('hero');

function conect() {
  const ts = Date.now(),
  hash = md5(ts + privateKey + publicKey),
  URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  fetch(URL).
  then(function (response) {return response.json();}).
  then(function (response) {
    response.data.results.forEach(function (e) {createHero(e);});
  });
}

function createHero(heroObject) {
  const name = heroObject.name,
  cutName = name.substring(name.indexOf("("), name.lenght),
  thumbnail = `${heroObject.thumbnail.path}/portrait_uncanny.${heroObject.thumbnail.extension}`,
  templateHero = `
        <div class="col-lg-3 col-md-4 heroCard " >
          <h3 class"center-text">${cutName}<h3>
          <img class = "img-responsive" src="${thumbnail}">
          
        </div>
   `;

  content.insertAdjacentHTML('beforeEnd', templateHero);
}

conect();
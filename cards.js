/** @format */

// INSTRUCTIONS
// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let baseURL = "http://deckofcardsapi.com/";
let deckID;

$(window).on("load", async function () {
  res = await axios.get(`${baseURL}api/deck/new/`);
  deckID = res.data.deck_id;
  return axios.get(`${baseURL}api/deck/${deckID}/shuffle/`);
});

$(document).ready(function () {
  $("#gimme_card").click(async function () {
    try {
      res1 = await axios.get(`${baseURL}api/deck/${deckID}/draw/?count=1`);
      $("#card_pile").prepend(`<img src="${res1.data.cards[0].image}" />`);
      res2 = await axios.get(
        `${baseURL}api/deck/${deckID}/shuffle/?remaining=true`
      );
    } catch {
      $("#gimme_card").remove();
    }
  });
});

// axios.get(`${baseURL}api/deck/new/draw/?count=1`).then((res1) => {
//   console.log(`${res1.data.cards[0].value} of ${res1.data.cards[0].suit}`);
// });

// PATH #1
// let url = "https://swapi.dev/api/planets/1/";
// let ourFirstPromise = axios.get(url);
// ourFirstPromise.then((data) => console.log(data));
// ourFirstPromise.catch((err) => console.log("OH NO!", err));

// PATH #2
// let url = "https://swapi.dev/api/planets/1/";
// axios
//   .get(url)
//   .then((res) => {
//     axios
//       .get(res.data.residents[0])
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log("ERRORR!", err);
//       });
//   })
//   .catch((err) => console.log("OH NO!", err));

// PATH #3
// let url = "https://swapi.dev/api/planets/1/";
// axios
//   .get(url)
//   .then((res) => {
//     console.log(res.data);
//     return axios.get(res.data.residents[0]);
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.log("OH NO!", err));

//   IDEAL

// let baseURL = "https://pokeapi.co/api/v2/pokemon";

// axios
//   .get(`${baseURL}/1/`)
//   .then((p1) => {
//     console.log(`The first pokemon is ${p1.data.name}`);
//     return axios.get(`${baseURL}/2/`);
//   })
//   .then((p2) => {
//     console.log(`The second pokemon is ${p2.data.name}`);
//     return axios.get(`${baseURL}/3/`);
//   })
//   .then((p3) => {
//     console.log(`The third pokemon is ${p3.data.name}`);
//   })
//   .catch((err) => {
//     console.log(`Oops, there was a problem :( ${err}`);
//   });

//   MAKE NEW PROMISE
// function wait3Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000);
//   });
// }

// wait3Seconds()
//   .then(() => console.log("ALL DONE!"))
//   .catch(() => console.log("ERROR!"));

// const h1 = document.querySelector("h1");
// setTimeout(function () {
//   h1.style.color = "red";
//   setTimeout(() => {
//     h1.style.color = "orange";
//     setTimeout(() => {
//       h1.style.color = "purple";
//     }, 1000);
//   }, 1000);
// }, 1000);

// function changeColor(el, color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       el.style.color = color;
//       resolve();
//     }, 1000);
//   });
// }

// changeColor(h1, "teal")
//   .then(() => changeColor(h1, "orange"))
//   .then(() => changeColor(h1, "blue"))
//   .then(() => changeColor(h1, "purple"))
//   .then(() => changeColor(h1, "black"));

// async function getStarWarsFilms() {
//   let res = await axios.get("https://swapi.dev/api/films");
//   console.log(res);
// }

// getStarWarsFilms();

// const deck = {
//   async init() {
//     let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
//     this.deckID = res.data.deck_id;
//   },
//   async shuffle() {
//     let res = await axios.get(
//       `https://deckofcardsapi.com/api/deck/${this.deckID}/shuffle`
//     );
//   },
//   async drawCard() {
//     let res = await axios.get(
//       `https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`
//     );
//     console.log(res.data.cards[0]);
//   },
// };

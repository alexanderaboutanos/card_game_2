/** @format */

// Part 1: Number Facts

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

favNum = 24;

// async function get1funfact(favNum) {
//   let res = await axios.get(`http://numbersapi.com/${favNum}`);
//   console.log(res);
// }

// get1funfact(favNum);

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

async function getmultiplenumbers(favNum) {
  let res1 = await axios.get(`http://numbersapi.com/${favNum}`);
  let res2 = await axios.get("http://numbersapi.com/2");
  let res3 = await axios.get("http://numbersapi.com/3");
  console.log(res1.data);
  console.log(res2.data);
  console.log(res3.data);
}

getmultiplenumbers(favNum);

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function getmultiplenumbers(favNum) {
  let res1 = await axios.get(`http://numbersapi.com/${favNum}`);
  let res2 = await axios.get(`http://numbersapi.com/${favNum}`);
  let res3 = await axios.get(`http://numbersapi.com/${favNum}`);
  let res4 = await axios.get(`http://numbersapi.com/${favNum}`);
  console.log(res1.data);
  console.log(res2.data);
  console.log(res3.data);
  console.log(res4.data);
}

// (Note: You’ll need to make multiple requests for this.)

// Part 2: Deck of Cards

// let baseURL2 = "http://deckofcardsapi.com/";

// 1.  Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// axios.get(`${baseURL2}api/deck/new/draw/?count=1`).then((res1) => {
//   console.log(`${res1.data.cards[0].value} of ${res1.data.cards[0].suit}`);
// });

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console.log the values and suits of both cards.

// axios
//   .get(`${baseURL2}api/deck/new/draw/?count=1`)
//   .then((res1) => {
//     console.log(`${res1.data.cards[0].value} of ${res1.data.cards[0].suit}`);
//     return axios.get(`${baseURL2}api/deck/new/draw/?count=1`);
//   })
//   .then((res2) => {
//     console.log(res2);
//     console.log(`${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`);
//   });

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// ON OTHER PAGE

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

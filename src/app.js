/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardValue = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const cardSuit = ["♠","♥","♦","♣"];
const usedCards = {
    spade: [],
    heart: [],
    diamond: [],
    club: [],
};
let cardCounter=0;
let duplicateCard = false;

const selectCard = () => {
    let randomValue = cardValue[Math.floor(Math.random()*cardValue.length)];
    let randomSuit = cardSuit[Math.floor(Math.random()*cardSuit.length)];
    switch (randomSuit) {
        case "♠":
            if (usedCards.spade.includes(randomValue)) {
                duplicateCard = true;                
            } else {
                usedCards.spade.push(randomValue);
                cardCounter++;
            }
            break;
        case "♥":
            if (usedCards.heart.includes(randomValue)) {
                duplicateCard = true;                
            } else {
                usedCards.heart.push(randomValue);
                cardCounter++;
            }
            break;
        case "♦":
            if (usedCards.diamond.includes(randomValue)) {
                duplicateCard = true;                
            } else {
                usedCards.diamond.push(randomValue);
                cardCounter++;
            }
            break;
        case "♣":
            if (usedCards.club.includes(randomValue)) {
                duplicateCard = true;                
            } else {
                usedCards.club.push(randomValue);
                cardCounter++;
            }
            break;        
      }
     
      //debugging purposes
      console.log(`${cardCounter}: ${randomValue}${randomSuit} --- duplicateCard = ${duplicateCard}`);
      console.log("spades" + usedCards.spade);
      console.log("hearts" + usedCards.heart);
      console.log("diamonds" + usedCards.diamond);
      console.log("clubs" + usedCards.club);

      //check if it is a duplicate card and if so rerun function
      if (duplicateCard) {
        duplicateCard = false;
        selectCard();
        return;
      };
     
    //modify the HTML document with the new card
    let topLeft = document.querySelector(".topLeft");
    let bottomRight = document.querySelector(".bottomRight");
    let centerValue = document.querySelector(".centerValue");
    if (randomSuit === "♠" || randomSuit === "♣"){
        topLeft.style.color = "black";
        bottomRight.style.color = "black"; 
    } else {
        topLeft.style.color = "red";
        bottomRight.style.color = "red"; 
    }
    topLeft.innerHTML = randomSuit;
    bottomRight.innerHTML = randomSuit;
    centerValue.innerHTML = randomValue;

    if (cardCounter === 52) {
        document.querySelector("#newCardButton").disabled = true;
        return;
    }
}

const shuffleDeck = () => {location.reload()}

let newCardButton = document.querySelector("#newCardButton");
newCardButton.addEventListener("click",selectCard);


let shuffleButton = document.querySelector("#shuffleButton");
shuffleButton.addEventListener("click",shuffleDeck);


window.onload = selectCard();


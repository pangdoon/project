const quotes = [
  {
    qutoe: "크르렁크르르러엉으르렁.",
    author: "진영",
  },
  {
    qutoe: "정수가 말하길, 나는 바보다",
    author: "정수",
  },
  {
    qutoe: "해진가 말하길, 정수가 내꺼 이름바꿔줬어",
    author: "해진",
  },
  {
    qutoe: "수지가 말하길, 빠이",
    author: "수지",
  },
  {
    qutoe: "대박",
    author: "해진",
  },
  {
    qutoe: "아오오아오아오앙캬오오오오",
    author: "용수",
  },
  {
    qutoe: "꿈아, 나랑같이 지내줘서 고마워",
    author: "가경",
  }
]

const quote = document.querySelector("#qutoe span:first-child")
const author = document.querySelector("#qutoe span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qutoe;
author.innerText = todaysQuote.author;
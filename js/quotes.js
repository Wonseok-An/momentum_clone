const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨"
    },
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로"
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다.",
        author: "찰리 채플린"
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇"
    },
    {
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다",
        author: "랄프 왈도 에머슨"
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로"
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡"
    },
    {
        quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.",
        author: "세르반테스"
    },
    {
        quote: "이룰수 없는 꿈을 꾸고 이길수 없는 적과 싸우며, 이룰수 없는 사랑을 하고 견딜 수 없는 고통을 견디고, 잡을수 없는 저 하늘의 별도 잡자.",
        author: "세르반테스"
    },
    {
        quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헬렌켈러"
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈"
    },
    {
        quote: "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
        author: "조 지라드"
    }
]

const quote = document.querySelector(".main-page__quote span:first-child");
const author = document.querySelector(".main-page__quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;

const leftBtn = document.getElementById("leftBtn")
const rightBtn = document.getElementById("rightBtn")

let writingList = ["courtship", "howToBreakUp", "howToMakeSamosas", "meetMyFriend", "sextuality", "yourNewFace"];
let samples = {}
const publishedStory = "https://rkvryquarterly.com/your-new-face/"

for (i=0; i<writingList.length; i++) {
    samples[writingList[i]] = `./documents/${writingList[i]}.html`;
}
samples["yourNewFace"] = publishedStory;

leftBtn.addEventListener("click", (e) => {
    
})
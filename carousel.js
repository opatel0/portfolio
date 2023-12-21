const leftBtn = document.getElementById("leftBtn")
const rightBtn = document.getElementById("rightBtn")
const preview = document.getElementById("preview")
const previewText = document.getElementById("preview-text")
const previewTitle = document.getElementById("preview-title")
const previewLink = document.getElementById("preview-link")

let writingList = ["courtship", "howToBreakUp", "howToMakeSamosas", "meetMyFriend", "sextuality"];
let titles = ["Courtship", "How to Break Up with a Bird", "How to Make Samosas", "Meet My Friend", "Sextuality"]
let links = []
for (i=0; i<writingList.length; i++) {
    links.push(`./documents/${writingList[i]}.html`)
}
titles.push("Your New Face")
links.push("https://rkvryquarterly.com/your-new-face/")
const previews = []

previews.push(`“I’m into you” more your breath than voice<br>
thermochromic iris bridging light and dark.<br><br>
I manage to order a beer I’m slow<br>
to raise, slow with my lip on the rim.<br>
You capture frame by frame<br>
fresh language my movements speak<br><br>
everything reversed in your plastic specs<br>
my brown skin muddled <br>
words not sounds but flashes<br>
white of teeth spelling in morse.<br><br>`)
previews.push(`Peter leaned on the railing of the porch and it was from this angle he noticed a black backpack sitting by the door. It had a patch on the front that said, “Stand your ground.” He was going to ask about it, but also from this angle, he noticed Chad’s socks. He had on one argyle sock and one navy blue. “Why do you wear two different socks?”<br> 
“I lost both matching socks, so I turned these into a pair.”<br>
Peter laughed. He jumped up onto the railing and sat leaning against the post. His parents always warned him against doing it, but he knew it was just one of those superfluous parenting obligations.<br>
“How old are you, kid?”<br>
“Don’t call me kid. My name’s Peter. And don’t call me Pete either.”<br>
“Okay, Peter. How old are you?”<br>
“Twelve.”<br>
“Sixth grade?”<br>
“Seventh.”<br>
Chad tensed his brow. “You must get picked on a lot since you’re small.”<br><br>`)
previews.push(`Schmooze the mother for approximately 5-10 min.<br>
The mother should sigh, “Fine,” when ready.<br><br>
III. Procedure<br>
Leave it to the mother.<br>
You’ll never make samosas<br>
like she does.<br><br>`)
previews.push(`I crawled into my stomach when she laughed at his jokes harder than at mine. Pushed my sunglasses further up my nose so she wouldn’t notice my pain. Mirrored his movements to borrow his appeal. Reformed my throat and squeezed my nasal passage to get his voice just right.<br><br>`)
previews.push(`N/A<br><br>`)
previews.push(`Only one piece of what the doctor says sticks. I spin it around in my head; swish it around my mouth to see how it tastes; slow it down to make sure I’m not leaving anything out. “We can’t save his left eye.” We can’t save his left eye. We. Can’t save. His. Left. Eye.<br><br>
The surgeon leaves, and your mom breaks apart in my arms. In one sweeping motion, every piece of her crumbles and falls.<br>
“Did you see him?”<br>
“Yeah. He doesn’t look so bad; they’ll be able to fix him right up, Ging. Don’t worry about it.”<br>
“Oj, his eye.”<br>
“Yeah.”<br>
Your dad stands and looks towards my direction, but not quite at me. “Have you eaten?”<br>
“Not yet.”<br>
“Come on, let’s get you something. The cafeteria’s just downstairs.”<br><br>
The cafeteria looks like a small version of the one from our high school. Crappier even. No olives at the salad bar.<br>
I see you everywhere. I pour coffee and it’s your blood in my cup; it’s your bruises on the apples.<br><br>`)

let currentIdx = 5;
previewTitle.innerHTML = titles[currentIdx];
previewText.innerHTML = previews[currentIdx];
previewLink.innerHTML = titles[currentIdx];
previewLink.setAttribute("src", links[currentIdx])
previewLink.setAttribute("href", links[currentIdx]);
previewLink.setAttribute("target", "_blank");

leftBtn.addEventListener("click", (e) => {
    currentIdx += currentIdx !== 0 ? -1 : 5;
    previewTitle.innerHTML = titles[currentIdx];
    previewText.innerHTML = previews[currentIdx];
    previewLink.innerHTML = titles[currentIdx];
    previewLink.setAttribute("href", links[currentIdx]);
    previewLink.setAttribute("target", "_blank");
})
rightBtn.addEventListener("click", (e) => {
    currentIdx += currentIdx !== 5 ? 1 : -5;
    previewTitle.innerHTML = titles[currentIdx];
    previewText.innerHTML = previews[currentIdx];
    previewLink.innerHTML = titles[currentIdx];
    previewLink.setAttribute("href", links[currentIdx]);
    previewLink.setAttribute("target", "_blank")
})
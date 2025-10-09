w3.includeHTML();
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-bs-theme");
    document.documentElement.setAttribute("data-bs-theme", current === "dark" ? "light" : "dark");
}

function backgroundSwapper() {
    var images = [
        "/media/ui/bg/wakerang.webp",
        "/media/ui/bg/wakerang.webp",
        "/media/ui/bg/wakerang.webp",
        "/media/ui/bg/wakerang.webp",
        "/media/ui/bg/wakerang.webp",
        "/media/ui/bg/gelthelte.webp",
        "/media/ui/bg/gelthelte.webp",
        "/media/ui/bg/gelthelte.webp",
        "/media/ui/bg/sunset.webp",
        "/media/ui/bg/handholding.webp"
    ];
    document.body.style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}
window.addEventListener("DOMContentLoaded", backgroundSwapper);
const quotes = [
    { text: "I don't think the blanket needs condiments", author: "Leaf" },
    { text: "Meow", author: "Dansan" },
    { text: "Imagine debriefing labubus in World War III but in an Australian accent", author: "Khyber" },
    { text: "idk im a cat", author: "Andrew" },
    { text: "Clouded Leopards make me Cumulonimbust", author: "Aspen" },
    { text: "Mesh shirts are like chain mail for twinks", author: "Dig" },
    { text: "Not right now... GODDAMN IT", author: "Zayde" },
    { text: "What the [redacted] is a furry website?!", author: "Cted" },
    { text: "Too human", author: "Siriza" },
    { text: "idfk man I'm not funny", author: "Teg" },
    { text: "My pronouns are jolli/bee", author: "Oreolis" },
    { text: "Wha.... wha do you want me to say...", author: "Cleric" },
    { text: "You want me to think? I can't think then...", author: "Hako" },
    { text: "I like how Pylonchat has created NPCs like 'Smh, but also uwu'", author: "Matcha" },
    {
        text: "What if aliens came to earth and were offended because we didn't call them the right pronouns",
        author: "Chilliad"
    },
    { text: "Excuse me. are you a lynx", author: "Pylon" },
    { text: "whaaat", author: "Roland" },
    { text: "You should become a clep. 10/10 would recommend", author: "Tann" },
    {
        text: "It's the concept of being too employed and tired to gender so I'm a girlfailure boyfailure",
        author: "Kathy (Smores)"
    },
    { text: "CIA sleeper cell labubu rave", author: "Giyan" },
    {
        text: "If this was a shonen anime, there will be an enemies to friends arc where the clep and snep reconciles their differences and figure out that they were pit against each other because of the lynxian aristocracy, and the only way to stop the injustice is to eliminate the triumvirate of lynxes that rule over the society they lived in",
        author: "Leucean"
    }
];
document.addEventListener("DOMContentLoaded", () => {
    const quotec = document.getElementById("quotecontainer");
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");

    const DISPLAY_DURATION = 15000;

    // Helper: pick a random quote
    function pickQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Helper: wait for animation to finish
    function waitAnimationEnd(element) {
        return new Promise((a) => {
            element.addEventListener("animationend", a, { once: true });
        });
    }

    // Show a quote with fade-in
    async function showQuote() {
        const q = pickQuote();
        quoteText.textContent = `"${q.text}"`;
        quoteAuthor.textContent = `~ ${q.author}`;

        quotec.classList.remove("animate__fadeOutRight");
        quotec.classList.add("animate__fadeInLeft");

        await waitAnimationEnd(quotec);
    }

    // Fade out current quote
    async function hideQuote() {
        quotec.classList.remove("animate__fadeInLeft");
        quotec.classList.add("animate__fadeOutRight");

        await waitAnimationEnd(quotec);
        quotec.classList.remove("animate__fadeOutRight");
    }

    // Main loop
    async function changeQuotes() {
        while (true) {
            await showQuote();
            await new Promise((res) => setTimeout(res, DISPLAY_DURATION));
            await hideQuote();
        }
    }

    // Start the cycle
    changeQuotes();
});

function iconSwitcher() {
    var images2 = [
        "/media/gallery/art/leu-leowolf-icon2.webp",
        "/media/gallery/art/leu-leowolf-icon2.webp",
        "/media/gallery/art/leu-leowolf-icon2.webp",
        "/media/gallery/art/leu-mylafox-lynx.webp",
        "/media/gallery/art/leu-mylafox-clep.webp",
        "/media/gallery/art/leu-mylafox-clep.webp",
        "/media/gallery/art/leu-mylafox-icon.webp",
        "/media/gallery/art/leu-mylafox-icon.webp",
        "/media/gallery/art/leu-mylafox-icon.webp",
        "/media/gallery/art/leu-mylafox-icon.webp",
        "/media/gallery/art/leu-mylafox-icon.webp"
    ];
    var randomImage = images2[Math.floor(Math.random() * images2.length)];
    document.querySelector("#headerpic img").src = randomImage;
}
window.onload = iconSwitcher;
window.addEventListener("load", function () {
    document.body.classList.remove("preload");
});

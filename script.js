
// ===================================
// CHAPTER 15 - INTERACTIVE WEBSITE
// ===================================


// ===================================
// SCENE 1: THE INVITATION
// ===================================

const envelope = document.getElementById("envelope");
const messageCard = document.getElementById("messageCard");
const hint = document.getElementById("hint");
const continueBtn = document.getElementById("continueBtn");
const invitation = document.getElementById("invitation");

// Open the birthday envelope
envelope.addEventListener("click", () => {

    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");
    envelope.setAttribute("aria-expanded", "true");

    hint.textContent = "A special message for you ♡";

    setTimeout(() => {
        messageCard.hidden = false;

        messageCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }, 900);

});


// ===================================
// SCENE 2: THE PINK GIFT
// ===================================

const giftScene = document.getElementById("giftScene");
const giftBox = document.getElementById("giftBox");
const giftHint = document.getElementById("giftHint");
const giftReveal = document.getElementById("giftReveal");
const wishBtn = document.getElementById("wishBtn");

let giftClicks = 0;

// Go from invitation to gift
continueBtn.addEventListener("click", () => {

    invitation.hidden = true;
    giftScene.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Open the gift after 3 taps
giftBox.addEventListener("click", () => {

    if (giftClicks >= 3) return;

    giftClicks++;

    // Shake animation
    giftBox.classList.remove("shake");
    void giftBox.offsetWidth;
    giftBox.classList.add("shake");

    if (giftClicks < 3) {

        giftHint.textContent =
            `${3 - giftClicks} more taps to go ♡`;

    } else {

        // Open the gift
        giftBox.classList.add("open");
        giftHint.textContent = "Your gift is open! ♡";
        giftBox.disabled = true;

        // Reveal the surprise
        setTimeout(() => {
            giftReveal.hidden = false;

            giftReveal.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }, 900);

    }

});


// ===================================
// SCENE 3: MAKE A WISH
// ===================================

const cakeScene = document.getElementById("cakeScene");
const candlesContainer = document.getElementById("candles");
const candleCounter = document.getElementById("candleCounter");
const cakeHint = document.getElementById("cakeHint");
const cakeSurprise = document.getElementById("cakeSurprise");
const doorBtn = document.getElementById("doorBtn");

let candlesLeft = 15;

// Go from gift to birthday cake
wishBtn.addEventListener("click", () => {

    giftScene.hidden = true;
    cakeScene.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Create 15 interactive candles
for (let i = 1; i <= 15; i++) {

    const candle = document.createElement("button");

    candle.className = "candle";
    candle.type = "button";

    candle.setAttribute(
        "aria-label",
        `Blow out candle ${i}`
    );

    const flame = document.createElement("span");
    flame.className = "flame";

    candle.appendChild(flame);
    candlesContainer.appendChild(candle);

    // Blow out a candle when clicked
    candle.addEventListener("click", () => {

        if (candle.classList.contains("blown-out")) {
            return;
        }

        candle.classList.add("blown-out");
        candle.disabled = true;

        candlesLeft--;

        candleCounter.textContent =
            `${candlesLeft} candles left ♡`;

        // All 15 candles blown out
        if (candlesLeft === 0) {

            cakeHint.textContent =
                "All your wishes are made! ♡";

            setTimeout(() => {

                cakeSurprise.hidden = false;

                cakeSurprise.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }, 700);

        }

    });

}


// ===================================
// SCENE 4: THE SECRET DOOR
// Coming in the next step!
// ===================================


// ===================================
// SCENE 4: LETTERS TO YOU
// ===================================

const lettersScene = document.getElementById("lettersScene");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const openedLetterTitle = document.getElementById("openedLetterTitle");
const openedLetterText = document.getElementById("openedLetterText");

const letters = {
    1: {
        title: "To My Forever Little Girl",
        text: `No matter how old you get, you'll always be my little Fofa. I can't believe you're already 15! Watching you grow up makes me so happy, but can you please stop growing up so fast? 🥹 I love you more than you'll ever know. ♡`
    },

    2: {
        title: "A Little Advice at 15",
        text: `Never change who you are just to make someone like you. Be confident, be kind, and never be afraid to stand up for yourself. You're only 15, so enjoy every little moment. And remember, your big sister is always right (most of the time 🤭).`
    },

    3: {
        title: "Unfortunately, You're Stuck With Me",
        text: `Let's be honest, having me as your sister is the best gift you've ever received. 😂 You're welcome! Even though you're annoying sometimes (okay, a lot), I wouldn't trade you for anything. Life would be so boring without you, little drama queen. ♡`
    },

    4: {
        title: "When You Forget How Amazing You Are",
        text: `I wish you could see yourself through my eyes. You're beautiful, smart, funny, and so much more special than you realize. Never compare yourself to anyone else. There's only one Fofa in this world, and that's what makes you so precious. ♡`
    },

    5: {
        title: "Open When You're Sad",
        text: `Hey Fofa, if you're reading this because you're having a bad day, I just want you to know that everything will be okay. You don't have to pretend you're fine with me. You can cry, complain, or just sit next to me in silence. I'll always be here for you, no matter what. ♡`
    },

    6: {
        title: "Things I Hope You Never Forget",
        text: `Never forget how loved you are. Don't let anyone make you feel like you're not enough. It's okay to make mistakes, change your mind, and have bad days. You don't need to be perfect, Fofa. Just be yourself, because that's already more than enough. ♡`
    },

    7: {
        title: "One Last Thing...",
        text: `If there's one thing I want you to remember, it's that you'll never have to face life alone. You'll always have me. Through every laugh, every tear, every silly argument, and every new chapter.

You're not just my little sister, you're a piece of my heart.

Happy 15th birthday, my Fofa. I love you endlessly. ♡`
    }
};

// Go from cake to letters
doorBtn.addEventListener("click", () => {
    cakeScene.hidden = true;
    lettersScene.hidden = false;
    window.scrollTo(0, 0);
});

// Open a letter
document.querySelectorAll(".letter-card").forEach(card => {
    card.addEventListener("click", () => {
        const number = card.dataset.letter;
        const letter = letters[number];

        if (!letter) return;

        openedLetterTitle.textContent = letter.title;
        openedLetterText.textContent = letter.text;
        letterModal.hidden = false;
        document.body.style.overflow = "hidden";
        closeLetter.focus();
    });
});

// Close the letter
function hideLetter() {
    letterModal.hidden = true;
    document.body.style.overflow = "";
}

closeLetter.addEventListener("click", hideLetter);

letterModal.addEventListener("click", event => {
    if (event.target === letterModal) {
        hideLetter();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !letterModal.hidden) {
        hideLetter();
    }
});


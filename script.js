const Name = "Douae";

function createHearts() {
    const container = document.getElementById('heart-container');
    const heartEmojis = ['❤️', '💖', '🌸', '✨', '💕'];
    
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.delay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}
createHearts();

function checkAccess() {
    const input = document.getElementById('name-input').value.toLowerCase().trim();
    const errorMsg = document.getElementById('error-msg');
    const loginGate = document.getElementById('login-gate');
    const mainContent = document.getElementById('main-content');

    if (input === Name.toLowerCase()) {
        loginGate.style.opacity = '0';
        setTimeout(() => {
            loginGate.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('glass-card');
        }, 500);
    } else {
        errorMsg.classList.remove('hidden');
        loginGate.style.animation = "shake 0.4s";
        setTimeout(() => loginGate.style.animation = "", 400);
    }
}

//function moveButton() {
    //const noBtn = document.getElementById('no-btn');
    //const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    //const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    //noBtn.style.position = 'fixed';
    //noBtn.style.left = x + 'px';
    //noBtn.style.top = y + 'px';


function celebrate() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <h3 class="fade-in" style="font-size: 2.5rem;">Yayy! I knew you'd say yes ❤️</h3>
        <h1 class="sub-text" style="font-size: 1.5rem;">Valentine's locked 🌸</h1>
    `;

    for(let i=0; i<50; i++) {
        setTimeout(createHearts, i * 50);
    }
}
let noClickCount = 0;
const phrases = [
    "Are you sure?",
    "Think again...",
    "Wrong button... Click the big one",
    "You're making this hard...",
    "Last chance to say yes!"
];

function moveButton() {
    const noBtn = document.getElementById('no-btn');
    noClickCount++;

    if (noClickCount >= 5) {
        noBtn.style.display = 'none'; 
        console.log("Poof!"); 
    } else {
        noBtn.innerHTML = phrases[noClickCount - 1];
        const padding = 50;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;
        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }

}

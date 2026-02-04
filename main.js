const cardsContainer = document.querySelector('.cards-container');
const generateBtn = document.getElementById('generate-btn');
const setCountInput = document.getElementById('set-count');
const themeToggle = document.getElementById('theme-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
}

loadThemePreference();
themeToggle.addEventListener('click', toggleDarkMode);

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function openSetInNewWindow(setNumber, numbers) {
    const isDark = document.body.classList.contains('dark-mode');
    const bgColor = isDark ? '#1a1a2e' : '#f0f2f5';
    const containerBg = isDark ? '#16213e' : 'white';
    const textColor = isDark ? '#eee' : '#333';

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Set ${setNumber} - Lotto Numbers</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: ${bgColor};
                }
                .container {
                    text-align: center;
                    background: ${containerBg};
                    padding: 40px 60px;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                }
                h1 { color: ${textColor}; margin-bottom: 30px; }
                .numbers {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }
                .number {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    font-size: 32px;
                    font-weight: bold;
                    color: white;
                    background-color: #4CAF50;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Set ${setNumber}</h1>
                <div class="numbers">
                    ${numbers.map(n => `<div class="number">${n}</div>`).join('')}
                </div>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open('', `set_${setNumber}`, 'width=600,height=400');
    if (newWindow) {
        newWindow.document.write(html);
        newWindow.document.close();
    }
}

function createCard(setNumber, numbers) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.onclick = () => openSetInNewWindow(setNumber, numbers);

    const header = document.createElement('div');
    header.classList.add('card-header');
    header.textContent = `Set ${setNumber}`;

    const numbersDiv = document.createElement('div');
    numbersDiv.classList.add('card-numbers');

    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersDiv.appendChild(numberElement);
    });

    card.appendChild(header);
    card.appendChild(numbersDiv);
    return card;
}

function generateSets() {
    const count = parseInt(setCountInput.value) || 5;
    if (count < 1 || count > 20) {
        alert('1~20 사이의 숫자를 입력해주세요.');
        return;
    }

    cardsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const numbers = generateLottoNumbers();
        const card = createCard(i + 1, numbers);
        cardsContainer.appendChild(card);
    }
}

generateBtn.addEventListener('click', generateSets);

setCountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateSets();
    }
});

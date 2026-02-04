const cardsContainer = document.querySelector('.cards-container');
const recommendBtn = document.getElementById('recommend-btn');
const menuCountInput = document.getElementById('menu-count');
const themeToggle = document.getElementById('theme-toggle');

const koreanMenus = [
    { name: '김치찌개', emoji: '🍲', description: '돼지고기와 김치가 어우러진 얼큰한 찌개', tag: '찌개' },
    { name: '된장찌개', emoji: '🍲', description: '구수한 된장과 두부, 채소가 들어간 건강식', tag: '찌개' },
    { name: '순두부찌개', emoji: '🍲', description: '부드러운 순두부와 해물의 조화', tag: '찌개' },
    { name: '부대찌개', emoji: '🍲', description: '햄, 소시지, 라면이 들어간 푸짐한 찌개', tag: '찌개' },
    { name: '삼겹살', emoji: '🥩', description: '두툼한 삼겹살을 구워 쌈에 싸먹는 맛', tag: '고기' },
    { name: '불고기', emoji: '🥩', description: '달콤한 양념에 재운 소고기 구이', tag: '고기' },
    { name: '제육볶음', emoji: '🍖', description: '매콤달콤한 양념의 돼지고기 볶음', tag: '고기' },
    { name: '갈비찜', emoji: '🍖', description: '푹 익혀 부드러운 소갈비찜', tag: '고기' },
    { name: '닭갈비', emoji: '🍗', description: '매콤한 양념의 닭고기와 채소 볶음', tag: '고기' },
    { name: '삼계탕', emoji: '🍗', description: '인삼과 찹쌀을 넣어 끓인 보양식', tag: '탕' },
    { name: '갈비탕', emoji: '🍜', description: '소갈비를 우려낸 진한 국물', tag: '탕' },
    { name: '설렁탕', emoji: '🍜', description: '사골을 오래 우려낸 뽀얀 국물', tag: '탕' },
    { name: '육개장', emoji: '🍜', description: '얼큰하고 칼칼한 소고기 국물', tag: '탕' },
    { name: '비빔밥', emoji: '🍚', description: '각종 나물과 고추장의 조화', tag: '밥' },
    { name: '돌솥비빔밥', emoji: '🍚', description: '뜨거운 돌솥에 누룽지가 생기는 비빔밥', tag: '밥' },
    { name: '김밥', emoji: '🍙', description: '다양한 재료를 김과 밥으로 말아낸 음식', tag: '밥' },
    { name: '볶음밥', emoji: '🍳', description: '각종 재료와 밥을 함께 볶은 요리', tag: '밥' },
    { name: '잡채', emoji: '🍝', description: '당면과 채소를 볶아낸 명절 음식', tag: '반찬' },
    { name: '떡볶이', emoji: '🍢', description: '매콤달콤한 고추장 양념의 떡 요리', tag: '분식' },
    { name: '칼국수', emoji: '🍜', description: '손으로 썬 면과 시원한 국물', tag: '면' },
    { name: '수제비', emoji: '🍜', description: '손으로 뜯은 반죽과 구수한 국물', tag: '면' },
    { name: '냉면', emoji: '🍜', description: '시원한 육수에 쫄깃한 면발', tag: '면' },
    { name: '잔치국수', emoji: '🍜', description: '멸치 육수에 담백한 국수', tag: '면' },
    { name: '해물파전', emoji: '🥞', description: '해물과 파가 듬뿍 들어간 전', tag: '전' },
    { name: '김치전', emoji: '🥞', description: '신김치로 만든 바삭한 전', tag: '전' },
    { name: '감자탕', emoji: '🍲', description: '돼지 등뼈와 감자를 푹 끓인 탕', tag: '탕' },
    { name: '청국장', emoji: '🍲', description: '구수한 향이 특징인 발효 음식', tag: '찌개' },
    { name: '고등어조림', emoji: '🐟', description: '무와 함께 조린 짭조름한 생선 요리', tag: '생선' },
    { name: '갈치조림', emoji: '🐟', description: '매콤하게 조린 갈치 요리', tag: '생선' },
    { name: '오삼불고기', emoji: '🦑', description: '오징어와 삼겹살의 매콤한 조합', tag: '고기' },
    { name: '낙지볶음', emoji: '🐙', description: '매콤하게 볶은 낙지 요리', tag: '해물' },
    { name: '해물탕', emoji: '🦐', description: '각종 해물이 들어간 얼큰한 탕', tag: '탕' },
    { name: '아구찜', emoji: '🐟', description: '콩나물과 아귀를 매콤하게 찐 요리', tag: '해물' },
    { name: '보쌈', emoji: '🥬', description: '삶은 돼지고기를 배추에 싸먹는 요리', tag: '고기' },
    { name: '족발', emoji: '🐷', description: '쫄깃한 돼지 족발 요리', tag: '고기' },
    { name: '닭볶음탕', emoji: '🍗', description: '감자와 닭을 매콤하게 조린 요리', tag: '탕' },
    { name: '찜닭', emoji: '🍗', description: '간장 양념에 찐 닭과 당면', tag: '고기' },
    { name: '곱창전골', emoji: '🍲', description: '곱창과 채소를 넣은 전골 요리', tag: '전골' },
    { name: '샤브샤브', emoji: '🍲', description: '얇은 고기와 채소를 끓는 물에 데쳐 먹는 요리', tag: '전골' },
    { name: '콩나물국밥', emoji: '🍚', description: '해장에 좋은 콩나물 국밥', tag: '밥' }
];

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

function getRandomMenus(count) {
    const shuffled = [...koreanMenus].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function createCard(menu) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card-emoji">${menu.emoji}</div>
        <div class="card-name">${menu.name}</div>
        <div class="card-description">${menu.description}</div>
        <span class="card-tag">${menu.tag}</span>
    `;

    return card;
}

function recommendMenus() {
    const count = parseInt(menuCountInput.value) || 3;
    if (count < 1 || count > 10) {
        alert('1~10 사이의 숫자를 입력해주세요.');
        return;
    }

    cardsContainer.innerHTML = '';
    const menus = getRandomMenus(count);

    menus.forEach(menu => {
        const card = createCard(menu);
        cardsContainer.appendChild(card);
    });
}

recommendBtn.addEventListener('click', recommendMenus);

menuCountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        recommendMenus();
    }
});

// 페이지 로드 시 자동으로 3개 추천
recommendMenus();

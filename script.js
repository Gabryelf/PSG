// Конфигурация
const CONFIG = {
    images: [
        { url: 'https://i.pinimg.com/originals/b2/11/e2/b211e297314bb4c9c9d54dd9d3980896.png', name: 'Пикачу', type: 'electric' },
        { url: 'https://grizly.club/uploads/posts/2023-02/1675341865_grizly-club-p-pokemon-klipart-21.png', name: 'Бульбазавр', type: 'grass' },
        { url: 'https://i.pinimg.com/originals/97/cd/58/97cd58a2eb316cff7fbe32dc6dbf2eaa.png', name: 'Чармандер', type: 'fire' },
        { url: 'https://www.pngplay.com/wp-content/uploads/11/Jirachi-Pokemon-PNG-Clip-Art-HD-Quality.png', name: 'Джирачи', type: 'psychic' },
        { url: 'https://i.pinimg.com/originals/a9/a6/c8/a9a6c8ccb7c798ff67413118220c7bc3.png', name: 'Сквиртл', type: 'water' },
        { url: 'https://www.pngplay.com/wp-content/uploads/12/Weezing-Pokemon-Transparent-File.png', name: 'Визинг', type: 'poison' },
        { url: 'https://www.pngplay.com/wp-content/uploads/12/Togepi-Pokemon-PNG-HD-Photos.png', name: 'Тогепи', type: 'fairy' },
        { url: 'https://i.pinimg.com/originals/ed/ad/50/edad5063022cf0bc0f69a86cf9716164.png', name: 'Генгар', type: 'ghost' },
        { url: 'https://i.pinimg.com/originals/54/db/ca/54dbca0e8b9f4fd501d646793d7c9b76.png', name: 'Оникс', type: 'rock' },
        { url: 'https://i.pinimg.com/originals/80/6d/ea/806dea7c71b5c02affd2b051784a3647.png', name: 'Мистик', type: 'water' },
        { url: 'https://i.pinimg.com/originals/8e/2f/55/8e2f55a5086f968e884f4dea6884eea4.png', name: 'Абсолют', type: 'ice' },
        { url: 'https://i.pinimg.com/originals/0b/b3/73/0bb3733e365dec2685c56edb6fa53e36.png', name: 'Драгонита', type: 'dragon' },
        { url: 'https://i.pinimg.com/originals/95/64/7e/95647e00efbf5f91e700257c9217e001.png', name: 'Меоут', type: 'normal' },
        { url: 'https://swoproductions.com/wp-content/uploads/2022/03/image-14.png?w=982', name: 'Эшев', type: 'bug' },
        { url: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/927.png', name: 'Фади', type: 'fighting' },
        { url: 'https://i.pinimg.com/originals/b9/2b/d3/b92bd395e63f60fcc1724559686cfe33.png', name: 'Люгия', type: 'psychic' },
        { url: 'https://i.pinimg.com/originals/b4/09/0c/b4090c3df1a0f1dda0ed7c3134752b5d.png', name: 'Хуо-Он', type: 'fire' },
        { url: 'https://i.pinimg.com/originals/b3/c1/4f/b3c14f04b9d21c6ff6f338794e9b2657.png', name: 'Райку', type: 'electric' },
        { url: 'https://img.pokemondb.net/artwork/vector/large/togetic.png', name: 'Тожестик', type: 'fairy' },
        { url: 'https://www.pngplay.com/wp-content/uploads/11/Pachirisu-Pokemon-Transparent-Free-PNG.png', name: 'Пачирису', type: 'electric' },
        { url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/686.png', name: 'Инкай', type: 'dark' },
        { url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-scarlet-violet/9/9f/Umbreon.png', name: 'Амбрион', type: 'dark' },
        { url: 'https://i.pinimg.com/originals/1d/e8/f8/1de8f839ad2fcb539a6550bb6a9fdc25.png', name: 'Эспеон', type: 'psychic' },
        { url: 'https://i.pinimg.com/originals/10/11/e1/1011e18c43f46a6d23dc42c7ee2807fd.png', name: 'Вейпоран', type: 'grass' },
        { url: 'https://i.pinimg.com/originals/97/4c/02/974c02bd9c69ba10fb808cc65bebd1a6.png', name: 'Феролгатор', type: 'water' },
        { url: 'https://i.pinimg.com/originals/1a/1d/f9/1a1df95cc629b9e679c30a29cec074c7.png', name: 'Чаризард', type: 'fire' },
        { url: 'https://i.pinimg.com/originals/94/ad/ac/94adac8399764cf5631e12a4e761139a.png', name: 'Венузар', type: 'grass' },
        { url: 'https://i.pinimg.com/originals/0a/8b/2b/0a8b2b205c8b728f1fd4bf5603de716d.png', name: 'Бластойз', type: 'water' },
        { url: 'https://www.pngplay.com/wp-content/uploads/11/Nidoqueen-Pokemon-PNG-Images-HD.png', name: 'Нидоквин', type: 'poison' }
    ],
    sounds: [
        'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
        'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3',
        'https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3'
    ],
    maxFloatingImages: 8,
    movementSpeed: 2,
    evolutionStones: [
        { id: 'moon-stone', name: 'Лунный камень', image: '🌙', count: 0 },
        { id: 'fire-stone', name: 'Огненный камень', image: '🔥', count: 0 },
        { id: 'water-stone', name: 'Водный камень', image: '💧', count: 0 },
        { id: 'thunder-stone', name: 'Грозовой камень', image: '⚡', count: 0 },
        { id: 'leaf-stone', name: 'Травяной камень', image: '🍃', count: 0 },
        { id: 'sun-stone', name: 'Солнечный камень', image: '☀️', count: 0 }
    ],
    achievements: [
        { id: 'first-catch', title: 'Первый покемон', desc: 'Поймать первого покемона', icon: '🎣', earned: false, progress: 0, target: 1 },
        { id: 'fast-clicker', title: 'Быстрый кликер', desc: '10 кликов за 2 секунды', icon: '⚡', earned: false, progress: 0, target: 10 },
        { id: 'collector', title: 'Коллекционер', desc: 'Поймать 10 уникальных покемонов', icon: '📚', earned: false, progress: 0, target: 10 },
        { id: 'master', title: 'Мастер покеболов', desc: 'Иметь 50 покеболов одновременно', icon: '🏆', earned: false, progress: 0, target: 50 },
        { id: 'explorer', title: 'Исследователь', desc: 'Посетить все 4 локации', icon: '🗺️', earned: false, progress: 0, target: 4 }
    ]
};

// Глобальные переменные
let currentSlide = 0;
let totalSlides = 0;
let isScrolling = false;
let scrollTimeout;
let rightPanelTimeout;
let leftPanelTimeout;
let pokeballCount = 10;
let totalCaught = 0;
let uniqueCaught = 0;
let caughtPokemon = new Set();
let clickCount = 0;
let clickTimer = null;
let pokeballInterval = null;
let gameData = {
    pokeballs: 10,
    totalCaught: 0,
    uniqueCaught: 0,
    caughtPokemon: [],
    achievements: CONFIG.achievements.map(a => ({...a})),
    evolutionStones: CONFIG.evolutionStones.map(s => ({...s})),
    lastPokeballTime: Date.now()
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
    initHorizontalScroll();
    createFloatingImages();
    setupEventListeners();
    setupModals();
    setupPokeballSystem();
    updateUI();
    updateCollectionModal();
    updateAchievementsModal();
    updateInventoryModal();
});

// Загрузка данных игры
function loadGameData() {
    const saved = localStorage.getItem('pokemonHunterData');
    if (saved) {
        const data = JSON.parse(saved);
        gameData = { ...gameData, ...data };
        pokeballCount = gameData.pokeballs;
        totalCaught = gameData.totalCaught;
        uniqueCaught = gameData.uniqueCaught;
        caughtPokemon = new Set(gameData.caughtPokemon);
    }
}

// Сохранение данных игры
function saveGameData() {
    gameData.pokeballs = pokeballCount;
    gameData.totalCaught = totalCaught;
    gameData.uniqueCaught = uniqueCaught;
    gameData.caughtPokemon = Array.from(caughtPokemon);
    gameData.lastPokeballTime = Date.now();
    localStorage.setItem('pokemonHunterData', JSON.stringify(gameData));
}

// Инициализация горизонтального скролла
function initHorizontalScroll() {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    
    slides.forEach((slide, index) => {
        const bgUrl = slide.getAttribute('data-bg');
        slide.style.backgroundImage = `url(${bgUrl})`;
    });
}

// Настройка системы покеболов
function setupPokeballSystem() {
    // Автоматическое добавление покеболов каждые 5 секунд
    pokeballInterval = setInterval(() => {
        if (pokeballCount < 100) { // Максимум 100 покеболов
            pokeballCount++;
            updatePokeballUI();
            saveGameData();
            
            // Анимация добавления покебола
            createPokeballAnimation();
            
            // Проверка достижения
            checkAchievementProgress('master', pokeballCount);
        }
    }, 5000);
}

// Анимация добавления покебола
function createPokeballAnimation() {
    const container = document.getElementById('pokeball-animation-container');
    const pokeball = document.createElement('div');
    pokeball.className = 'pokeball-throw';
    pokeball.style.left = '50%';
    pokeball.style.top = '50%';
    
    container.appendChild(pokeball);
    
    setTimeout(() => {
        pokeball.remove();
    }, 1000);
}

// Обновление UI покеболов
function updatePokeballUI() {
    document.getElementById('pokeball-count').textContent = pokeballCount;
    const progress = (pokeballCount / 100) * 100;
    document.getElementById('pokeball-progress').style.width = `${progress}%`;
}

// Обновление прогресса ловли
function updateCatchProgress() {
    const progress = (uniqueCaught / CONFIG.images.length) * 100;
    document.getElementById('catch-progress-fill').style.width = `${progress}%`;
    document.getElementById('catch-progress-text').textContent = `${uniqueCaught}/${CONFIG.images.length}`;
    document.getElementById('total-caught').textContent = totalCaught;
    document.getElementById('unique-caught').textContent = uniqueCaught;
}

// Обновление всего UI
function updateUI() {
    updatePokeballUI();
    updateCatchProgress();
}

// Создание летающих изображений
function createFloatingImages() {
    const container = document.getElementById('floating-images-container');
    
    for (let i = 0; i < CONFIG.maxFloatingImages; i++) {
        setTimeout(() => {
            createFloatingImage(container);
        }, i * 500);
    }
}

function createFloatingImage(container) {
    const pokemon = CONFIG.images[Math.floor(Math.random() * CONFIG.images.length)];
    const img = document.createElement('img');
    
    img.src = pokemon.url;
    img.className = 'floating-image';
    img.dataset.name = pokemon.name;
    img.dataset.type = pokemon.type;
    img.style.width = `${40 + Math.random() * 60}px`;
    
    // Начальная позиция
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    img.style.left = `${startX}px`;
    img.style.top = `${startY}px`;
    
    // Случайное направление движения
    let directionX = (Math.random() - 0.5) * CONFIG.movementSpeed;
    let directionY = (Math.random() - 0.5) * CONFIG.movementSpeed;
    
    container.appendChild(img);
    
    // Обработчик клика
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        handleImageClick(this, pokemon);
    });
    
    // Обработчик для отслеживания быстрых кликов
    img.addEventListener('mousedown', function() {
        clickCount++;
        
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        clickTimer = setTimeout(() => {
            // Проверка достижения "Быстрый кликер"
            checkAchievementProgress('fast-clicker', clickCount);
            clickCount = 0;
        }, 2000);
    });
    
    // Анимация движения
    function moveImage() {
        if (!img.parentNode) return;
        
        let x = parseFloat(img.style.left);
        let y = parseFloat(img.style.top);
        
        // Отскок от границ
        if (x <= 0 || x >= window.innerWidth - img.offsetWidth) {
            directionX *= -1;
        }
        if (y <= 0 || y >= window.innerHeight - img.offsetHeight) {
            directionY *= -1;
        }
        
        x += directionX;
        y += directionY;
        
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        
        requestAnimationFrame(moveImage);
    }
    
    moveImage();
}

// Обработка клика по покемону
function handleImageClick(imgElement, pokemon) {
    // Проверка наличия покеболов
    if (pokeballCount <= 0) {
        alert('У вас закончились покеболы! Подождите немного, они восстановятся автоматически.');
        return;
    }
    
    // Использование покебола
    pokeballCount--;
    updatePokeballUI();
    
    // Воспроизведение случайного звука
    const randomSound = new Audio(CONFIG.sounds[Math.floor(Math.random() * CONFIG.sounds.length)]);
    randomSound.play();
    
    // Обновление статистики
    totalCaught++;
    caughtPokemon.add(pokemon.name);
    uniqueCaught = caughtPokemon.size;
    
    // Проверка достижений
    checkAchievementProgress('first-catch', 1);
    checkAchievementProgress('collector', uniqueCaught);
    
    // Обновление UI
    updateCatchProgress();
    
    // Анимация увеличения и центрирования
    const rect = imgElement.getBoundingClientRect();
    const startX = rect.left;
    const startY = rect.top;
    const targetX = window.innerWidth / 2 - rect.width / 2;
    const targetY = window.innerHeight / 2 - rect.height / 2;
    
    imgElement.style.transition = 'all 1s ease';
    imgElement.style.position = 'fixed';
    imgElement.style.left = `${targetX}px`;
    imgElement.style.top = `${targetY}px`;
    imgElement.style.transform = 'scale(3)';
    imgElement.style.zIndex = '1000';
    
    // Эффекты через 2 секунды
    setTimeout(() => {
        createMosaicEffect();
        createFireworks();
        
        // Добавление случайного камня эволюции
        addRandomEvolutionStone();
        
        setTimeout(() => {
            imgElement.remove();
            createFloatingImage(document.getElementById('floating-images-container'));
            updateCollectionModal();
            saveGameData();
        }, 1000);
    }, 2000);
}

// Добавление случайного камня эволюции
function addRandomEvolutionStone() {
    const randomIndex = Math.floor(Math.random() * gameData.evolutionStones.length);
    gameData.evolutionStones[randomIndex].count++;
    updateInventoryModal();
}

// Проверка прогресса достижений
function checkAchievementProgress(achievementId, progress) {
    const achievement = gameData.achievements.find(a => a.id === achievementId);
    if (!achievement || achievement.earned) return;
    
    achievement.progress = Math.max(achievement.progress, progress);
    
    if (achievement.progress >= achievement.target && !achievement.earned) {
        achievement.earned = true;
        showAchievementNotification(achievement);
        updateAchievementsModal();
    }
    
    saveGameData();
}

// Уведомление о получении достижения
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-notification-content">
            <div class="achievement-icon">${achievement.icon}</div>
            <div>
                <h4>Достижение получено!</h4>
                <p>${achievement.title}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Настройка модальных окон
function setupModals() {
    // Закрытие модальных окон
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Закрытие при клике вне окна
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Кнопка коллекции
    document.getElementById('btn-collection').addEventListener('click', function() {
        document.getElementById('collection-modal').style.display = 'block';
    });
    
    // Кнопка достижений
    document.getElementById('btn-achievements').addEventListener('click', function() {
        document.getElementById('achievements-modal').style.display = 'block';
    });
    
    // Кнопка инвентаря
    document.getElementById('btn-inventory').addEventListener('click', function() {
        document.getElementById('inventory-modal').style.display = 'block';
    });
    
    // Кнопка скриншота
    document.getElementById('btn-screenshot').addEventListener('click', takeScreenshot);
    
    // Кнопка ресурсов
    document.getElementById('btn-resource').addEventListener('click', function() {
        document.getElementById('resource-modal').style.display = 'block';
    });
    
    // Кнопка шаринга
    document.getElementById('btn-share').addEventListener('click', function() {
        document.getElementById('share-modal').style.display = 'block';
    });
    
    // Кнопка копирования ссылки
    document.getElementById('copy-link-btn').addEventListener('click', function() {
        const input = document.getElementById('share-link-input');
        input.select();
        document.execCommand('copy');
        
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = '';
        }, 2000);
    });
}

// Обновление модального окна коллекции
function updateCollectionModal() {
    const grid = document.getElementById('pokemon-grid');
    grid.innerHTML = '';
    
    CONFIG.images.forEach(pokemon => {
        const isCaught = caughtPokemon.has(pokemon.name);
        const card = document.createElement('div');
        card.className = `pokemon-card ${isCaught ? 'caught' : ''}`;
        card.innerHTML = `
            <img src="${pokemon.url}" alt="${pokemon.name}" class="pokemon-image">
            <div class="pokemon-info">
                <div class="pokemon-name">${pokemon.name}</div>
                <div class="pokemon-type ${pokemon.type}">${getTypeName(pokemon.type)}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Обновление модального окна достижений
function updateAchievementsModal() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';
    
    gameData.achievements.forEach(achievement => {
        const progressPercent = (achievement.progress / achievement.target) * 100;
        const card = document.createElement('div');
        card.className = `achievement-card ${achievement.earned ? 'earned' : ''}`;
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            <div class="achievement-progress">
                <div class="achievement-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="achievement-status">${achievement.earned ? '✅ Получено' : `${achievement.progress}/${achievement.target}`}</div>
        `;
        grid.appendChild(card);
    });
}

// Обновление модального окна инвентаря
function updateInventoryModal() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    
    gameData.evolutionStones.forEach(stone => {
        const card = document.createElement('div');
        card.className = 'stone-card';
        card.innerHTML = `
            <div class="stone-image" style="font-size: 50px;">${stone.image}</div>
            <div class="stone-name">${stone.name}</div>
            <div class="stone-count">${stone.count}</div>
        `;
        grid.appendChild(card);
    });
}

// Получение русского названия типа
function getTypeName(type) {
    const types = {
        'electric': 'Электрический',
        'grass': 'Травяной',
        'fire': 'Огненный',
        'water': 'Водный',
        'psychic': 'Психический',
        'poison': 'Ядовитый',
        'fairy': 'Фея',
        'ghost': 'Призрачный',
        'rock': 'Каменный',
        'ice': 'Ледяной',
        'dragon': 'Драконий',
        'normal': 'Обычный',
        'bug': 'Насекомое',
        'fighting': 'Боевой',
        'dark': 'Темный'
    };
    return types[type] || type;
}

// Создание скриншота
function takeScreenshot() {
    html2canvas(document.body).then(canvas => {
        const link = document.createElement('a');
        link.download = `pokemon-hunter-${new Date().toISOString().slice(0,10)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Эффект мозаики
function createMosaicEffect() {
    const mosaic = document.createElement('div');
    mosaic.className = 'mosaic';
    document.getElementById('effects-container').appendChild(mosaic);
    
    setTimeout(() => {
        mosaic.remove();
    }, 1000);
}

// Эффект фейерверка
function createFireworks() {
    const container = document.getElementById('effects-container');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${window.innerWidth / 2}px`;
        particle.style.top = `${window.innerHeight / 2}px`;
        
        container.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        
        function animate() {
            x += vx;
            y += vy;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = parseFloat(particle.style.opacity || 1) - 0.02;
            
            if (parseFloat(particle.style.opacity || 1) > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }
        
        animate();
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Горизонтальный скролл
    window.addEventListener('wheel', handleScroll, { passive: false });
    
    // Боковые панели
    setupSidePanels();
    
    // Адаптация к изменению размера окна
    window.addEventListener('resize', handleResize);
    
    // Отслеживание посещения слайдов для достижения
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slideIndex = Array.from(document.querySelectorAll('.slide')).indexOf(entry.target);
                checkAchievementProgress('explorer', Math.max(slideIndex + 1, 0));
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.slide').forEach(slide => {
        observer.observe(slide);
    });
}

// Обработка скролла
function handleScroll(e) {
    if (isScrolling) return;
    
    e.preventDefault();
    
    if (e.deltaY > 0) {
        navigateToSlide(currentSlide + 1);
    } else {
        navigateToSlide(currentSlide - 1);
    }
}

// Навигация по слайдам
function navigateToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= totalSlides || isScrolling) return;
    
    isScrolling = true;
    currentSlide = slideIndex;
    
    const scrollContainer = document.querySelector('.horizontal-scroll');
    scrollContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 800);
}

// Настройка боковых панелей
function setupSidePanels() {
    const rightPanel = document.querySelector('.right-panel');
    const leftPanel = document.querySelector('.left-panel');
    const pinRight = document.getElementById('pin-right');
    const pinLeft = document.getElementById('pin-left');
    
    // Правая панель
    document.addEventListener('mousemove', (e) => {
        if (e.clientX >= window.innerWidth - 50 && !pinRight.checked) {
            clearTimeout(rightPanelTimeout);
            rightPanel.classList.add('visible');
            
            rightPanelTimeout = setTimeout(() => {
                if (!pinRight.checked) {
                    rightPanel.classList.remove('visible');
                }
            }, 3000);
        }
    });
    
    // Левая панель
    document.addEventListener('mousemove', (e) => {
        if (e.clientX <= 50 && !pinLeft.checked) {
            clearTimeout(leftPanelTimeout);
            leftPanel.classList.add('visible');
            
            leftPanelTimeout = setTimeout(() => {
                if (!pinLeft.checked) {
                    leftPanel.classList.remove('visible');
                }
            }, 3000);
        }
    });
    
    // Закрепление панелей
    [pinRight, pinLeft].forEach(pin => {
        pin.addEventListener('change', function() {
            if (this.checked) {
                if (this.id === 'pin-right') {
                    clearTimeout(rightPanelTimeout);
                } else {
                    clearTimeout(leftPanelTimeout);
                }
            }
        });
    });
}

// Обработка изменения размера окна
function handleResize() {
    document.querySelectorAll('.floating-image').forEach(img => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    });
}

// Добавление библиотеки для скриншотов
const script = document.createElement('script');
script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script);

// Глобальные функции для отладки
window.debug = {
    getCurrentSlide: () => currentSlide,
    getTotalSlides: () => totalSlides,
    navigateToSlide: navigateToSlide,
    getPokeballCount: () => pokeballCount,
    getCaughtPokemon: () => Array.from(caughtPokemon),
    resetGame: () => {
        localStorage.removeItem('pokemonHunterData');
        location.reload();
    }
};
// --- 1. KHO NỘI DUNG CÁ NHÂN HÓA ---
// Danh sách anh em trong làng (có thể để riêng hoặc gộp)
const brothersInVillage = {
    "An": "Chúc An năm mới bớt stress, làm giàu không khó, sớm cưới vợ hiền nhé!",
    "Huy2k6": "Chúc Bình 'xoăn' năm mới vạn sự như ý, sức khỏe vô biên, tiền vào như nước!",
    "Huy2k7": "Chúc Cường năm mới code đâu thắng đó, không còn bug nào dám bén mảng!",
    "Hải": "abc",
    "Hoàng": "abc",
    "Tùng" : "abc",
};

const contentDatabase = {
    "Mother": {
        music: "Music/tetme.mp3",
        images: [
            { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600', caption: 'Code xuyên Tết' },
            { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600', caption: 'Bug-free Year' },
            { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600', caption: 'Thành công' }
        ],
        wishTemplate: "Chúc {name} tuổi {age} code không bug, deploy phát ăn ngay, lương thưởng x5, project nào cũng thành công rực rỡ!"
    },
    "elder sister": {
        music: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
        images: [
            { url: 'Image/elder_sister/anh1', caption: 'Thời trẻ trâu' },
            { url: 'Image/elder_sister/anh2', caption: 'Thời trẻ trâu' },
            { url: 'Image/elder_sister/anh3', caption: 'Thời trẻ trâu' },
            { url: 'Image/elder_sister/anh4', caption: 'Thời trẻ trâu' },
            { url: 'Image/elder_sister/anh5', caption: 'Thời trẻ trâu' },
            { url: 'Image/elder_sister/anh6', caption: 'Thời trẻ trâu' },

        ],
        wishTemplate: "Chúc {name} một năm 2026 ngập tràn ý tưởng, thiết kế nào cũng là tuyệt phẩm, khách hàng duyệt layout trong một nốt nhạc!"
    },
    "Grandfather": {
        music: "Music/tetbinhan.mp3",
        images: [
            { url: 'Image/grandfather/anh1.jpg', caption: 'Trẻ khỏe' },
            { url: 'Image/grandfather/anh2.jpg', caption: 'Khỏe mạnh' },
            { url: 'Image/grandfather/anh3.jpg', caption: 'Lãng tử' },
            { url: 'Image/grandfather/anh4.jpg', caption: 'Đẹp troai' },
            { url: 'Image/grandfather/anh5.jpg', caption: 'Cao to' },
            { url: 'Image/grandfather/anh6.jpg', caption: 'Vui vẻ' },
            { url: 'Image/grandfather/anh7.jpg', caption: 'Yêu đời' },
        ],
        wishTemplate: "Chúc ô {name} và gia đình có một năm mới thật là nhiều sức khỏe, luôn vui vẻ, yêu đời, tiền vào như nước sông đà chảy ra như cafe phin.Ô cố gắng giữ gìn sức khỏe ông cháu ta còn đi phượt Bắc Nam nha",
        avatar: "Image/grandfather/avt.jpg",
        qr: "Image/grandfather/QR.png",
    },
    "Blood brother": {
        music: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
        images: [
            { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600', caption: 'Trồng người' },
            { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', caption: 'Tri thức' },
            { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', caption: 'Hạnh phúc' }
        ],
        wishTemplate: "Chúc {name} luôn giữ lửa đam mê, sức khỏe dồi dào để chèo lái những chuyến đò tri thức cập bến thành công!"
    },
    "Friends": {
        music: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
        images: [
            { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600', caption: 'Riêng anh A' },
            { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600', caption: 'Bạn thân' }
        ],
        wishTemplate: "Chúc anh bạn {name} năm nay sớm có người yêu, tiền vào như nước, tình ra nhỏ giọt nhé!"
    },
    "brother": {
        music: "https://assets.mixkit.co/music/preview/mixkit-vietnamese-tet-holiday-120.mp3",
        images: [
            { url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600', caption: 'Gia đình' },
            { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600', caption: 'Hạnh phúc' },
        ],
        wishTemplate: "Chúc {name} tuổi {age} một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý, Tấn Tài Tấn Lộc!"
    },
    "brother_strees": {
        music: "https://assets.mixkit.co/music/preview/mixkit-vietnamese-tet-holiday-120.mp3",
        images: [
            { url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600', caption: 'Gia đình' },
            { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600', caption: 'Hạnh phúc' }
        ],
        getWish: function (name, age) {
            if (brothersInVillage[name]) {
                return brothersInVillage[name]; // Trả về lời chúc riêng trong làng
            }
            return `Chúc ${name} tuổi ${age} một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý!`; // Lời chúc mặc định
        }
    }

};

// --- DATABASE XÁC THỰC NGƯỜI DÙNG ---
const mockDatabase = [
    { name: "Nguyễn Thị Vui", role: "Mother", birthday: "19/01/1981" },
    { name: "Ưng Kiều Trang", role: "elder sister", birthday: "19/08/2004" },
    { name: "Kiếm", role: "Grandfather", birthday: "01/03/1972" },
    { name: "Lê Đức Anh", role: "Blood brother", birthday: "15/08/2007" },
    { name: "Nguoi than cua Dat", role: "best", birthday: "17/02/2026" },
    { name: "Bình", role: "brother_stress", birthday: "02/02/2000" },
];

// Biến toàn cục
let currentImages = [];
let isMobile = window.innerWidth < 768;
window.addEventListener('resize', () => { isMobile = window.innerWidth < 768; });

const countdownEl = document.getElementById('countdown');
const countdownScreen = document.getElementById('countdown-screen');
const fireworksScreen = document.getElementById('fireworks-screen');

const introEnvelopeScreen = document.getElementById('intro-envelope-screen');
const introEnvelope = document.getElementById('intro-envelope');
const introInst = document.getElementById('intro-inst');

const inputFormScreen = document.getElementById('input-form-screen');

const transitionScreen = document.getElementById('transition-screen');
const transitionText = document.getElementById('transition-text');

const slideScreen = document.getElementById('slideshow-screen');
const finalScreen = document.getElementById('final-screen');
const centerStage = document.getElementById('center-stage');
const globalParticles = document.getElementById('global-particles');
const personalWishes = document.getElementById('personal-wishes');

let canvas, ctx;
let fireworks = [];
let particles = [];
let animationId;
let userInfo = { name: '', role: '', birthday: '' };
let count = 10;
let fwInterval;
const vibrantColors = ['#FF0000', '#FFD700', '#00FF00', '#00FFFF', '#FF00FF', '#FFFFFF', '#FFA500', '#ADFF2F'];

/* --- LOGIC ĐẾM NGƯỢC --- */
setTimeout(() => {
    const timer = setInterval(() => {
        count--;
        countdownEl.classList.add('flip-digit');
        setTimeout(() => countdownEl.classList.remove('flip-digit'), 500);
        countdownEl.textContent = count;

        let intensity = (10 - count) * (isMobile ? 2 : 3);
        spawnManyFireworks(Math.max(3, intensity));

        if (count <= 5) {
            clearInterval(fwInterval);
            fwInterval = setInterval(() => spawnManyFireworks(isMobile ? 3 : 5), 400);
            countdownScreen.classList.add('screen-shake');
            if (count <= 3) {
                countdownEl.classList.add('critical-count');
                spawnManyFireworks(isMobile ? 8 : 15);
                const tickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
                tickSound.volume = 0.3; tickSound.play().catch(() => { });
            }
        }

        if (count <= 0) {
            clearInterval(timer); clearInterval(fwInterval);
            countdownEl.textContent = "2026"; countdownEl.style.fontSize = "22vw";
            spawnManyFireworks(isMobile ? 30 : 60);
            countdownScreen.classList.remove('screen-shake');
            setTimeout(() => {
                countdownScreen.style.opacity = 0;
                setTimeout(() => { countdownScreen.style.display = 'none'; startFireworksDisplay(); }, 1000);
            }, 2500);
        }
    }, 1000);
    fwInterval = setInterval(() => spawnManyFireworks(isMobile ? 2 : 3), 600);
}, 500);

/* --- HỆ THỐNG PHÁO HOA --- */
function startFireworksDisplay() {
    fireworksScreen.style.display = 'block';
    canvas = document.getElementById('fireworks-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    startFireworks();
    setTimeout(() => { document.querySelector('.fireworks-text').style.display = 'block'; }, 500);
    setTimeout(() => {
        stopFireworks();
        fireworksScreen.style.opacity = 0;
        setTimeout(() => { fireworksScreen.style.display = 'none'; showIntroEnvelope(); }, 1000);
    }, 12000);
}

function startFireworks() {
    function createFirework() {
        const color = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
        fireworks.push({
            x: Math.random() * canvas.width, y: canvas.height,
            targetX: Math.random() * canvas.width, targetY: Math.random() * (canvas.height / 2),
            speed: 3 + Math.random() * 3, color: color, radius: 3, exploded: false, trailLength: 25 + Math.random() * 20
        });
    }
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (Math.random() < 0.1) createFirework();
        for (let i = fireworks.length - 1; i >= 0; i--) {
            const fw = fireworks[i];
            if (!fw.exploded) {
                fw.x += (fw.targetX - fw.x) * 0.02; fw.y -= fw.speed;
                for (let j = 0; j < fw.trailLength; j++) {
                    const alpha = 1 - (j / fw.trailLength);
                    ctx.beginPath(); ctx.arc(fw.x, fw.y + j * 2, fw.radius * (1 - j / fw.trailLength), 0, Math.PI * 2);
                    ctx.fillStyle = hexToRgba(fw.color, alpha * 0.6); ctx.fill();
                }
                ctx.beginPath(); ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
                ctx.fillStyle = fw.color; ctx.fill(); ctx.shadowBlur = 10; ctx.shadowColor = fw.color;
                if (fw.y <= fw.targetY) { fw.exploded = true; ctx.shadowBlur = 0; explodeFirework(fw); }
            }
        }
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy; p.vy += p.gravity; p.alpha -= 0.006;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = hexToRgba(p.color, p.alpha); ctx.fill();
            if (Math.random() > 0.8) {
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.5})`; ctx.fill();
            }
            if (p.alpha <= 0) particles.splice(i, 1);
        }
        for (let i = fireworks.length - 1; i >= 0; i--) { if (fireworks[i].exploded) fireworks.splice(i, 1); }
        animationId = requestAnimationFrame(draw);
    }
    draw();
}

function hexToRgba(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function explodeFirework(fw) {
    const particleCount = 120 + Math.random() * 100;
    for (let tier = 0; tier < 3; tier++) {
        setTimeout(() => {
            for (let i = 0; i < particleCount / 3; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = (tier + 1) * (1.5 + Math.random() * 4);
                particles.push({
                    x: fw.x, y: fw.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
                    gravity: 0.04 + tier * 0.01, alpha: 1, radius: 1 + Math.random() * 2, color: fw.color
                });
            }
        }, tier * 80);
    }
}
function stopFireworks() { cancelAnimationFrame(animationId); fireworks = []; particles = []; }

/* --- LOGIC LÌ XÌ INTRO --- */
function showIntroEnvelope() {
    introEnvelopeScreen.style.display = 'flex';
    setTimeout(() => { introEnvelopeScreen.style.opacity = 1; }, 50);
    setTimeout(() => {
        spawnFireworkBurst(window.innerWidth / 2, window.innerHeight, isMobile ? 10 : 20, ['#FF0000', '#FFD700']);
        introEnvelope.classList.add('visible');
        setTimeout(() => { document.getElementById('intro-inst').classList.add('show'); }, 1200);
    }, 300);
    introEnvelope.addEventListener('click', function () {
        if (this.classList.contains('open')) return;
        this.classList.add('open');
        const openAudio = document.getElementById('open-sound');
        if (openAudio) openAudio.play().catch(e => { });
        spawnSpecificBurst(window.innerWidth / 2, window.innerHeight / 2, 30, ['#FFD700', '#FF0000'], 'coin');
        setTimeout(() => {
            introEnvelopeScreen.style.opacity = 0;
            setTimeout(() => { introEnvelopeScreen.style.display = 'none'; showInputForm(); }, 800);
        }, 1000);
    }, { once: true });
}

/* --- FORM NHẬP THÔNG TIN --- */
function showInputForm() {
    inputFormScreen.style.display = 'flex';
    setTimeout(() => inputFormScreen.style.opacity = 1, 100);
    document.getElementById('submit-info').addEventListener('click', validateForm);
    document.addEventListener('keypress', function (e) { if (e.key === 'Enter') validateForm(); });
}

function validateForm() {
    const nameInput = document.getElementById('user-name');
    const roleSelect = document.getElementById('user-role');
    const birthdayInput = document.getElementById('user-birthday');
    const nameError = document.getElementById('name-error');
    const roleError = document.getElementById('role-error');
    const birthdayError = document.getElementById('birthday-error');

    let isValid = true;
    nameError.style.display = 'none'; roleError.style.display = 'none'; birthdayError.style.display = 'none';

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) { nameError.style.display = 'block'; isValid = false; }
    else { userInfo.name = nameInput.value.trim(); }

    if (!roleSelect.value) { roleError.style.display = 'block'; isValid = false; }
    else { userInfo.role = roleSelect.value; }

    const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if (!birthdayInput.value || !dateRegex.test(birthdayInput.value.trim())) { birthdayError.style.display = 'block'; isValid = false; }
    else { userInfo.birthday = birthdayInput.value.trim(); }

    if (isValid) checkUserInDatabase();
}

function checkUserInDatabase() {
    const generalError = document.getElementById('general-error');
    const submitBtn = document.getElementById('submit-info');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Đang kiểm tra..."; submitBtn.disabled = true;

    setTimeout(() => {
        const userFound = mockDatabase.find(user => {
            return user.name.toLowerCase() === userInfo.name.toLowerCase() &&
                user.role === userInfo.role &&
                user.birthday === userInfo.birthday;
        });

        if (userFound) {
            let targetContent = contentDatabase['default'];

            if (contentDatabase[userInfo.name]) {
                targetContent = contentDatabase[userInfo.name];
            } else if (contentDatabase[userInfo.role]) {
                targetContent = contentDatabase[userInfo.role];
            }

            const musicEl = document.getElementById('bg-music');
            musicEl.src = targetContent.music;
            musicEl.load();

            currentImages = targetContent.images;

            const parts = userInfo.birthday.split('/');
            const birthYear = parseInt(parts[2], 10);
            const age = new Date().getFullYear() - birthYear;

            let finalWish = "";
            if (targetContent.getWish) {
                // Nếu là vai trò brother_stress (có hàm getWish)
                finalWish = targetContent.getWish(userFound.name, age);
            } else {
                // Nếu là các vai trò khác (dùng template cũ)
                finalWish = targetContent.wishTemplate
                    .replace("{name}", userFound.name)
                    .replace("{age}", age);
            }

            inputFormScreen.style.opacity = 0;
            setTimeout(() => {
                inputFormScreen.style.display = 'none';
                showTransitionScreen();
            }, 500);
        } else {
            generalError.innerHTML = "Không tìm thấy thông tin trùng khớp.<br>Hãy thử: Nguoi than cua Dat | best | 17/02/2026";
            generalError.style.display = 'block';
            submitBtn.textContent = originalText; submitBtn.disabled = false;
        }
    }, 1500);
}

/* --- TRANSITION --- */
function showTransitionScreen() {
    transitionScreen.style.display = 'flex';
    transitionText.style.opacity = 1; transitionText.innerHTML = '';
    const line1Text = "Cùng nhìn lại những khoảnh khắc 2025";
    const line2Text = userInfo.name;
    transitionText.innerHTML = '<div id="type-line-1" style="display:inline-block"></div><br><div id="type-line-2" style="color: white; font-size: 0.8em; margin-top: 10px; display:inline-block"></div><span class="cursor"></span>';
    const elLine1 = document.getElementById('type-line-1');
    const elLine2 = document.getElementById('type-line-2');
    let i = 0;
    function typeLine1() {
        if (i < line1Text.length) { elLine1.textContent += line1Text.charAt(i); i++; setTimeout(typeLine1, 50); }
        else {
            setTimeout(() => {
                let j = 0;
                function typeLine2() {
                    if (j < line2Text.length) { elLine2.textContent += line2Text.charAt(j); j++; setTimeout(typeLine2, 50); }
                    else {
                        document.querySelector('.cursor').style.display = 'none';
                        setTimeout(() => {
                            transitionText.style.transition = 'opacity 1s ease'; transitionText.style.opacity = 0;
                            setTimeout(() => { transitionScreen.style.display = 'none'; startSlideshow(); }, 1000);
                        }, 2000);
                    }
                } typeLine2();
            }, 300);
        }
    } typeLine1();
}

/* --- SLIDESHOW --- */
let currentIdx = 0;
const slideContainer = document.getElementById('slide-container');
const slideCaption = document.getElementById('slide-caption');

function startSlideshow() {
    clearInterval(fwInterval);
    slideScreen.style.display = 'flex';
    showNextImage();
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            document.getElementById('music-toggle').style.animation = 'spin 5s linear infinite';
        }).catch(e => console.log("Cần tương tác để phát nhạc"));
    }
}

function showNextImage() {
    if (currentIdx >= currentImages.length) {
        setTimeout(showFinalScreen, 1000);
        return;
    }
    const data = currentImages[currentIdx];
    const img = document.createElement('img');
    img.src = data.url; img.className = 'slide-img';
    slideContainer.appendChild(img);

    setTimeout(() => {
        img.classList.add('active');
        slideCaption.textContent = data.caption; slideCaption.style.opacity = 1;
        spawnFireworkBurst(window.innerWidth / 2, window.innerHeight / 2, isMobile ? 5 : 10, ['#FFD700']);
    }, 100);

    setTimeout(() => {
        img.classList.remove('active'); slideCaption.style.opacity = 0;
        setTimeout(() => { img.remove(); currentIdx++; showNextImage(); }, 1500);
    }, 2500);
}

/* --- FINAL SCREEN (LOGIC MỚI - ẢNH TO BAY QUANH LÌ XÌ) --- */
function showFinalScreen() {
    slideScreen.style.display = 'none';
    finalScreen.style.display = 'block';
    setTimeout(() => { document.getElementById('final-envelope-container').classList.add('show'); }, 500);

    const total = currentImages.length;

    // Bán kính rộng hơn để ảnh to không che lì xì
    const radiusX = isMobile ? window.innerWidth * 0.45 : 500;
    const radiusY = isMobile ? 80 : 150;

    const angleStep = (2 * Math.PI) / total;
    let baseAngle = 0;
    const satellites = [];

    // Xóa vệ tinh cũ
    const oldSats = document.querySelectorAll('.satellite-item');
    oldSats.forEach(el => el.remove());

    // TẠO VỆ TINH
    currentImages.forEach((data, i) => {
        const div = document.createElement('div');
        div.className = 'satellite-item';
        div.innerHTML = `<img src="${data.url}" alt="Ky niem">`;

        // Kích thước ảnh to (160px desktop, 100px mobile)
        const sizeW = isMobile ? 100 : 160;

        div.style.width = sizeW + 'px';
        div.style.height = sizeW + 'px';

        // Căn giữa điểm neo
        div.style.marginLeft = (-sizeW / 2) + 'px';
        div.style.marginTop = (-sizeW / 2) + 'px';

        centerStage.appendChild(div);
        satellites.push({ el: div, index: i, angleOffset: i * angleStep });
    });

    // ANIMATION LOOP (Chỉ xoay, không logic click)
    function animateSatellites() {
        baseAngle += 0.002; // Tốc độ xoay chậm rãi

        satellites.forEach(sat => {
            const currentAngle = baseAngle + sat.angleOffset;
            const x = Math.cos(currentAngle) * radiusX;
            const y = Math.sin(currentAngle) * radiusY;

            // Hiệu ứng 3D: Càng gần (y lớn) càng to và rõ
            // y chạy từ -radiusY đến +radiusY
            const scaleFactor = 0.7 + ((y + radiusY) / (2 * radiusY)) * 0.6; // Scale từ 0.7 đến 1.3

            // Opacity: ở xa mờ hơn chút
            const opacity = 0.5 + (scaleFactor - 0.7) * 1.5;

            // Z-Index: 
            // Lì xì ở giữa có z-index: 100.
            // Vệ tinh ở xa (y < 0) -> z-index < 100.
            // Vệ tinh ở gần (y > 0) -> z-index > 100.
            const zIndex = Math.floor(y + 200);

            sat.el.style.transform = `translate(${x}px, ${y}px) scale(${scaleFactor})`;
            sat.el.style.zIndex = zIndex;
            sat.el.style.opacity = Math.min(1, Math.max(0.4, opacity));

            // Blur nhẹ khi ở xa
            sat.el.style.filter = y < -20 ? 'blur(2px)' : 'none';
        });

        requestAnimationFrame(animateSatellites);
    }

    requestAnimationFrame(animateSatellites);
    setInterval(() => spawnManyFireworks(Math.random() * (isMobile ? 1 : 2) + 1), 3000);
}

/* --- XỬ LÝ LÌ XÌ FINAL & MƯA TIỀN --- */
const envelope = document.getElementById('final-envelope');
const modal = document.getElementById('red-envelope-screen');
const openSound = document.getElementById('open-sound');
const burstSound = document.getElementById('burst-sound');
let dustInterval;

function startMoneyRain() {
    const duration = 5000;
    const interval = 100;

    const rainInterval = setInterval(() => {
        createFallingMoney(Math.random() > 0.5 ? 'bill' : 'coin');
        setTimeout(() => createFallingMoney(Math.random() > 0.5 ? 'bill' : 'coin'), 50);
    }, interval);

    setTimeout(() => { clearInterval(rainInterval); }, duration);
}

function createFallingMoney(type) {
    const el = document.createElement('div');
    el.classList.add('falling-money');
    el.classList.add(type === 'bill' ? 'money-bill' : 'money-coin');

    const startX = Math.random() * window.innerWidth;
    el.style.left = startX + 'px';

    const fallDuration = Math.random() * 3 + 2;
    el.style.animationDuration = fallDuration + 's';

    const scale = Math.random() * 0.5 + 0.5;
    el.style.transform = `scale(${scale})`;

    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, fallDuration * 1000);
}

envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    if (openSound) openSound.play().catch(e => { });

    startMoneyRain();

    setTimeout(() => {
        if (burstSound) burstSound.play().catch(e => { });
        const coinCount = isMobile ? 30 : 60; const confettiCount = isMobile ? 50 : 100;
        spawnSpecificBurst(window.innerWidth / 2, window.innerHeight / 2, coinCount, ['#FFD700', '#FFA500'], 'coin');
        spawnSpecificBurst(window.innerWidth / 2, window.innerHeight / 2, confettiCount, ['#FF0000', '#FFFF00', '#FF4500'], 'confetti');

        setTimeout(() => {
            modal.style.display = 'flex';
            dustInterval = setInterval(createGoldDust, 200);
        }, 800);
    }, 600);
});
function closeModal() { modal.style.display = 'none'; clearInterval(dustInterval); envelope.classList.remove('open'); }

/* --- FIREWORKS ENGINE --- */
function spawnManyFireworks(n) {
    for (let i = 0; i < n; i++) { setTimeout(() => { spawnFireworkBurst(Math.random() * window.innerWidth, Math.random() * window.innerHeight * 0.7, Math.random() * 15 + 15, vibrantColors); }, Math.random() * 800); }
}
function spawnFireworkBurst(x, y, count, colors) { for (let i = 0; i < count; i++) createParticle(x, y, colors); }
function createParticle(x, y, colors) {
    const p = document.createElement('div'); p.className = 'burst-particle';
    globalParticles.appendChild(p);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * (isMobile ? 3 : 4) + 2; const angle = Math.random() * Math.PI * 2; const vel = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * vel; const ty = Math.sin(angle) * vel + 100;
    p.style.left = x + 'px'; p.style.top = y + 'px'; p.style.width = size + 'px'; p.style.height = size + 'px';
    p.style.background = color; p.style.boxShadow = `0 0 ${size}px ${color}`;
    p.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }], { duration: Math.random() * 800 + 600, easing: 'cubic-bezier(0.25,1,0.5,1)' }).onfinish = () => p.remove();
}
function spawnSpecificBurst(x, y, count, colors, type) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div'); p.className = 'burst-particle'; globalParticles.appendChild(p);
        const color = colors[Math.floor(Math.random() * colors.length)]; const size = Math.random() * 6 + 3;
        const angle = Math.random() * Math.PI * 2; const vel = Math.random() * 200 + 80;
        const tx = Math.cos(angle) * vel; const ty = Math.sin(angle) * vel + 250;
        p.style.left = x + 'px'; p.style.top = y + 'px'; p.style.width = size + 'px'; p.style.height = (type === 'coin' ? size : size * 1.5) + 'px';
        p.style.background = color; if (type === 'coin') { p.style.borderRadius = '50%'; p.style.border = '1px solid gold'; } else { p.style.borderRadius = '0'; }
        p.animate([{ transform: 'translate(0,0) rotate(0deg)', opacity: 1 }, { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }], { duration: Math.random() * 1200 + 800, easing: 'ease-out' }).onfinish = () => p.remove();
    }
}
function createGoldDust() {
    const d = document.createElement('div'); d.className = 'gold-dust'; d.style.left = Math.random() * 100 + '%'; d.style.top = '-10px';
    document.getElementById('modal-particles').appendChild(d); setTimeout(() => d.remove(), 3000);
}

/* --- AUDIO --- */
const musicBtn = document.getElementById('music-toggle');
let playing = false;
document.body.addEventListener('click', () => { if (!playing && document.getElementById('bg-music')) { document.getElementById('bg-music').play().catch(e => { }); playing = true; musicBtn.style.animation = 'spin 5s linear infinite'; } }, { once: true });
musicBtn.addEventListener('click', (e) => { e.stopPropagation(); const bg = document.getElementById('bg-music'); if (playing) { bg.pause(); musicBtn.style.animation = 'none'; } else { bg.play(); musicBtn.style.animation = 'spin 5s linear infinite'; } playing = !playing; });
window.addEventListener('resize', () => { if (canvas) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } });
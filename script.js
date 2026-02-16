// --- 1. KHO NỘI DUNG CÁ NHÂN HÓA (GIỮ NGUYÊN TÊN BIẾN CỦA BẠN) ---
const brothersInVillage = {
    "An": "Chúc mày có 1 năm mới thật nhiều sức khỏe, niềm vui ngập tràn, mọi dự định sẽ đều suôn sẻ và thành công.Mong rằng trong năm tới a và chú sẽ có thật nhiều kỉ niệm đẹp bên nhau!",
    "Huy": "Chúc mày năm mới vạn sự như ý, sức khỏe vô biên, tiền vào như nước sông đà, chảy ra như giọt cafe phin.Mong bạn luôn bình an, khỏe mạnh , sống đúng với điều mà bản thân mình mong muốn.Mong rằng trong năm tới chúng ta sẽ có thật nhiều kỉ niệm đẹp bên nhau!",
    "Cường": "Chúc ô a Cường năm mới thật nhiều sức khỏe, tiền vào như nước sông đà, chảy ra như giọt cafe phin.Chúc anh có 1 năm mới thật rực rỡ như hành trình của e nè haha.Mong rằng anh em ta sẽ có 1 năm mới thật nhiều kỉ niệm đẹp bên nhau!",
    "Hải": "Năm mới a chúc Hải 'Chân cứng đá mềm', biến những trải nghiệm trường đời sớm thành vốn sống quý giá. Tết là để về nhà, mong năm nay công việc hanh thông, ví dày, tâm an, để mỗi lần tụ họp vẫn luôn cười tươi rói nhé.Mong rằng anh em ta năm mới sẽ có thật nhiều kỉ niệm bên nhau!",
    "Hoàng": "Chúc Hoàng năm mới rực rỡ. 18 tuổi, người ta còn lo trang sách, em đã lo được nồi cơm, cái bản lĩnh ấy anh nể. Nhưng IT là đường đua khắc nghiệt, chúc em năm nay:Tối ưu hóa cuộc sống. Không có bằng cấp thì mình phải dùng đẳng cấp để nói chuyện. Kiếm tiền giỏi rồi, giờ nhớ giữ gìn sức khỏe và nâng cấp bản thân liên tục để không bao giờ bị tụt hậu nhé.Mong rằng anh em ta sang năm mới sẽ có thật nhiều kỉ niệm đáng nhớ trong năm mới!",
    "Hưng": "Năm mới Tết đến, tao trân trọng đề nghị mày năm nay bớt 'ngáo', bớt 'báo' lại giùm tao cái. Chúc mày năm 2026 nhan sắc thăng hạng (để sớm lừa được em nào về ra mắt mẹ), tài khoản thì lúc nào cũng ting ting (để tao còn vay nóng lúc cần).Đi làm thì mong mày gặp được sếp hiền như Bụt, đồng nghiệp như tiên, deadline thì tự nhiên biến mất. Ra đường thì xe cộ cẩn thận, đừng có phóng nhanh vượt ẩu rồi lại báo gia đình. Nhậu nhẹt thì uống vừa thôi, gan ruột nó cũng có hạn sử dụng đấy con ạ.Chốt lại: Chúc mày năm mới 8386 (phát tài phát lộc), sớm thành đại gia để bao tao đi massage xông hơi. Happy New Year tml (thằng mặt lợn)!"
};

const contentDatabase = {
    "Mother": {
        music: "Music/me.mp3",
        images: [
            { url: 'Image/mom/0.jpg', caption: 'Mẹ tôi đó' },
            { url: 'Image/mom/1.jpg', caption: 'Yêu đời' },
            { url: 'Image/mom/2.jpg', caption: 'Mẹ và biển' },
            { url: 'Image/mom/3.jpg', caption: 'Hạnh phúc được đi du lịch cùng mẹ' },
            { url: 'Image/mom/4.jpg', caption: 'Hai người phụ nữ đẹp nhất' },
            { url: 'Image/mom/5.jpg', caption: '2 mẹ con tươi không cần tưới' },
            { url: 'Image/mom/6.jpg', caption: 'Mẹ đang khóc nhè nè' },
            { url: 'Image/mom/7.jpg', caption: 'My family' },
            { url: 'Image/mom/8.jpg', caption: 'Sinh nhật mẹ iu' },
            { url: 'Image/mom/9.jpg', caption: 'Mẹ và các bác trong tà áo dài' },
            { url: 'Image/mom/10.jpg', caption: 'Mẹ bên bà ngoại nè' },
            { url: 'Image/mom/13.jpg', caption: 'Mẹ hóa thân thành dân tộc nè' },
            { url: 'Image/mom/11.jpg', caption: 'Kỉ niệm sum vầy bên bà' },
            { url: 'Image/mom/12.jpg', caption: 'Hai mẹ con cười giống hệt nhau' },
           
        ],
        wishTemplate: "Chúc mẹ {name} bước sang tuổi {age} luôn mạnh khỏe, vui vẻ bên con cháu. Cảm ơn mẹ đã luôn là chỗ dựa vững chắc cho con!"
    },
    "elder sister": {
        music: "Music/chigai.mp3",
        images: [
            { url: 'Image/elder_sister/0.jpg', caption: 'Bị chị gõ đầu nè' },
            { url: 'Image/elder_sister/1.jpg', caption: '2 chị emmm' },
            { url: 'Image/elder_sister/2.jpg', caption: 'Tuổi thơ' },
            { url: 'Image/elder_sister/3.jpg', caption: 'Quá khứ của hot-girl' },
            { url: 'Image/elder_sister/4.jpg', caption: '2 chị em chung 1 khung hình' },
            { url: 'Image/elder_sister/5.jpg', caption: 'Hóa thân thành nông dân' },
            { url: 'Image/elder_sister/6.jpg', caption: 'Thành quả cho sự cố gắng' },
            { url: 'Image/elder_sister/7.jpg', caption: 'Đang tập giảm - fat' },
            { url: 'Image/elder_sister/anh2.jpg', caption: 'Khóc nhè' },
            { url: 'Image/elder_sister/anh3.jpg', caption: 'Nhớ mmc' },
            { url: 'Image/elder_sister/anh4.jpg', caption: 'Seo phì' },
            { url: 'Image/elder_sister/anh5.jpg', caption: 'Phút giây thư giãn bên cô chị gái' },
            { url: 'Image/elder_sister/an7.jpg', caption: 'Chụp ảnh noel' },
            { url: 'Image/elder_sister/8.jpg', caption: 'Sành điệu phết' },
            { url: 'Image/elder_sister/9.jpg', caption: 'Hoa đẹp hay người đẹp ?' },
        ],
        wishTemplate: "Năm nay so với năm trước chị cũng đã có những thay đổi, bước chuyển mình , tiến bộ hơn rất nhiều rồi.Để rồi chị cũng đã nhận được những phần quà, thành tựu đúng với công sức mà chị đã bỏ ra.Chúc chị gái của em sang năm mới sẽ có 1 năm thật là bùng nổ hơn nữa,chị hãy cố gắng giữ gìn sức khỏe vì có sức khỏe mới có thể làm được mọi việc được.Năm mới chị cố hãy cố gắng hạn chế được những thói quen chưa được tốt và hãy tiếp tục phát huy những điểm mạnh của mình.Chúc chị trong năm mới sẽ đạt được những mục tiêu mà bản thân đã đề ra.Chị hãy tiếp tục theo đuổi con đường bản thân mình đã chọn, làm những việc mình thích hãy luôn nhớ rằng ở phía sau chị luôn có mẹ và em luôn luôn đồng hành,ủng hộ cùng chị trong mọi con đường chị lựa chọn!(PS: Chúc chị kiếm được nhiều tiền để mua thật nhiều xúc xích cho em nhaaa, chị sớm có gấu để mùa đông không lạnh nha)"
    },
    "Grandfather": {
        music: "Music/tetbinhan.mp3",
        images: [
            { url: 'Image/grandfather/anh1.jpg', caption: 'Cao Bồi Miền Tây' },
            { url: 'Image/grandfather/anh2.jpg', caption: 'Trùm Cuối Xuất Hiện' },
            { url: 'Image/grandfather/anh3.jpg', caption: 'Lên Đồ, Hế Lâuu' },
            { url: 'Image/grandfather/anh4.jpg', caption: 'Mùa Đông Không Lạnh' },
            { url: 'Image/grandfather/anh5.jpg', caption: 'Đọ Dáng-Khỏe Mạnh' },
            { url: 'Image/grandfather/anh6.jpg', caption: 'Du Xuân' },
            { url: 'Image/grandfather/anh7.jpg', caption: 'Yêu Đời' },
        ],
        wishTemplate: "Chúc ông {name} và gia đình có một năm mới thật là nhiều sức khỏe, luôn vui vẻ, yêu đời. Ông cố gắng giữ gìn sức khỏe để ông cháu ta còn đi phượt Bắc Nam nha!",
        avatar: "Image/grandfather/avt.jpg",
        qr: "Image/grandfather/QR.png",
    },
    "brother_village": {
        music: "Music/anhem.mp3",
        images: [
            { url: 'Image/brother_stress/anh0.jpg', caption: 'Thời đi phát lộc' },
            { url: 'Image/brother_stress/anhdiboi.jpg', caption: 'Sóng gió phủ đời trai' },
            { url: 'Image/brother_stress/dichoi.jpg', caption: 'Biệt đội báo thủ' },
            { url: 'Image/brother_stress/anhdangdayhoc.jpg', caption: 'Học hành' },
            { url: 'Image/brother_stress/an1.jpg', caption: 'Lẩu Nóng' },
            { url: 'Image/brother_stress/an2.jpg', caption: 'Quẩy' },
            { url: 'Image/brother_stress/an3.jpg', caption: 'Anh em mãi đỉnh' },
            { url: 'Image/brother_stress/an4.jpg', caption: 'No Say' },
            { url: 'Image/brother_stress/anh5.jpg', caption: 'Sinh nhật bạn Huy' },
            { url: 'Image/brother_stress/anh8.jpg', caption: 'Đi tìm bình yên' },
            { url: 'Image/brother_stress/anh6.jpg', caption: 'Bỏ phố về rừng' },
            { url: 'Image/brother_stress/anh7.jpg', caption: 'Gác lại lo âu' },
        ]
    },
    "brother": {
        music: "Music/brother.mp3",
        images: [
            { url: 'Image/brother/Datt.jpg', caption: 'Đẹp trai ' },
            { url: 'Image/brother/Tung.jpg', caption: 'Bựa nhất' },
            { url: 'Image/brother/Duc.jpg', caption: 'Hát hay' },
            { url: 'Image/brother/Hien.jpg', caption: 'Trùm lẩn' },
            { url: 'Image/brother/Tung2.jpg', caption: 'Bình thân miễn lễ' },
            { url: 'Image/brother/an0.jpg', caption: 'Lần đầu tụ tập' },
            { url: 'Image/brother/an1.jpg', caption: 'No say' },
            { url: 'Image/brother/snHung.jpg', caption: 'Sinh nhật Hưng Vagasto' },
            { url: 'Image/brother/snDuc.jpg', caption: 'Sinh nhật Đức' },
            { url: 'Image/brother/sn1.jpg', caption: 'Sinh nhật Đạt dz' },
            { url: 'Image/brother/tammua.jpg', caption: 'Tâm sự dưới mưa' },
            { url: 'Image/brother/lh.jpg', caption: 'Liên hoan cuối năm' },
            { url: 'Image/brother/lh1.jpg', caption: 'Hát cuối năm' },
        ]
    }
};

// --- HÀM LẤY LỜI CHÚC (Đã sửa để dùng biến brothersInVillage & thêm GENDER) ---
function getWish(name, age, vaiVe = "thap", gender = "nam") {
    // 1. Kiểm tra lời chúc riêng trong biến brothersInVillage
    if (brothersInVillage[name]) {
        return brothersInVillage[name];
    }
    // 3. Tính tuổi
    const myBirthYear = 2006;
    const currentYear = new Date().getFullYear();
    const friendBirthYear = currentYear - age;

    // 3.1 XỬ LÝ DANH XƯNG (ANH/CHỊ) DỰA VÀO GENDER
    let danhXung = (gender === "nu") ? "Chị" : "Anh";

    // --- LOGIC CHO NGƯỜI LỚN TUỔI HƠN (Sinh trước 2006) - Phiên bản "CHẠM ĐÁY TIM" ---
    if (friendBirthYear < myBirthYear) {
        const touchingWishes = [
            // CÂU 1: Đánh vào sự "gồng gánh" của người lớn
            `Gửi ${danhXung} ${name}: Người lớn thường ít khi được hỏi 'có mệt không'. Năm mới, em không chúc giàu sang phú quý, chỉ mong ${danhXung} mỗi tối về nhà đều trút bỏ được gánh nặng ngoài kia, ngủ một giấc thật ngon và thương bản thân mình nhiều hơn chút nữa.`,

            // CÂU 2: Chúc sự cân bằng (Ra đường vs Về nhà)
            `Chúc ${danhXung} ${name} năm mới: Ra đường là 'cá chép hóa rồng' hô mưa gọi gió, nhưng về nhà được làm 'mèo lười' thảnh thơi sưởi nắng. Mạnh mẽ đủ rồi, năm nay hãy cho phép mình được yếu mềm và tận hưởng thành quả nhé!`,

            // CÂU 3: Chúc về giá trị thời gian (Sống chậm)
            `Năm tháng vội vã, em chỉ chúc ${danhXung} ${name} sống chậm lại một nhịp. Ăn bữa cơm ngon, uống tách trà ấm. Tiền bạc là phương tiện, sự bình an trong tâm hồn mới là đích đến cuối cùng.`,

            // CÂU 4: Sự biết ơn sâu sắc (Dành cho người anh/chị hay giúp đỡ)
            `Cảm ơn ${danhXung} ${name} đã luôn là bóng cây lớn che chở cho mấy đứa em. Năm nay, chúc 'cây đại thụ' ấy mãi xanh tươi, gốc rễ vững bền, nhưng cũng đón nhận được thật nhiều ánh nắng ấm áp và yêu thương nhất.`,

            // CÂU 5: Chúc sự "Đủ" (Tri túc)
            `Chúc ${danhXung} ${name} một năm mới Vừa Đủ: Đủ sức khỏe để đi xa, Đủ bản lĩnh để vượt khó, Đủ tiền bạc để an tâm, và Đủ tình thương để thấy đời này thật đáng sống.`
        ];
        // Chọn ngẫu nhiên 1 câu "xuất sắc"
        return touchingWishes[Math.floor(Math.random() * touchingWishes.length)];
    }
    else if (friendBirthYear === myBirthYear) {
        return `Chúc bạn hiền ${name} năm mới vạn sự như ý, Tuổi 20 rực rỡ! Chúc mày vững vàng mục tiêu, đánh đâu thắng đó, sớm tự chủ tài chính để chúng ta sớm có thể đi du lịch xa một chuyến!.Sớm có gấu để mùa đông không lạnh nha!.`;
    }
    else {
        return `Năm mới Chúc ${name} chân cứng đá mềm giữa dòng đời, nhưng về nhà vẫn là đứa con hiếu thảo. Thành công không cần quá ồn ào, chỉ cần em sống bản lĩnh, tử tế và tìm thấy sự bình yên trong chính mình.Mong rằng trong năm mới chúng ta có thật nhiều kỉ niệm bên nhau!.Sớm có gấu để mùa đông không lạnh nha!`;
    }
}


// --- HÀM XỬ LÝ CHECK USER (Cập nhật: Thêm lời chúc riêng cho nhóm BROTHER) ---
// --- HÀM XỬ LÝ CHECK USER (HỖ TRỢ CẢ GUEST / NGƯỜI LẠ) ---
function checkUserInDatabase() {
    const generalError = document.getElementById('general-error');
    const submitBtn = document.getElementById('submit-info');
    
    // Nút đang xử lý...
    submitBtn.textContent = "Đang kiểm tra...";
    submitBtn.disabled = true;

    setTimeout(() => {
        // 1. Tìm trong database
        let userFound = mockDatabase.find(user => {
            return user.name.toLowerCase() === userInfo.name.toLowerCase() &&
                user.birthday === userInfo.birthday;
        });

        // --- LOGIC MỚI: NẾU KHÔNG THẤY THÌ TẠO USER TẠM (GUEST) ---
        if (!userFound) {
            // Tạo user ảo cho khách vãng lai
            userFound = {
                name: userInfo.name,
                role: 'Guest', // Đặt role là Guest
                birthday: userInfo.birthday,
                vaive: 'thap', // Mặc định vai vế thấp để xưng hô lịch sự
                gender: userInfo.gender // Lấy giới tính từ form nhập
            };
        }
        
        // (Lúc này userFound luôn tồn tại, dù là khách hay người quen)

        // --- BƯỚC 1: XÁC ĐỊNH NỘI DUNG (CONTENT) ---
        let targetContent = null;

        // Ưu tiên tìm content theo Tên -> Role nhập vào -> Role trong DB
        if (contentDatabase[userInfo.name]) {
            targetContent = contentDatabase[userInfo.name];
        } 
        else if (contentDatabase[userInfo.role]) { // Role người dùng chọn trong form
            targetContent = contentDatabase[userInfo.role];
        }
        else if (userFound.role === "brother") { // Check role trong DB
             targetContent = contentDatabase["brother"];
        }
        else if (userFound.role === "brother_stress" || userFound.role === "Blood brother") {
             targetContent = contentDatabase["brother_village"];
        }

        // --- BƯỚC 2: XỬ LÝ ẢNH & AVATAR ---
        if (targetContent) {
            // TRƯỜNG HỢP: CÓ DATA RIÊNG (Người quen)
            currentImages = targetContent.images || []; // Nếu không có ảnh thì mảng rỗng

            if (targetContent.avatar) document.getElementById('final-avatar').src = targetContent.avatar;
            if (targetContent.qr) document.getElementById('final-qr').src = targetContent.qr;

            if (targetContent.music) {
                const musicEl = document.getElementById('bg-music');
                musicEl.src = targetContent.music;
                musicEl.loop = false;
                musicEl.load();
                if (playing) musicEl.play().catch(e => {});
            }
        } else {
            // TRƯỜNG HỢP: KHÁCH (GUEST) - Dùng mặc định
            currentImages = []; // Không có ảnh kỷ niệm
            
            // Avatar Thần Tài mặc định
            document.getElementById('final-avatar').src = "Image\anhthantai.jpg";
            // QR mặc định
            document.getElementById('final-qr').src = "Image/grandfather/QR.png"; 

            // Nhạc Tết chung
            const musicEl = document.getElementById('bg-music');
            musicEl.src = "Music/tetbinhan.mp3"; 
            musicEl.load();
            if (playing) musicEl.play().catch(e => {});
        }

        // --- BƯỚC 3: XỬ LÝ LỜI CHÚC ---
        const parts = userInfo.birthday.split('/');
        const birthYear = parseInt(parts[2], 10);
        const age = new Date().getFullYear() - birthYear;
        // Lấy tên ngắn (Ví dụ: "Nguyễn Văn A" -> "A")
        const shortName = userFound.name.trim().split(' ').pop(); 

        let finalWish = "";

        // 1. Nếu có tên trong danh sách chúc riêng (brothersInVillage)
        if (brothersInVillage[shortName]) {
            finalWish = brothersInVillage[shortName];
        }
        // 2. Nếu là nhóm Brother (Bạn học)
        else if (userInfo.role === "brother" || userFound.role === "brother") {
            finalWish = `Chúc bạn hiền ${shortName} năm mới 2026 rực rỡ! Học hành thì qua môn vèo vèo, GPA cao chót vót. Sớm có gấu để mùa đông không lạnh. Tiền bạc rủng rỉnh, nhớ bao tao đi ăn nhé! Mãi là anh em tốt!`;
        }
        // 3. Nếu có template chúc (Mẹ, Ông...)
        else if (targetContent && targetContent.wishTemplate) {
            finalWish = targetContent.wishTemplate.replace("{name}", shortName).replace("{age}", age);
        }
        // 4. MẶC ĐỊNH CHO GUEST (Người lạ) -> Chúc theo tuổi/vai vế
        else {
            finalWish = getWish(shortName, age, userFound.vaive, userInfo.gender);
        }

        const wishContainer = document.getElementById('personal-wishes');
        if (wishContainer) wishContainer.textContent = finalWish;

        // --- BƯỚC 4: CHUYỂN MÀN HÌNH ---
        // Ẩn form nhập liệu
        inputFormScreen.style.opacity = 0;
        setTimeout(() => {
            inputFormScreen.style.display = 'none';

            // Nếu là Guest (thường không có ảnh) -> Vào thẳng màn hình lì xì
            if (currentImages.length === 0) {
                transitionScreen.style.display = 'none'; 
                showFinalScreen(); 
            } else {
                // Nếu có ảnh (người quen) -> Hiện màn hình intro chạy chữ
                showTransitionScreen(); 
            }
        }, 500);

    }, 1000); // Giả lập thời gian chờ 1 giây cho nguy hiểm
}
const mockDatabase = [
    { name: "Nguyễn Thị Vui", role: "Mother", birthday: "19/01/1981" },
    { name: "Ưng Kiều Trang", role: "elder sister", birthday: "19/08/2004" },
    { name: "Lê Thanh Kiếm", role: "Grandfather", birthday: "01/03/1972" },
    { name: "Lê Đức Anh", role: "Blood brother", birthday: "15/08/2007" },
    { name: "Lê Bình An", role: "brother_stress", birthday: "07/01/2006" },
    { name: "Nguyễn Gia Huy", role: "brother_stress", birthday: "07/12/2006" },
    { name: "Lê Hoàng Hải", role: "brother_stress", birthday: "09/11/2006", vaive: "Thap" },
    { name: "Nguyễn Quang Huy", role: "brother_stress", birthday: "11/02/2007" },
    { name: "Hoàng Tiến Tùng", role: "brother_stress", birthday: "30/08/2006" },
    { name: "Lê Đức Anh", role: "brother_stress", birthday: "15/08/2007" },
    { name: "Nguyễn Việt Hoàng", role: "brother_stress", birthday: "05/11/2008" },
    { name: "Lê Trí Hiển", role: "brother", birthday: "22/07/2006" },
    { name: "Vũ Minh Đức", role: "brother", birthday: "11/09/2006" },
    { name: "Nguyễn Mai Nhật Anh", role: "brother", birthday: "24/05/2006" },
    { name: "Nguyễn Tuấn Hưng", role: "brother", birthday: "12/06/2006" },
];

// --- 2. BIẾN TOÀN CỤC & INIT ---
let currentImages = [];
let isMobile = window.innerWidth < 768;
let hasStarted = false; // Biến kiểm tra xem đã bắt đầu chưa

// Thêm trường gender vào userInfo
let userInfo = { name: '', role: '', birthday: '', gender: '' };

window.addEventListener('resize', () => {
    isMobile = window.innerWidth < 768;
    if (canvas) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
});

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
const musicBtn = document.getElementById('music-toggle');

let canvas, ctx;
let fireworks = [];
let particles = [];
let animationId;
let count = 10;
let fwInterval;
let playing = false;

const vibrantColors = ['#FF0000', '#FFD700', '#00FF00', '#00FFFF', '#FF00FF', '#FFFFFF', '#FFA500', '#ADFF2F'];

// --- 3. LOGIC KÍCH HOẠT ---

function handleUserInteraction() {
    if (hasStarted) return;
    hasStarted = true;

    document.getElementById('start-hint').style.display = 'none';

    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.loop = false;
        bgMusic.play().then(() => {
            musicBtn.style.animation = 'spin 5s linear infinite';
            playing = true;
        }).catch(e => console.log("Không thể phát nhạc: ", e));
    }

    startCountdownProcess();
}

document.body.addEventListener('click', handleUserInteraction);
document.body.addEventListener('touchstart', handleUserInteraction);

function startCountdownProcess() {
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
}

/* --- 4. HỆ THỐNG PHÁO HOA --- */
function startFireworksDisplay() {
    fireworksScreen.style.display = 'block';
    canvas = document.getElementById('fireworks-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    startFireworks();
    setTimeout(() => { document.querySelector('.fireworks-text').style.opacity = 1; }, 500);
    setTimeout(() => {
        stopFireworks();
        fireworksScreen.style.opacity = 0;
        setTimeout(() => { fireworksScreen.style.display = 'none'; showIntroEnvelope(); }, 1000);
    }, 8000); // Rút ngắn thời gian intro để test nhanh hơn
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

/* --- 5. LOGIC LÌ XÌ INTRO --- */
function showIntroEnvelope() {
    introEnvelopeScreen.style.display = 'flex';
    setTimeout(() => { introEnvelopeScreen.style.opacity = 1; }, 50);
    setTimeout(() => {
        spawnFireworkBurst(window.innerWidth / 2, window.innerHeight, isMobile ? 10 : 20, ['#FF0000', '#FFD700']);
        introEnvelope.classList.add('visible');
        setTimeout(() => { document.getElementById('intro-inst').classList.add('show'); }, 1200);
    }, 300);

    introEnvelope.addEventListener('click', function (e) {
        e.stopPropagation();
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

/* --- 6. FORM NHẬP THÔNG TIN --- */
function showInputForm() {
    inputFormScreen.style.display = 'flex';
    setTimeout(() => inputFormScreen.style.opacity = 1, 100);
    document.getElementById('submit-info').addEventListener('click', function (e) {
        e.stopPropagation();
        validateForm();
    });
    document.addEventListener('keypress', function (e) { if (e.key === 'Enter') validateForm(); });
}

// --- HÀM VALIDATE FORM ĐƯỢC THÊM MỚI ---
function validateForm() {
    const nameInput = document.getElementById('user-name');
    const roleInput = document.getElementById('user-role');
    const birthdayInput = document.getElementById('user-birthday');
    const genderInput = document.getElementById('user-gender'); // Mới

    const name = nameInput.value.trim();
    const role = roleInput.value;
    const birthday = birthdayInput.value.trim();
    const gender = genderInput.value; // Mới

    let isValid = true;

    // Reset errors
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('role-error').style.display = 'none';
    document.getElementById('birthday-error').style.display = 'none';
    document.getElementById('general-error').style.display = 'none';
    document.getElementById('gender-error').style.display = 'none'; // Mới

    if (name === "") {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    if (role === "") {
        document.getElementById('role-error').style.display = 'block';
        isValid = false;
    }
    if (gender === "") {
        document.getElementById('gender-error').style.display = 'block';
        isValid = false;
    }
    // Simple date regex for dd/mm/yyyy
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    if (!dateRegex.test(birthday)) {
        document.getElementById('birthday-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        userInfo = { name, role, birthday, gender };
        checkUserInDatabase();
    }
}

/* --- 7. TRANSITION (PHIÊN BẢN FINAL: 3 CẤP ĐỘ) --- */
function showTransitionScreen() {
    transitionScreen.style.display = 'flex';
    transitionText.style.opacity = 1;
    transitionText.innerHTML = '';

    const currentYear = new Date().getFullYear();
    let line1Text = "";

    // --- CẤU HÌNH ROLE (QUAN TRỌNG) ---
    // 1. Nhóm Làng (Đường A)
    const villageRoles = ["brother_stress", "Blood brother", "brother_village"];

    // 2. Nhóm Đại học
    const uniRoles = ["brother", "brother_school", "university", "classmate"];

    // 3. Nhóm VIP (Trùng cả 2 hoặc đặc biệt thân)
    const vipRoles = ["brother_vip", "best_friend"];


    // --- XỬ LÝ LOGIC ---

    // ƯU TIÊN 1: Kiểm tra VIP trước
    if (vipRoles.includes(userInfo.role)) {
        // Tìm năm sinh nhỏ nhất của cả hội VIP
        const groupMembers = mockDatabase.filter(user => vipRoles.includes(user.role));
        const years = groupMembers.map(user => parseInt(user.birthday.split('/')[2]));
        const oldestYear = years.length > 0 ? Math.min(...years) : 2006;

        line1Text = `Hành trình AE cốt cán (Làng & ĐH) ${oldestYear} ➝ ${currentYear}`;
    }
    // ƯU TIÊN 2: Nhóm Làng
    else if (villageRoles.includes(userInfo.role)) {
        const groupMembers = mockDatabase.filter(user => villageRoles.includes(user.role));
        const years = groupMembers.map(user => parseInt(user.birthday.split('/')[2]));
        const oldestYear = years.length > 0 ? Math.min(...years) : 2000;

        line1Text = `Cùng nhìn lại kỉ niệm anh em đường A (AnDaocity) ${oldestYear} ➝ ${currentYear}`;
    }
    // ƯU TIÊN 3: Nhóm Đại học
    else if (uniRoles.includes(userInfo.role)) {
        const groupMembers = mockDatabase.filter(user => uniRoles.includes(user.role));
        const years = groupMembers.map(user => parseInt(user.birthday.split('/')[2]));
        const oldestYear = years.length > 0 ? Math.min(...years) : 2002;

        line1Text = `Hồi ức thanh xuân đại học ${oldestYear} ➝ ${currentYear}`;
    }
    // MẶC ĐỊNH: Gia đình (Mẹ, Ông...)
    else {
        const parts = userInfo.birthday.split('/');
        const birthYear = parts[2];
        line1Text = `Những bức ảnh kỉ niệm: ${birthYear} ➝ ${currentYear}`;
    }

    const line2Text = userInfo.name;

    // --- HIỆU ỨNG GÕ CHỮ (KHÔNG ĐỔI) ---
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

/* --- 8. SLIDESHOW --- */
let currentIdx = 0;
const slideContainer = document.getElementById('slide-container');
const slideCaption = document.getElementById('slide-caption');

function startSlideshow() {
    clearInterval(fwInterval);
    slideScreen.style.display = 'flex';
    showNextImage();
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

/* --- 9. FINAL SCREEN --- */
function showFinalScreen() {
    slideScreen.style.display = 'none';
    finalScreen.style.display = 'block';
    setTimeout(() => { document.getElementById('final-envelope-container').classList.add('show'); }, 500);

    const total = currentImages.length;
    const radiusX = isMobile ? window.innerWidth * 0.45 : 500;
    const radiusY = isMobile ? 80 : 150;
    const angleStep = (2 * Math.PI) / total;
    let baseAngle = 0;
    const satellites = [];

    const oldSats = document.querySelectorAll('.satellite-item');
    oldSats.forEach(el => el.remove());

    currentImages.forEach((data, i) => {
        const div = document.createElement('div');
        div.className = 'satellite-item';
        div.innerHTML = `<img src="${data.url}" alt="Ky niem">`;
        const sizeW = isMobile ? 100 : 160;
        div.style.width = sizeW + 'px';
        div.style.height = sizeW + 'px';
        div.style.marginLeft = (-sizeW / 2) + 'px';
        div.style.marginTop = (-sizeW / 2) + 'px';
        centerStage.appendChild(div);
        satellites.push({ el: div, index: i, angleOffset: i * angleStep });
    });

    function animateSatellites() {
        baseAngle += 0.002;
        satellites.forEach(sat => {
            const currentAngle = baseAngle + sat.angleOffset;
            const x = Math.cos(currentAngle) * radiusX;
            const y = Math.sin(currentAngle) * radiusY;
            const scaleFactor = 0.7 + ((y + radiusY) / (2 * radiusY)) * 0.6;
            const opacity = 0.5 + (scaleFactor - 0.7) * 1.5;
            const zIndex = Math.floor(y + 200);

            sat.el.style.transform = `translate(${x}px, ${y}px) scale(${scaleFactor})`;
            sat.el.style.zIndex = zIndex;
            sat.el.style.opacity = Math.min(1, Math.max(0.4, opacity));
            sat.el.style.filter = y < -20 ? 'blur(2px)' : 'none';
        });
        requestAnimationFrame(animateSatellites);
    }

    requestAnimationFrame(animateSatellites);
    setInterval(() => spawnManyFireworks(Math.random() * (isMobile ? 1 : 2) + 1), 3000);
}

/* --- 10. XỬ LÝ LÌ XÌ FINAL & MƯA TIỀN --- */
const envelope = document.getElementById('final-envelope');
const modal = document.getElementById('red-envelope-screen');
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

envelope.addEventListener('click', (e) => {
    e.stopPropagation();
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    const openAudio = document.getElementById('open-sound');
    if (openAudio) openAudio.play().catch(e => { });

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

/* --- 11. FIREWORKS UTILS --- */
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

// Logic nút nhạc thủ công
musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const bg = document.getElementById('bg-music');
    if (playing) {
        bg.pause();
        musicBtn.style.animation = 'none';
    } else {
        bg.play();
        musicBtn.style.animation = 'spin 5s linear infinite';
    }
    playing = !playing;
});
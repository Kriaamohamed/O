// Initial Products
const defaultProducts = [
    { id: 1, category: "social", title: "متابعين انستا", price: "10DT", desc: "متابعين بجودة ممتازة", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
    { id: 2, category: "social", title: "مشاهدات ريلز", price: "1DT", desc: "سرعة فائقة في التنفيذ", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
    { id: 3, category: "social", title: "لايكات انستا", price: "3DT", desc: "لايكات حقيقية وآمنة", img: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" },
    { id: 4, category: "social", title: "متابعين تيك توك", price: "15DT", desc: "دعم الحساب للانتشار", img: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
    { id: 5, category: "social", title: "مشاهدات تيك توك", price: "1DT", desc: "توصيل فوري للمشاهدات", img: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
    { id: 6, category: "social", title: "لايكات تيك توك", price: "4DT", desc: "تفاعل عالي للفيديو", img: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
    { id: 7, category: "social", title: "مشتركين يوتيوب", price: "20DT", desc: "مشتركين دائمين للقناة", img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
    { id: 8, category: "thumb", title: "Thumbnail", price: "15DT", desc: "تصميم احترافي ممتاز", img: "https://cdn-icons-png.flaticon.com/512/3502/3502688.png" }
];

// Translations Dictionary
const translations = {
    ar: {
        dir: "rtl",
        navHome: "الرئيسية", navServices: "الخدمات", navDesigns: "تصاميم", navLogin: "تسجيل الدخول",
        heroTitle: "🔥 كبّر حسابك بسهولة", heroDesc: "خدمات سريعة ونتائج مضمونة 100%", heroBtn: "ابدأ الآن",
        servicesTitle: "📊 خدماتنا المطورة", designsTitle: "🎨 الصور المصغرة",
        buyBtn: "شراء", descBtn: "وصف", orderDesignBtn: "اطلب تصميمك",
        adminTitle: "⚙️ لوحة تحكم الأدمن (Admin Dashboard)", logout: "تسجيل الخروج",
        adminFormTitle: "➕ إضافة / تعديل منتج", lblTitle: "اسم الخدمة:", lblPrice: "السعر:",
        lblImg: "رابط الصورة (URL):", lblDesc: "وصف الخدمة:", lblCategory: "قسم الخدمة:",
        optSocial: "الخدمات العامة", optThumb: "التصاميم", btnSaveProd: "حفظ المنتج",
        btnCancelEdit: "إلغاء التعديل", adminListTitle: "📋 قائمة المنتجات الحالية",
        loginModalTitle: "🔑 تسجيل الدخول", lblUser: "اسم المستخدم (Username):",
        lblPass: "كلمة المرور (Password):", btnLoginSubmit: "دخول", errInvalid: "بيانات الدخول غير صحيحة!",
        edit: "تعديل", delete: "حذف"
    },
    fr: {
        dir: "ltr",
        navHome: "Accueil", navServices: "Services", navDesigns: "Designs", navLogin: "Connexion",
        heroTitle: "🔥 Boostez vos réseaux facilement", heroDesc: "Services rapides et نتائج 100% garantis", heroBtn: "Commencer",
        servicesTitle: "📊 Nos Services", designsTitle: "🎨 Miniatures / Thumbnails",
        buyBtn: "Acheter", descBtn: "Info", orderDesignBtn: "Commander",
        adminTitle: "⚙️ Tableau de bord Admin", logout: "Déconnexion",
        adminFormTitle: "➕ Ajouter / Modifier Produit", lblTitle: "Nom du service:", lblPrice: "Prix:",
        lblImg: "Lien d'image (URL):", lblDesc: "Description:", lblCategory: "Catégorie:",
        optSocial: "Services Sociaux", optThumb: "Designs", btnSaveProd: "Enregistrer",
        btnCancelEdit: "Annuler", adminListTitle: "📋 Liste des produits actuels",
        loginModalTitle: "🔑 Connexion", lblUser: "Nom d'utilisateur:",
        lblPass: "Mot de passe:", btnLoginSubmit: "Se connecter", errInvalid: "Identifiants incorrects!",
        edit: "Modifier", delete: "Supprimer"
    },
    en: {
        dir: "ltr",
        navHome: "Home", navServices: "Services", navDesigns: "Designs", navLogin: "Login",
        heroTitle: "🔥 Boost Your Social Media", heroDesc: "Fast delivery & 100% guaranteed results", heroBtn: "Start Now",
        servicesTitle: "📊 Our Services", designsTitle: "🎨 Thumbnails",
        buyBtn: "Buy", descBtn: "Info", orderDesignBtn: "Order Design",
        adminTitle: "⚙️ Admin Dashboard", logout: "Logout",
        adminFormTitle: "➕ Add / Edit Product", lblTitle: "Service Title:", lblPrice: "Price:",
        lblImg: "Image URL:", lblDesc: "Description:", lblCategory: "Category:",
        optSocial: "Social Services", optThumb: "Thumbnails", btnSaveProd: "Save Product",
        btnCancelEdit: "Cancel Edit", adminListTitle: "📋 Current Products List",
        loginModalTitle: "🔑 Login", lblUser: "Username:",
        lblPass: "Password:", btnLoginSubmit: "Login", errInvalid: "Invalid Credentials!",
        edit: "Edit", delete: "Delete"
    }
};

let currentLang = "ar";

function getProducts() {
    const stored = localStorage.getItem("kriaa_products");
    if (!stored) {
        localStorage.setItem("kriaa_products", JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    return JSON.parse(stored);
}

function saveProductsToStorage(prods) {
    localStorage.setItem("kriaa_products", JSON.stringify(prods));
    renderProducts();
}

function show(id) {
    if (id === 'admin' && !isAdminLoggedIn()) {
        alert("⚠️ غير مسموح بالوصول لهذا الرابط!");
        show('home');
        return;
    }
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function order(service) {
    const phone = "21627049943";
    const msg = encodeURIComponent("مرحباً، أريد طلب خدمة: " + service);
    window.open(`https://wa.me/\({phone}?text=\){msg}`, "_blank");
}

function whatsapp() {
    window.open("https://wa.me/21627049943", "_blank");
}

function desc(text) {
    alert("ℹ️ " + text);
}

// Authentication Functions
function isAdminLoggedIn() {
    return localStorage.getItem("kriaa_user_role") === "admin";
}

function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("loginError").style.display = "none";
}

function handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById("loginUsername").value.trim();
    const p = document.getElementById("loginPassword").value.trim();

    if (u === "admin" && p === "26738291") {
        localStorage.setItem("kriaa_user_role", "admin");
        closeLoginModal();
        updateUIAuth();
        show('admin');
    } else {
        localStorage.setItem("kriaa_user_role", "user");
        closeLoginModal();
        updateUIAuth();
        alert(currentLang === 'ar' ? 'تم تسجيل الدخول كمستخدم عادي.' : 'Logged in as normal user.');
    }
}

function logout() {
    localStorage.removeItem("kriaa_user_role");
    updateUIAuth();
    show('home');
}

function updateUIAuth() {
    const navAdmin = document.getElementById("nav-admin");
    const navLogin = document.getElementById("nav-login");
    if (isAdminLoggedIn()) {
        navAdmin.style.display = "inline-block";
        navLogin.style.display = "none";
    } else {
        navAdmin.style.display = "none";
        navLogin.style.display = "inline-block";
    }
}

// Render UI Components
function renderProducts() {
    const products = getProducts();
    const socialContainer = document.getElementById("services-cards-container");
    const thumbContainer = document.getElementById("designs-cards-container");
    const adminList = document.getElementById("adminCardsList");
    const t = translations[currentLang];

    socialContainer.innerHTML = "";
    thumbContainer.innerHTML = "";
    adminList.innerHTML = "";

    products.forEach(p => {
        const cardHTML = `
${p.title}
${p.price}

${p.desc}

${t.buyBtn}
${t.descBtn}

`;
if (p.category === "social") {
socialContainer.innerHTML += cardHTML;
} else {
thumbContainer.innerHTML += cardHTML;
}
adminList.innerHTML += `
${p.title} - ${p.price}


${p.category === 'social' ? 'خدمات' : 'تصاميم'}

${t.edit}
${t.delete}

    `;
});
}
// Product Management
function saveProduct(e) {
e.preventDefault();
const id = document.getElementById("editProductId").value;
const title = document.getElementById("prodTitle").value.trim();
const price = document.getElementById("prodPrice").value.trim();
const img = document.getElementById("prodImg").value.trim();
const desc = document.getElementById("prodDesc").value.trim();
const category = document.getElementById("prodCategory").value;
let products = getProducts();

if (id) {
    products = products.map(p => p.id == id ? { id: Number(id), title, price, img, desc, category } : p);
} else {
    const newProd = {
        id: Date.now(),
        title, price, img, desc, category
    };
    products.push(newProd);
}

saveProductsToStorage(products);
resetForm();
alert("✅ تم الحفظ بنجاح!");
}
function editProduct(id) {
const products = getProducts();
const prod = products.find(p => p.id == id);
if (!prod) return;
document.getElementById("editProductId").value = prod.id;
document.getElementById("prodTitle").value = prod.title;
document.getElementById("prodPrice").value = prod.price;
document.getElementById("prodImg").value = prod.img;
document.getElementById("prodDesc").value = prod.desc;
document.getElementById("prodCategory").value = prod.category;

document.getElementById("btn-cancel-edit").style.display = "block";
window.scrollTo({ top: 0, behavior: 'smooth' });
}
function deleteProduct(id) {
if (!confirm("هل أنت تأكد من إزالة هذا المنتج؟")) return;
let products = getProducts();
products = products.filter(p => p.id != id);
saveProductsToStorage(products);
}
function resetForm() {
document.getElementById("productForm").reset();
document.getElementById("editProductId").value = "";
document.getElementById("btn-cancel-edit").style.display = "none";
}
// Language Switcher
function changeLanguage(lang) {
currentLang = lang;
const t = translations[lang];
document.documentElement.lang = lang;
document.documentElement.dir = t.dir;

document.getElementById("nav-home").innerText = t.navHome;
document.getElementById("nav-services").innerText = t.navServices;
document.getElementById("nav-designs").innerText = t.navDesigns;
document.getElementById("nav-login").innerText = t.navLogin;
document.getElementById("hero-title").innerText = t.heroTitle;
document.getElementById("hero-desc").innerText = t.heroDesc;
document.getElementById("hero-btn").innerText = t.heroBtn;
document.getElementById("services-title").innerText = t.servicesTitle;
document.getElementById("designs-title").innerText = t.designsTitle;

document.getElementById("admin-title").innerText = t.adminTitle;
document.getElementById("btn-logout").innerText = t.logout;
document.getElementById("admin-form-title").innerText = t.adminFormTitle;
document.getElementById("lbl-title").innerText = t.lblTitle;
document.getElementById("lbl-price").innerText = t.lblPrice;
document.getElementById("lbl-img").innerText = t.lblImg;
document.getElementById("lbl-desc").innerText = t.lblDesc;
document.getElementById("lbl-category").innerText = t.lblCategory;
document.getElementById("opt-social").innerText = t.optSocial;
document.getElementById("opt-thumb").innerText = t.optThumb;
document.getElementById("btn-save-prod").innerText = t.btnSaveProd;
document.getElementById("btn-cancel-edit").innerText = t.btnCancelEdit;
document.getElementById("admin-list-title").innerText = t.adminListTitle;

document.getElementById("login-modal-title").innerText = t.loginModalTitle;
document.getElementById("lbl-user").innerText = t.lblUser;
document.getElementById("lbl-pass").innerText = t.lblPass;
document.getElementById("btn-login-submit").innerText = t.btnLoginSubmit;

renderProducts();
}
// Init
document.addEventListener("DOMContentLoaded", function() {
updateUIAuth();
renderProducts();
show('home');
});

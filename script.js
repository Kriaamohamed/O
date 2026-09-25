/*
====================================================
Kriaa Services
Main JavaScript
====================================================
*/


/* ==================================================
   DEFAULT PRODUCTS
================================================== */

const defaultProducts = [

    {
        id: 1,
        name: "متابعين انستا",
        price: "10DT",
        image: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        description: "متابعين بجودة ممتازة",
        quantity: "1000 متابع",
        orderName: "1000 Insta Followers"
    },

    {
        id: 2,
        name: "مشاهدات ريلز",
        price: "1DT",
        image: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        description: "سرعة فائقة في التنفيذ",
        quantity: "1000 مشاهدة",
        orderName: "1000 Insta Reels Views"
    },

    {
        id: 3,
        name: "لايكات انستا",
        price: "3DT",
        image: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
        description: "لايكات حقيقية وآمنة",
        quantity: "1000 لايك",
        orderName: "1000 Insta Likes"
    },

    {
        id: 4,
        name: "متابعين تيك توك",
        price: "15DT",
        image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
        description: "دعم الحساب للانتشار",
        quantity: "1000 متابع",
        orderName: "1000 TikTok Followers"
    },

    {
        id: 5,
        name: "مشاهدات تيك توك",
        price: "1DT",
        image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
        description: "توصيل فوري للمشاهدات",
        quantity: "1000 مشاهدة",
        orderName: "1000 TikTok Views"
    },

    {
        id: 6,
        name: "لايكات تيك توك",
        price: "4DT",
        image: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
        description: "تفاعل عالي للفيديو",
        quantity: "1000 لايك",
        orderName: "1000 TikTok Likes"
    },

    {
        id: 7,
        name: "مشتركين يوتيوب",
        price: "20DT",
        image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        description: "مشتركين دائمين للقناة",
        quantity: "1000 مشترك",
        orderName: "1000 YouTube Subs"
    }

];


/* ==================================================
   PRODUCTS STORAGE
================================================== */

function getProducts() {

    const saved = localStorage.getItem("kriaa_products");

    if (saved) {

        try {

            return JSON.parse(saved);

        } catch (error) {

            console.error("Products data error:", error);

        }

    }

    localStorage.setItem(
        "kriaa_products",
        JSON.stringify(defaultProducts)
    );

    return defaultProducts;
}


function saveProducts(products) {

    localStorage.setItem(
        "kriaa_products",
        JSON.stringify(products)
    );

}


/* ==================================================
   SHOW PAGE
================================================== */

function show(id) {

    /* Admin page cannot be opened without admin */
    if (id === "adminDashboard" && !isAdmin()) {

        alert("غير مسموح بالدخول إلى لوحة الإدارة.");

        return;
    }


    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================================
   ORDER
================================================== */

function order(service) {

    const phone = "21627049943";

    const msg =
        encodeURIComponent(
            "مرحباً، أريد طلب خدمة: " + service
        );


    window.open(
        `https://wa.me/${phone}?text=${msg}`,
        "_blank"
    );

}


/* ==================================================
   WHATSAPP
================================================== */

function whatsapp() {

    window.open(
        "https://wa.me/21627049943",
        "_blank"
    );

}


/* ==================================================
   DESCRIPTION
================================================== */

function desc(text) {

    alert("ℹ️ " + text);

}


/* ==================================================
   LOGIN
================================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("show");


    document
        .getElementById("loginMessage")
        .textContent = "";


    document
        .getElementById("usernameInput")
        .focus();

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


/* ==================================================
   LOGIN AUTHENTICATION
================================================== */

function login() {

    const username =
        document
            .getElementById("usernameInput")
            .value
            .trim();

    const password =
        document
            .getElementById("passwordInput")
            .value;


    const message =
        document.getElementById(
            "loginMessage"
        );


    if (!username || !password) {

        message.textContent =
            "يرجى إدخال اسم المستخدم وكلمة المرور.";

        return;
    }


    /*
       ADMIN LOGIN
    */

    if (
        username === "admin" &&
        password === "26738291"
    ) {

        localStorage.setItem(
            "kriaa_logged_in",
            "true"
        );

        localStorage.setItem(
            "kriaa_role",
            "admin"
        );

        closeLogin();

        updateLoginUI();

        alert("تم تسجيل الدخول كـ Admin.");

        return;
    }


    /*
       NORMAL USER LOGIN

       أي Username/Password آخرين
       يعتبرون مستخدماً عادياً.
    */

    localStorage.setItem(
        "kriaa_logged_in",
        "true"
    );

    localStorage.setItem(
        "kriaa_role",
        "user"
    );

    closeLogin();

    updateLoginUI();

    alert("تم تسجيل الدخول بنجاح.");

}


/* ==================================================
   CHECK ADMIN
================================================== */

function isAdmin() {

    return (
        localStorage.getItem(
            "kriaa_logged_in"
        ) === "true" &&

        localStorage.getItem(
            "kriaa_role"
        ) === "admin"
    );

}


/* ==================================================
   CHECK LOGIN
================================================== */

function isLoggedIn() {

    return (
        localStorage.getItem(
            "kriaa_logged_in"
        ) === "true"
    );

}


/* ==================================================
   LOGIN UI
================================================== */

function updateLoginUI() {

    const loginButton =
        document.getElementById(
            "loginButton"
        );

    const adminButton =
        document.getElementById(
            "adminButton"
        );

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (isLoggedIn()) {

        loginButton.style.display =
            "none";

        logoutButton.style.display =
            "inline-block";

    } else {

        loginButton.style.display =
            "inline-block";

        logoutButton.style.display =
            "none";

    }


    /*
       ADMIN ONLY
    */

    if (isAdmin()) {

        adminButton.style.display =
            "inline-block";

    } else {

        adminButton.style.display =
            "none";

    }

}


/* ==================================================
   LOGOUT
================================================== */

function logout() {

    localStorage.removeItem(
        "kriaa_logged_in"
    );

    localStorage.removeItem(
        "kriaa_role"
    );


    /*
       If currently in Admin Dashboard,
       return to home.
    */

    show("home");

    updateLoginUI();

}


/* ==================================================
   OPEN ADMIN DASHBOARD
================================================== */

function openAdminDashboard() {

    if (!isAdmin()) {

        alert(
            "غير مسموح بالدخول إلى لوحة الإدارة."
        );

        return;

    }


    renderAdminProducts();

    show("adminDashboard");

}


/* ==================================================
   RENDER PRODUCTS IN STORE
================================================== */

function renderProducts() {

    const container =
        document.getElementById(
            "productsContainer"
        );


    if (!container) return;


    const products =
        getProducts();


    container.innerHTML = "";


    products.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
            >

            <h3>
                ${escapeHTML(product.name)}
            </h3>

            <p class="price">
                ${escapeHTML(product.price)}
            </p>

            <p>
                ${escapeHTML(product.quantity || "")}
            </p>

            <div class="btn-group">

                <button
                    class="buy-btn"
                    onclick="order('${escapeJS(product.orderName || product.name)}')"
                >
                    شراء
                </button>

                <button
                    class="desc-btn"
                    onclick="desc('${escapeJS(product.description || "")}')"
                >
                    وصف
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* ==================================================
   ADD PRODUCT
================================================== */

function addProduct() {

    if (!isAdmin()) {

        alert(
            "يجب تسجيل الدخول كـ Admin."
        );

        return;

    }


    const name =
        document
            .getElementById("newProductName")
            .value
            .trim();

    const price =
        document
            .getElementById("newProductPrice")
            .value
            .trim();

    const image =
        document
            .getElementById("newProductImage")
            .value
            .trim();

    const description =
        document
            .getElementById(
                "newProductDescription"
            )
            .value
            .trim();


    if (!name || !price) {

        alert(
            "أدخل اسم المنتج والسعر على الأقل."
        );

        return;

    }


    const products =
        getProducts();


    const newProduct = {

        id: Date.now(),

        name: name,

        price: price,

        image:
            image ||
            "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",

        description:
            description ||
            "لا يوجد وصف",

        quantity:
            "خدمة متوفرة",

        orderName: name

    };


    products.push(newProduct);

    saveProducts(products);


    /*
       Clear inputs
    */

    document.getElementById(
        "newProductName"
    ).value = "";

    document.getElementById(
        "newProductPrice"
    ).value = "";

    document.getElementById(
        "newProductImage"
    ).value = "";

    document.getElementById(
        "newProductDescription"
    ).value = "";


    renderProducts();

    renderAdminProducts();


    alert(
        "تمت إضافة المنتج بنجاح."
    );

}


/* ==================================================
   ADMIN PRODUCTS
================================================== */

function renderAdminProducts() {

    const container =
        document.getElementById(
            "adminProducts"
        );


    if (!container) return;


    if (!isAdmin()) {

        container.innerHTML =
            "<p>غير مسموح.</p>";

        return;

    }


    const products =
        getProducts();


    container.innerHTML = "";


    products.forEach(function(product) {

        const item =
            document.createElement("div");

        item.className =
            "admin-product";


        item.innerHTML = `

            <img
                src="${escapeHTML(product.image)}"
                alt=""
            >

            <div class="admin-product-info">

                <h4>
                    ${escapeHTML(product.name)}
                </h4>

                <span>
                    ${escapeHTML(product.price)}
                </span>

                <br>

                <small>
                    ${escapeHTML(product.description || "")}
                </small>

            </div>

            <div class="admin-actions">

                <button
                    class="edit-btn"
                    onclick="editProduct(${product.id})"
                >
                    تعديل
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteProduct(${product.id})"
                >
                    حذف
                </button>

            </div>

        `;


        container.appendChild(item);

    });

}


/* ==================================================
   EDIT PRODUCT
================================================== */

function editProduct(id) {

    if (!isAdmin()) {

        alert(
            "غير مسموح."
        );

        return;

    }


    const products =
        getProducts();


    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) return;


    const newName =
        prompt(
            "اسم المنتج:",
            product.name
        );


    if (newName === null) return;


    const newPrice =
        prompt(
            "السعر:",
            product.price
        );


    if (newPrice === null) return;


    const newImage =
        prompt(
            "رابط صورة المنتج:",
            product.image
        );


    if (newImage === null) return;


    const newDescription =
        prompt(
            "وصف المنتج:",
            product.description
        );


    if (newDescription === null) return;


    product.name =
        newName.trim() ||
        product.name;

    product.price =
        newPrice.trim() ||
        product.price;

    product.image =
        newImage.trim() ||
        product.image;

    product.description =
        newDescription.trim() ||
        product.description;

    product.orderName =
        product.name;


    saveProducts(products);


    renderProducts();

    renderAdminProducts();


    alert(
        "تم تعديل المنتج بنجاح."
    );

}


/* ==================================================
   DELETE PRODUCT
================================================== */

function deleteProduct(id) {

    if (!isAdmin()) {

        alert(
            "غير مسموح."
        );

        return;

    }


    const products =
        getProducts();


    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) return;


    const confirmed =
        confirm(
            `هل تريد حذف "${product.name}"؟`
        );


    if (!confirmed) return;


    const updatedProducts =
        products.filter(function(item) {

            return item.id !== id;

        });


    saveProducts(updatedProducts);


    renderProducts();

    renderAdminProducts();


    alert(
        "تم حذف المنتج."
    );

}


/* ==================================================
   SECURITY HELPERS
================================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeJS(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");

}


/* ==================================================
   LANGUAGE SYSTEM
================================================== */

const translations = {

    ar: {

        home: "الرئيسية",
        services: "الخدمات",
        designs: "تصاميم",
        login: "تسجيل الدخول",
        logout: "تسجيل الخروج",

        heroTitle:
            "🔥 كبّر حسابك بسهولة",

        heroText:
            "خدمات سريعة ونتائج مضمونة 100%",

        start:
            "ابدأ الآن",

        servicesTitle:
            "📊 خدماتنا المطورة",

        thumbnails:
            "🎨 الصور المصغرة",

        orderDesign:
            "اطلب تصميمك",

        loginTitle:
            "🔐 تسجيل الدخول"

    },


    fr: {

        home: "Accueil",
        services: "Services",
        designs: "Designs",
        login: "Connexion",
        logout: "Déconnexion",

        heroTitle:
            "🔥 Développez votre compte facilement",

        heroText:
            "Services rapides et résultats garantis à 100%",

        start:
            "Commencer",

        servicesTitle:
            "📊 Nos services",

        thumbnails:
            "🎨 Miniatures",

        orderDesign:
            "Commander",

        loginTitle:
            "🔐 Connexion"

    },


    en: {

        home: "Home",
        services: "Services",
        designs: "Designs",
        login: "Login",
        logout: "Logout",

        heroTitle:
            "🔥 Grow your account easily",

        heroText:
            "Fast services with 100% guaranteed results",

        start:
            "Get Started",

        servicesTitle:
            "📊 Our Services",

        thumbnails:
            "🎨 Thumbnails",

        orderDesign:
            "Order Design",

        loginTitle:
            "🔐 Login"

    }

};


/* ==================================================
   CHANGE LANGUAGE
================================================== */

function changeLanguage(language) {

    const data =
        translations[language];


    if (!data) return;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (data[key]) {

                element.textContent =
                    data[key];

            }

        });


    if (language === "ar") {

        document.documentElement.lang =
            "ar";

        document.documentElement.dir =
            "rtl";

    } else {

        document.documentElement.lang =
            language;

        document.documentElement.dir =
            "ltr";

    }


    localStorage.setItem(
        "kriaa_language",
        language
    );

}


/* ==================================================
   LOAD LANGUAGE
================================================== */

function loadLanguage() {

    const language =
        localStorage.getItem(
            "kriaa_language"
        ) || "ar";


    const selector =
        document.getElementById(
            "languageSelect"
        );


    if (selector) {

        selector.value =
            language;

    }


    changeLanguage(language);

}


/* ==================================================
   INITIALIZATION
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           Initialize home
        */

        show("home");


        /*
           Load products
        */

        renderProducts();


        /*
           Update login buttons
        */

        updateLoginUI();


        /*
           Load language
        */

        loadLanguage();

    }
);

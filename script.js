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

    const savedProducts =
        localStorage.getItem("kriaa_products");

    if (savedProducts) {

        try {

            const parsedProducts =
                JSON.parse(savedProducts);

            if (Array.isArray(parsedProducts)) {

                return parsedProducts;

            }

        } catch (error) {

            console.error(
                "Error reading products:",
                error
            );

        }

    }

    const initialProducts =
        JSON.parse(
            JSON.stringify(defaultProducts)
        );

    localStorage.setItem(
        "kriaa_products",
        JSON.stringify(initialProducts)
    );

    return initialProducts;

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

    /*
       Prevent normal users from opening
       the Admin Dashboard.
    */

    if (
        id === "adminDashboard" &&
        !isAdmin()
    ) {

        alert(
            "غير مسموح بالدخول إلى لوحة الإدارة."
        );

        return;

    }


    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(id);


    if (!target) {

        console.warn(
            "Page not found:",
            id
        );

        return;

    }


    target.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================================
   ORDER
================================================== */

function order(service) {

    const phone =
        "21627049943";


    const msg =
        encodeURIComponent(
            "مرحباً، أريد طلب خدمة: " +
            service
        );


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        msg,
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

    alert(
        "ℹ️ " + text
    );

}


/* ==================================================
   LOGIN MODAL
================================================== */

function openLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );


    if (!modal) return;


    modal.classList.add("show");


    const message =
        document.getElementById(
            "loginMessage"
        );


    if (message) {

        message.textContent = "";

    }


    const username =
        document.getElementById(
            "usernameInput"
        );


    if (username) {

        setTimeout(function() {

            username.focus();

        }, 100);

    }

}


function closeLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );


    if (modal) {

        modal.classList.remove("show");

    }

}


/* ==================================================
   LOGIN
================================================== */

function login() {

    const usernameInput =
        document.getElementById(
            "usernameInput"
        );

    const passwordInput =
        document.getElementById(
            "passwordInput"
        );

    const message =
        document.getElementById(
            "loginMessage"
        );


    if (
        !usernameInput ||
        !passwordInput
    ) {

        return;

    }


    const username =
        usernameInput.value.trim();


    const password =
        passwordInput.value;


    if (!username || !password) {

        if (message) {

            message.textContent =
                "يرجى إدخال اسم المستخدم وكلمة المرور.";

        }

        return;

    }


    /*
       ADMIN ACCOUNT

       Username:
       admin

       Password:
       26738291
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

        usernameInput.value = "";

        passwordInput.value = "";


        alert(
            "تم تسجيل الدخول كـ Admin."
        );


        return;

    }


    /*
       NORMAL USER

       Any other username/password
       is treated as a normal user.
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


    usernameInput.value = "";

    passwordInput.value = "";


    alert(
        "تم تسجيل الدخول بنجاح."
    );

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
   UPDATE LOGIN UI
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


    /*
       Normal login button
    */

    if (loginButton) {

        loginButton.style.display =
            isLoggedIn()
                ? "none"
                : "inline-block";

    }


    /*
       Logout button
    */

    if (logoutButton) {

        logoutButton.style.display =
            isLoggedIn()
                ? "inline-block"
                : "none";

    }


    /*
       Admin Dashboard button

       ONLY ADMIN
    */

    if (adminButton) {

        adminButton.style.display =
            isAdmin()
                ? "inline-block"
                : "none";

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
       Always return to home
       after logout.
    */

    show("home");


    updateLoginUI();

}


/* ==================================================
   OPEN ADMIN DASHBOARD
================================================== */

function openAdminDashboard() {

    /*
       Double security check.
    */

    if (!isAdmin()) {

        alert(
            "غير مسموح بالدخول إلى لوحة الإدارة."
        );

        return;

    }


    renderAdminProducts();


    show(
        "adminDashboard"
    );

}


/* ==================================================
   RENDER PRODUCTS
================================================== */

function renderProducts() {

    const container =
        document.getElementById(
            "productsContainer"
        );


    if (!container) {

        console.warn(
            "productsContainer not found."
        );

        return;

    }


    const products =
        getProducts();


    container.innerHTML = "";


    products.forEach(function(product) {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "card";


        const image =
            document.createElement(
                "img"
            );


        image.src =
            product.image;


        image.alt =
            product.name;


        const title =
            document.createElement(
                "h3"
            );


        title.textContent =
            product.name;


        const price =
            document.createElement(
                "p"
            );


        price.className =
            "price";


        price.textContent =
            product.price;


        const quantity =
            document.createElement(
                "p"
            );


        quantity.textContent =
            product.quantity || "";


        const buttonGroup =
            document.createElement(
                "div"
            );


        buttonGroup.className =
            "btn-group";


        const buyButton =
            document.createElement(
                "button"
            );


        buyButton.className =
            "buy-btn";


        buyButton.textContent =
            "شراء";


        buyButton.addEventListener(
            "click",
            function() {

                order(
                    product.orderName ||
                    product.name
                );

            }
        );


        const descriptionButton =
            document.createElement(
                "button"
            );


        descriptionButton.className =
            "desc-btn";


        descriptionButton.textContent =
            "وصف";


        descriptionButton.addEventListener(
            "click",
            function() {

                desc(
                    product.description ||
                    "لا يوجد وصف"
                );

            }
        );


        buttonGroup.appendChild(
            buyButton
        );

        buttonGroup.appendChild(
            descriptionButton
        );


        card.appendChild(image);

        card.appendChild(title);

        card.appendChild(price);

        card.appendChild(quantity);

        card.appendChild(buttonGroup);


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


    const nameInput =
        document.getElementById(
            "newProductName"
        );

    const priceInput =
        document.getElementById(
            "newProductPrice"
        );

    const imageInput =
        document.getElementById(
            "newProductImage"
        );

    const descriptionInput =
        document.getElementById(
            "newProductDescription"
        );


    if (
        !nameInput ||
        !priceInput ||
        !imageInput ||
        !descriptionInput
    ) {

        alert(
            "لم يتم العثور على حقول المنتج."
        );

        return;

    }


    const name =
        nameInput.value.trim();


    const price =
        priceInput.value.trim();


    const image =
        imageInput.value.trim();


    const description =
        descriptionInput.value.trim();


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

        orderName:
            name

    };


    products.push(
        newProduct
    );


    saveProducts(
        products
    );


    /*
       Clear fields
    */

    nameInput.value = "";

    priceInput.value = "";

    imageInput.value = "";

    descriptionInput.value = "";


    /*
       Refresh store
    */

    renderProducts();


    /*
       Refresh admin
    */

    renderAdminProducts();


    alert(
        "تمت إضافة المنتج بنجاح."
    );

}


/* ==================================================
   RENDER ADMIN PRODUCTS
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
            document.createElement(
                "div"
            );


        item.className =
            "admin-product";


        const image =
            document.createElement(
                "img"
            );


        image.src =
            product.image;


        image.alt =
            product.name;


        const info =
            document.createElement(
                "div"
            );


        info.className =
            "admin-product-info";


        const title =
            document.createElement(
                "h4"
            );


        title.textContent =
            product.name;


        const price =
            document.createElement(
                "span"
            );


        price.textContent =
            product.price;


        const lineBreak =
            document.createElement(
                "br"
            );


        const description =
            document.createElement(
                "small"
            );


        description.textContent =
            product.description ||
            "";


        info.appendChild(title);

        info.appendChild(price);

        info.appendChild(lineBreak);

        info.appendChild(description);


        const actions =
            document.createElement(
                "div"
            );


        actions.className =
            "admin-actions";


        const editButton =
            document.createElement(
                "button"
            );


        editButton.className =
            "edit-btn";


        editButton.textContent =
            "تعديل";


        editButton.addEventListener(
            "click",
            function() {

                editProduct(
                    product.id
                );

            }
        );


        const deleteButton =
            document.createElement(
                "button"
            );


        deleteButton.className =
            "delete-btn";


        deleteButton.textContent =
            "حذف";


        deleteButton.addEventListener(
            "click",
            function() {

                deleteProduct(
                    product.id
                );

            }
        );


        actions.appendChild(
            editButton
        );

        actions.appendChild(
            deleteButton
        );


        item.appendChild(image);

        item.appendChild(info);

        item.appendChild(actions);


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
        products.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!product) {

        alert(
            "المنتج غير موجود."
        );

        return;

    }


    const newName =
        prompt(
            "اسم المنتج:",
            product.name
        );


    if (newName === null) {

        return;

    }


    const newPrice =
        prompt(
            "السعر:",
            product.price
        );


    if (newPrice === null) {

        return;

    }


    const newImage =
        prompt(
            "رابط صورة المنتج:",
            product.image
        );


    if (newImage === null) {

        return;

    }


    const newDescription =
        prompt(
            "وصف المنتج:",
            product.description
        );


    if (newDescription === null) {

        return;

    }


    if (newName.trim()) {

        product.name =
            newName.trim();

    }


    if (newPrice.trim()) {

        product.price =
            newPrice.trim();

    }


    if (newImage.trim()) {

        product.image =
            newImage.trim();

    }


    if (newDescription.trim()) {

        product.description =
            newDescription.trim();

    }


    product.orderName =
        product.name;


    saveProducts(
        products
    );


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
        products.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!product) {

        alert(
            "المنتج غير موجود."
        );

        return;

    }


    const confirmed =
        confirm(
            'هل تريد حذف "' +
            product.name +
            '"؟'
        );


    if (!confirmed) {

        return;

    }


    const updatedProducts =
        products.filter(
            function(item) {

                return item.id !== id;

            }
        );


    saveProducts(
        updatedProducts
    );


    renderProducts();

    renderAdminProducts();


    alert(
        "تم حذف المنتج."
    );

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

    if (
        !translations[
            language
        ]
    ) {

        language = "ar";

    }


    const data =
        translations[
            language
        ];


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            function(element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    data[key] !==
                    undefined
                ) {

                    element.textContent =
                        data[key];

                }

            }
        );


    /*
       Arabic = RTL
       French/English = LTR
    */

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

    let language =
        localStorage.getItem(
            "kriaa_language"
        );


    if (
        !language ||
        !translations[language]
    ) {

        language = "ar";

    }


    const selector =
        document.getElementById(
            "languageSelect"
        );


    if (selector) {

        selector.value =
            language;

    }


    changeLanguage(
        language
    );

}


/* ==================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "loginModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeLogin();

        }

    }
);


/* ==================================================
   ENTER KEY LOGIN
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !==
            "Enter"
        ) {

            return;

        }


        const modal =
            document.getElementById(
                "loginModal"
            );


        if (
            modal &&
            modal.classList.contains(
                "show"
            )
        ) {

            login();

        }

    }
);


/* ==================================================
   INITIALIZATION
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           Initialize home
        */

        show(
            "home"
        );


        /*
           Load products
        */

        renderProducts();


        /*
           Update Login/Admin UI
        */

        updateLoginUI();


        /*
           Load saved language
        */

        loadLanguage();

    }
);

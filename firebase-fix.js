// Простой фикс для Firebase на GitHub Pages
try {
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
    
    const firebaseConfig = {
        apiKey: "AIzaSyC5tqWtPgQAmr7H-9HIZpm_NbUlQLDK8rs",
        authDomain: "national-bank-eu.firebaseapp.com",
        databaseURL: "https://national-bank-eu-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "national-bank-eu",
        storageBucket: "national-bank-eu.firebasestorage.app",
        messagingSenderId: "1068398355524",
        appId: "1:1068398355524:web:71d30f76d6fd07e5da8811"
    };
    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    console.log("✅ Firebase инициализирован на GitHub Pages!");
    window.firebaseDatabase = database;
    window.databaseRef = ref(database, 'worldBank');
} catch (error) {
    console.log("⚠️ Ошибка Firebase:", error);
    console.log("🔄 Работаем в офлайн-режиме");
}

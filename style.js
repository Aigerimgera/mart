
// При загрузке: подгружаем из localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("username");
    const savedMsg = localStorage.getItem("message");
    if (savedName) document.getElementById("username").value = savedName;
    if (savedMsg) document.getElementById("message").value = savedMsg;
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showAlert(message, type = "success") {
    const alertBox = document.getElementById("alert-box");
    alertBox.className = `alert-box alert-${type}`;
    alertBox.textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => { alertBox.style.display = "none"; }, 4000);
}

function sendMessage() {
    const nameEl = document.getElementById("username");
    const msgEl = document.getElementById("message");
    const name = nameEl.value.trim();
    const message = msgEl.value.trim();

    // Проверка: заполнены ли поля
    if (!name || !message) {
        showAlert("Пожалуйста, заполните все поля.", "error");
        return;
    }

    // Проверка: только буквы (кириллица/латиница) и пробелы
    const lettersOnly = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    if (!lettersOnly.test(name)) {
        showAlert("Имя должно содержать только буквы и пробелы.", "error");
        return;
    }
    if (!lettersOnly.test(message)) {
        showAlert("Сообщение должно содержать только буквы и пробелы.", "error");
        return;
    }

    // Сохраняем в localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("message", message);

    // Успешная отправка
    showAlert("Сообщение успешно отправлено!", "success");

    closePopup();
}

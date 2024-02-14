document.getElementById("yes-btn").addEventListener("click", function() {
    alert("Отлично! На махр жду яхту)))!");
});

document.getElementById("no-btn").addEventListener("mouseenter", function() {
    this.style.backgroundColor = "red"; // Изменяем цвет кнопки при наведении
    this.innerText = "данадуранажмиДА"; // Изменяем текст кнопки при наведении
});

document.getElementById("no-btn").addEventListener("mouseleave", function() {
    this.style.backgroundColor = ""; // Возвращаем изначальный цвет кнопки при уходе мыши
    this.innerText = "Нет"; // Возвращаем изначальный текст кнопки при уходе мыши
});


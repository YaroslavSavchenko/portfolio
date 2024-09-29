// Добавляем обработчик событий для переключения иконки при сворачивании/разворачивании списка языков
document.getElementById("lenDropdown").addEventListener("change", function () {

    var lenDropdown = document.getElementById("lenDropdown");
    // Снятие фокуса с дропдауна после изменения языка
    lenDropdown.blur();
    
    //получаем текущее значение дропдауна
    var selectedValue = lenDropdown.value;
    
    // Проверяем, есть ли значение и переходим на указанную страницу
    if(selectedValue){
        
        window.location.href = selectedValue;
    }

})




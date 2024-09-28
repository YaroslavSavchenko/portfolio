// Добавляем обработчик событий для переключения иконки при сворачивании/разворачивании списка языков
$(document).ready(function () {
    // Сворачивание / разворачивание для дропдауна с языками
    $(document).on('show.bs.collapse', '#submenu1', function () {
        $('#arrow-icon').removeClass('fa-caret-down').addClass('fa-caret-up');
    });

    $(document).on('hide.bs.collapse', '#submenu1', function () {
        $('#arrow-icon').removeClass('fa-caret-up').addClass('fa-caret-down');
    });
});



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




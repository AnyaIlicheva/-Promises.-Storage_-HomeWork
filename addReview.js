/*Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.*/


document.addEventListener('DOMContentLoaded', function () {
    const productInput = document.querySelector('.input-product');
    const reviewInput = document.querySelector('.user-review');
    const addBtn = document.querySelector('.add-review');
    const errorDiv = document.querySelector('.error-msg');
    
    addBtn.addEventListener('click', function () {
        const product = productInput.value;
        const review = reviewInput.value;
        console.log(product);
        console.log(review);
        
        if(product !== '' && review !== '') {
            let reviews = JSON.parse(localStorage.getItem(product));
            if (reviews === null) {
                reviews = [];
            }
            reviews.push(review);
            localStorage.setItem(product, JSON.stringify(reviews));
        } else {
            errorDiv.textContent = 'Все поля должны быть заполнены';
        }
    });
});
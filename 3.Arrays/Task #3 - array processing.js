// Создать массив и произвести над ним следующие 5 операций:
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
//     Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте «Рэп» и «Регги» в начало массива.
//
//     Массив по ходу выполнения операций:
//
//      Джаз, Блюз
//      Джаз, Блюз, Рок-н-ролл
//      Джаз, Классика, Рок-н-ролл
//      Классика, Рок-н-ролл
//      Рэп, Регги, Классика, Рок-н-ролл


let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-roll');
styles[Math.trunc(styles.length/2)] = 'Classic';
styles.shift();
styles.unshift('Rap', 'Reggae');

console.log(styles);
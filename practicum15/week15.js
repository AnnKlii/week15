//Задание 1
// Выведите числа от 1 до 10 в консоль
// for (let i=1; i<=10; i++ ) {
//     console.log(i);
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
// for (let i = 1; i <= 10; i++) {
//     const multi = i * 5;
//     console.log(`5*${i}=${multi}`);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
// let sumArray = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sumArray += numbers[i];
// }
// console.log(sumArray);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
// const animals = ["Кот", "Рыба", "Лемур"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + '- прекрасное животное';
// }
// console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
// const str = 'Hello';
// for (let letter of str) {
//     console.log(letter);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
// for (let element of array) {
//     console.log(element);
// }


//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
// const sentences = ['Hello, world!', 'How are you?'];
// const allWords = sentences.flatMap(sentence => sentence.split(' '));
// for (let word of allWords) {
//     console.log(word);
// }


//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// let sumNumbers = 0;
// for (let element of numbers) {
//     sumNumbers += element;
// }
// console.log(sumNumbers);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
// const list = ['apple', 'banana', 'cherry'];
// for (let element of list) {
//     console.log(element.length)
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
// let words = ['Hello', 'world', '!'];
// words = words.map(item => item.toUpperCase());
// console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
// const greeting = 'Hello, world!';
// let vowelCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for (let word of greeting) {
//     if (vowels.includes(word)) {
//         vowelCount += 1;
//     }
// }

// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];
// const sentence = words.join(' ');
// console.log(sentence);


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// let numReverse = 10;
// while (numReverse >= 1) {
//     console.log(numReverse);
//     numReverse--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
// const random = [2, 4, 6, -3, 8, 10];
// let i = 0;
// do {
//     if (random[i] > 0) {
//         console.log(random[i])
//     }
//     i++;
// } while (random[i] > 0);


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// let num = 1;
// do {
//     if (num % 3 !== 0) {
//         console.log(num);
//     }
//     num++;
// } while (num <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let sum = 0;
// let randomNumbers = [];
// while (sum < 100) {
//     let randomNumber = prompt('Enter random number');
//     randomNumbers.push(Number(randomNumber));

//     for (i = 0; i < randomNumbers.length; i++) {
//         sum += randomNumbers[i];
//     } console.log(sum);
// }


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
// const titles = document.getElementsByTagName('h4');
// const titlesArr = Array.from(titles);
// for (let i = 0; i < titlesArr.length; i++) {
//     titlesArr[i].style.background = '#0000ff';
// }


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';
// for (let i = 0; i < 6; i++) {
//     randomString += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
// }
// console.log(randomString);

let i = 0;
while (++i < 5)
    console.log(i);

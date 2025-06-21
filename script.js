// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 3, 4, 6, 2, 5, 7];

// removeElement(array,4);

// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arr, item) {

    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            arr.splice(i, 1);
            break
        }
    }

}
removeElement(array, 4);
console.log((array));
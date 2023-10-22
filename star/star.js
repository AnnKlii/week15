let numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

numbers.sort((a, b) => b - a);

for (let i = numbers.length - 1; i > 0; i--) {
    if (numbers[i] < 0)
        numbers.pop()
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

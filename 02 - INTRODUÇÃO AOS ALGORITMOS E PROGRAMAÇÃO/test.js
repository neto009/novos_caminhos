function produto(newNumbers) {
    var interable = 0;
    for (var i = 0; i < newNumbers.length; i++) {
        const nextItem = newNumbers[i + 1];
        if (nextItem) {
            const count = newNumbers[i] * newNumbers[i + 1];
            if (count > interable) interable = count;
        }
    }
    console.log(interable);
}

produto([5, 6, -4, 2, 3, 2, -23]);

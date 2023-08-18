let array = [1, 5, 3, 4, 2];

function projectCosts(array, target) {
    elements = 0;
    flag = false;

    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < array.length; y++) {
            if (5 <= array.length && array.length <= Math.pow(10, 5) && 0 < array[x] && array[x] <= 2 * Math.pow(10, 9) && array[x] != array[y] && 1 <= target && target <= Math.pow(10, 9)) {
                flag = true;
            }
        }


    }

    if (flag) {
        for (let i = 0; i < array.length; i++) {
            for (let k = i + 1; k < array.length; k++) {
                if (array[i] - array[k] == target || array[k] - array[i] == target) {
                    elements++;
                }
            }
        }
    }
    return elements;
}

console.log(projectCosts(array, 2));
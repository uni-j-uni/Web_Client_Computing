function findNums()
{
    let numbers = arguments[0], change = [];

    for (let i = 1; i < arguments.length; i++)
    {
        let cut = arguments[i], sort = [];

        for (let j = 0; j < cut[1] - cut[0] + 1; j++)
            sort[j] = numbers[cut[0] + j - 1];

        sort.sort();
        change[i - 1] = sort[cut[2] - 1];
    }
    return change;
}
console.log(findNums([4, 2, 5, 6, 3, 7, 1], [2, 6, 2]))
console.log(findNums([4, 2, 5, 6, 3, 7, 1], [2, 6, 2], [3, 4, 1]))
console.log(findNums([4, 2, 5, 6, 3, 7, 1], [2, 6, 2], [3, 4, 1], [1, 7, 4]))
console.log(findNums([4, 2, 5, 6, 3, 7, 1], [2, 6, 2], [3, 4, 1], [1, 7, 4], [2, 7, 2]));
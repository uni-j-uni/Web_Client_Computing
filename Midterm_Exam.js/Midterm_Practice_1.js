let object = {
    avgScore : function(s)
    {
        s = s.split(','), sum = 0;

        for (let i = 0; i < s.length; i++)
            sum += Number(s[i]);

        return sum / s.length;
    }
}
console.log(object.avgScore("9, 7, 8, 5, 8, 10"));
console.log(object.avgScore("10, 10, 10"));
console.log(object.avgScore("8, 10, 9, 10"));
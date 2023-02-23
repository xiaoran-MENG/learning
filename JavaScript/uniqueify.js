const arr = [
    {
        vals: [1, 2, 3]
    },
    {
        vals: [2, 3, 4]
    },
    {
        vals: [1, 2, 4]
    }
]

const unique = [...new Set(arr.flatMap(o => o.vals))]
console.log(unique)
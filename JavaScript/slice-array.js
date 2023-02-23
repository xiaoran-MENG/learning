const arr = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    }
]

console.log(arr.slice(1).map(o => o.id)) // [ 2, 3 ]
console.log(arr.slice(0, 2).map(o => o.id)) // [ 1, 2 ]
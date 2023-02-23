const arr = [
    null,
    {
        vals: [1, 2, 3]
    },
    {
        vals: null
    },
    undefined,
    {
        vals: [4, 5, 6, [7, 8, 9, 10]]
    }
]

// Shortcircuits to || if any part of the chain is falsy
const result = arr.map(o => o?.vals?.join(',') || '')
console.log(result)
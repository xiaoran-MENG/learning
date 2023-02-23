const arr = [
    {
        id: 1,
        name: 'A'
    },
    {
        id: 2,
        name: 'B'
    },
    {
        id: 1,
        name: 'C'
    }
]

const map = {}
arr.forEach(({ id, name }) => 
    (map[id] = map[id] || []).push(name))
console.log(map)
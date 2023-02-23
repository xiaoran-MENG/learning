const groupby = (arr, key) => {
    return arr.reduce((result, o) => (
        (result[o[key]] = result[o[key]] || []).push(o), result
    ), {})
}

const arr = [
    {
        id: 1,
        age: 5
    },
    {
        id: 2,
        age: 10
    },
    {
        id: 3,
        age: 5
    },
    {
        id: 4,
        age: 10
    },
]

const byAge = groupby(arr, 'age')
console.log(byAge)
const arr = [
    {
        id: 1,
        username: 'A',
        email: 'a123@gmail.com',
        password: '12345'
    },
    {
        id: 2,
        username: 'B',
        email: '',
        password: '54321'
    },
    {
        id: 3,
        username: 'C',
        email: 'c123@gmail.com',
        password: '12345'
    },
    {
        id: 4,
        username: 'D',
        email: 'd123@gmail.com',
        password: ''
    }
]

let o = arr.reduce((result, x) => {
    result[x.id] = {
        email: x.email,
        password: x.password
    }
    return result
}, {})
console.log(o);

o = arr.reduce((result, x) => (
    x.email && x.password && (result[x.id] = {
        email: x.email,
        password: x.password
    }), result), {})
console.log(o)

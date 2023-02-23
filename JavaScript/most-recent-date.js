const arr = [
    {
        date: new Date('1995-12-17T03:25:00')
    },
    {
        date: new Date('1995-12-17T03:23:00')
    },
    {
        date: new Date('1995-12-17T03:24:00')
    }
]

const recent = new Date(Math.max.apply(null, arr.map(o => new Date(o.date))))
console.log(recent) // 1995-12-17T09:25:00.000Z
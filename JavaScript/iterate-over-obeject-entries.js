const o = {
    id: 1,
    name: 'John',
    age: 10
}

for (const [k, v] of Object.entries(o))
    console.log(k, v)
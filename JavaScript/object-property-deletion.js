const o = {
    id: '1',
    name: 'John'
}
console.log(o) // { id: '1', name: 'John' }

delete o.name
console.log(o) // { id: '1' }

delete o['id']
console.log(o) // {}
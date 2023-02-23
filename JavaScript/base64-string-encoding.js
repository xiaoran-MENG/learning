const o = {
    id: 1,
    name: 'John'
}
const str = JSON.stringify(o)
const id = Buffer.from(str).toString('base64')
console.log(id) // eyJpZCI6MSwibmFtZSI6IkpvaG4ifQ==
let o = {}
let isEmpty = Object.keys(o).length === 0
console.log(isEmpty); // T

o = {
    id: 1
}
isEmpty = Object.keys(o).length === 0
console.log(isEmpty); // F
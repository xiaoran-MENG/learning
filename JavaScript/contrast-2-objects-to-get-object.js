const x = {
    '1': {
        start: 1
    },
    '2': {
        start: 2
    },
    '3': {
        start: 2
    }
}

const y = {
    '1': {
        end: 5
    },
    '3': {
        end: 10
    }
}

const o = {}
Object.keys(x).forEach(k => {
    if (k in y) o[k] = {
        duration: y[k].end -  x[k].start
    }
})
console.log(o)
let me = {
    name: 'Anfisa',
    lastname: 'Kireeva',
    age: 19,
    city: 'Moscow',
    hello(name) {
        console.log(`Hello, ${name}!`)
    }
}
me.hello(me.name)

let count_ne_adminov = 0
let users = [
    {
        name: 'alice',
        age: 20,
        isAdmin: true,
    },

    {
        name: 'bob',
        age: 21,
        isAdmin: false,
    },

    {
        name: 'todd',
        age: 22,
        isAdmin: false,
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) count_ne_adminov++
}
console.log(count_ne_adminov)

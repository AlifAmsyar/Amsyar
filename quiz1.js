let message = "benr"
console.log(message,typeof message)

message = 123
console.log(message, typeof message)

let str = "1.258"
let num = 1

let total = parseFloat(str) + num
console.log(total, typeof total)

let data = ["benr",5484,true]
console.log(data[0], data[1], data[2])

let user = {
    name: "Amsyar",
    age: 23,
    faculty: "FKEKK"
}
console.log(user.name, user.age, user.faculty)

let messages = [
    {
        name: "usr1",
        date: "12/12/2022",
        msg: "new video uploaded",
        like: 5000
    },
    {
        name: "usr2",
        date: "13/12/2022",
        msg: "very good video",
        like: 10000
    }
]
console.log(messages[1].msg)
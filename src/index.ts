// 1, 'Charles'
//tuple, stick to around 2 values, otherwise use array
let user: [number, string] = [1, 'Charles']

//One of typescripts issues
user.push(1)

user[0].valueOf()
user[1].charAt(0)
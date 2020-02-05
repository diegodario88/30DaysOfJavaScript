const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//Exercises: Level 2
//Find the person who has many skills in the users object.

const userBySkill = []

for (let [name, { skills }] of Object.entries(users)) {

    userBySkill.push({ name, skills });

}
userBySkill.sort((a, b) => (a.skills > b.skills) ? -1 : 1)

console.log(userBySkill[0]);


//Count logged in users,count users having greater than equal to 50 points 
//from the following object
const userByPoint = []

for (let [name, { points }] of Object.entries(users)) {

    userByPoint.push({ name, points });

}

console.log(
    userByPoint
        .filter(user => user.points >= 50)
);

//Exercises: Level 3
//Create an object literal called personAccount. 
//It has firstName, lastName, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Diego',
    lastName: 'Dario',
    incomes: [1200, 1300, 200],
    expenses: [500, 200, 60],
    totalIncome: function () {
        let totalInc = 0
        for (let value of this.incomes) {
            totalInc += value
        }
        return totalInc.toFixed(2)
    },
    totalExpenses: function () {
        let totalExp = 0
        for (let value of this.expenses) {
            totalExp += value
        }
        return totalExp.toFixed(2)
    },
    addIncome: function (value) { this.incomes.push(value) },
    addExpense: function (value) { this.expenses.push(value) },
    accountBalance: function () {
        return parseFloat(this.totalIncome() - this.totalExpenses())
            .toFixed(2)
    },
    accountInfo: function () {
        return `BALANCE:
        user: ${this.firstName}  ${this.lastName} 
        Total Incomes: ${this.totalIncome()}
        Total Expenses: ${this.totalExpenses()}
        balance: ${this.accountBalance()}`
    }
}
personAccount.addExpense(200)
personAccount.addIncome(100.50)

console.log(personAccount.accountInfo());

//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


const diego = {
    _id: 'a31as',
    username: 'Diego Dario',
    email: 'Diego@diego.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}


function signUp(user) {
    if (UserExist(user.username)) {
        return
    }
    users2.push(user)
}

function UserExist(userName) {
    for (const { username } of users2) {
        if (userName === username) {
            return console.log(`User ${userName} already has an account`)
        }
    }
}

signUp(diego)

function UserLoggedIn(user) {

    const loggedUsers = users2.filter(user => user.isLoggedIn === true)

    for (const { username } of loggedUsers) {
        if (user.username === username) {

            console.log(`User ${user.username} already logged in`)
            return true
        }
    }
}

function signIn(user) {
    if (!UserLoggedIn(user)) {
        user.isLoggedIn = true
    }
    console.log(`User ${user.username} Successfully logged in`)
}

signIn(diego)
console.table(users2);

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
//3. The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
//b. Create a function called averageRating which calculate the average rating of a product

function findById(id) {
    const found = products.find(item => item._id === id)
    return found
}

function rateProduct(productId, userId, rate) {
    const found = findById(productId)
    found.ratings.push({ userId: userId, rate: rate })
}

rateProduct('eedfcf', 'a31as', 4)

function averageRating(productId) {
    const found = findById(productId)
    let rate = 0
    for (const item of found.ratings) {
        rate += item.rate
    }

    const average = rate / found.ratings.length

    return average
}

console.log(`Average Rating: ${averageRating('eedfcf')}`);


console.table(products)

//4. Create a function called likeProduct. 
//This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(productId, userId) {
    const found = findById(productId)

    if (found.likes) {
        for (const item of found.likes) {
            if (userId === item) {
                found.likes.pop()
                return
            }
            found.likes.push(userId)
        }
    }
    found.likes.push(userId)
}

likeProduct('eedfcf', 'a31as')

likeProduct('eedfcf', 'a31as')

console.log(firstName, lastName, country, city, age, isMarried)
console.log(gravity, boilingPoint, PI) // 9.81, 100, 3.14
console.log(name, job, live)




const month = window.prompt('Enter month:').trim().toLowerCase()
const monthFormated = month.charAt(0).toUpperCase() + month.substring(1)

//#8 Day 4
function daysOfMonth(month) {
    switch (month) {
        case 'January':
            return alert(`${month} has ${new Date(2020, 0, 0).getDate()} days.`);

        default:
            break;
    }

}


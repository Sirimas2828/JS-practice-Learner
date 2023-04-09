function ageClassification(age) {
    if (age <= 18) {
        return 'Minor'
    } else if (age > 18 && age < 65) {
        return 'Adult'
    } else if (age >= 65) {
        return 'Senior'
    }

}
console.log(ageClassification(age)) 

module.exports = ageClassification
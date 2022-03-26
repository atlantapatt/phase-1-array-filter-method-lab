// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sammy"]
function findMatching(drivers, string) {
    let answer = drivers.filter(element => element.toLowerCase() == string.toLowerCase())
    return answer
    }

function fuzzyMatch(drivers, string) {
    let letterMatch = drivers.filter(element => element[0] == string[0])
    return letterMatch
}

function matchName(driver, string) {
    let nameMatching = driver.filter(driver => driver.name ===string)
    return nameMatching
}

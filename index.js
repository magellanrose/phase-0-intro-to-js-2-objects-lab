const employee = {name:"Sam", streetAdress:"11 Broadway"};

function updateEmployeeWithKeyAndValue(object, key, value) {
 const newEmployee ={...object}
 newEmployee[key] = value
 return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key,) {
    const newerEmployee = {...object}
    delete newerEmployee[key]
    return newerEmployee

}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key] 
    return object
}

const obj = {
    name : "hwan",
    number : 10,
    payload : {
        action : "go",
        size : 10,
        user_id : 14444
    },
    resurce : [
        {
            arn : "asjelfjlfjl",
            token_number: 10
        }
    ],
    option : true
}

const changeObj = {
    action : "back",
    arn : "hahahahahaha"
}

function deepChangeObj (obj, changeObj) {
    const new_obj = {};

    for(const key in obj) {
        if(changeObj[key]) {
            new_obj[key] = changeObj[key];
            continue;
        }
        if(typeof obj[key] === 'object')
            new_obj[key] = deepChangeObj(obj[key], changeObj)
        else
            new_obj[key] = obj[key]
    }
    return new_obj
}

const new_obj = deepChangeObj(obj, changeObj)

console.log(`obj: ${JSON.stringify(obj)}`)
console.log(`new_obj: ${JSON.stringify(new_obj)}`)

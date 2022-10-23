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
    arr : [1, 2, 3, 4],
    option : true
}

const changeObj = {
    action : "back",
    arn : "hahahahahaha",
    arr : [4, 5, 6, 7]
}

function deepChangeObj (obj, changeObj) {
    const new_obj = {}

    for(const key in obj) { 
        if(changeObj.hasOwnProperty(key)) {
            new_obj[key] = changeObj[key];
            continue;
        }

        if(obj[key] !== null && typeof obj[key] === 'object') {
            new_obj[key] = Array.isArray(obj[key])
            ? obj[key].map((o) => typeof o === 'object' ? deepChangeObj(o, changeObj) : o )
            : deepChangeObj(obj[key], changeObj)
        }
        else
            new_obj[key] = obj[key]
    }
    
    return new_obj
}

const new_obj = deepChangeObj(obj, changeObj)

console.log(`obj: ${JSON.stringify(obj)}`)
console.log(`new_obj: ${JSON.stringify(new_obj)}`)


# ---- OutPut
# obj: {"name":"hwan","number":10,"payload":{"action":"go","size":10,"user_id":14444},"resurce":[{"arn":"asjelfjlfjl","token_number":10}],"arr":[1,2,3,4],"option":true}
# new_obj: {"name":"hwan","number":10,"payload":{"action":"back","size":10,"user_id":14444},"resurce":[{"arn":"hahahahahaha","token_number":10}],"arr":[4,5,6,7],"option":true}
# ----

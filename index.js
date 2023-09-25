function saturdayFun(activity = "roller-skate"){

    console.log(`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog")

const mondayWork = function (fn = "go to the office"){
    console.log(`This Monday, I will ${fn}`);
}

function wrapAdjective(){
    return function(prm = "special"){
        return `You are ${prm}`
    }
        
}
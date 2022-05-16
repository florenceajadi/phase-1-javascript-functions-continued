// code your solution here
function saturdayFun(weekend="roller-skate") {
    return(`This Saturday, I want to ${weekend}!`);
}
saturdayFun()

function mondayWork(weekday="go to the office") {
    return(`This Monday, I will ${weekday}.`);
}

mondayWork()


function wrapAdjective(style="*") {
    return function (string="special"){
     return (`You are ${style}${string}${style}!`);   
    }
}

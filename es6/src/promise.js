export function sleep(time) {
    return new Promise(function (resolve, reject) {

        if (time < 0) {
            reject(-1);
        };

        setTimeout(function(){
            resolve(time);
        },time)
    })
}


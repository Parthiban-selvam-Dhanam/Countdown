
var display=document.createElement("div")

var num = 10;
setTimeout(() => {
    display.innerText=`${num=num-1}`
    setTimeout(() => {
        display.innerHTML=`${num=num-1}`
        setTimeout(() => {
            display.innerHTML=`${num=num-1}`
            setTimeout(() => {
                display.innerHTML=`${num=num-1}`
                setTimeout(() => {
                    display.innerHTML=`${num=num-1}`
                    setTimeout(() => {
                        display.innerHTML=`${num=num-1}`
                        setTimeout(() => {
                            display.innerHTML=`${num=num-1}`
                            setTimeout(() => {
                                display.innerHTML=`${num=num-1}`
                                setTimeout(() => {
                                    display.innerHTML=`${num=num-1}`
                        setTimeout(() => {
                            display.innerHTML=`happy independence day`})
                    },1000)
                },1000);
            },1000)
        },1000)
    },1000)
},1000)
        },1000)
    },1000)
},1000)
display.innerHTML=num;
document.body.append(display)

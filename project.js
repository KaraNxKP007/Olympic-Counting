
function timing(){
const today_date=new Date()
const olympic_date=new Date("2028-07-14")
const rem_time=olympic_date-today_date
const rem_days=Math.floor((rem_time/(1000*60*60*24)))
const rem_hrs=Math.floor(((rem_time/(1000*60*60))%24))
const rem_min=Math.floor(((rem_time/(1000*60))%60))
const rem_sec=Math.floor(((rem_time/(1000))%60))
document.getElementById("rem_days").innerHTML=rem_days
document.getElementById("rem_hrs").innerHTML=rem_hrs
document.getElementById("rem_min").innerHTML=rem_min
document.getElementById("rem_sec").innerHTML=rem_sec
}

setInterval(timing,1000)

function color_change(){
    let value1=Math.floor(Math.random()*256)
    let value2=Math.floor(Math.random()*256)
    let value3=Math.floor(Math.random()*256)
    document.querySelector(".container").style.backgroundColor=`rgba(${value1},${value2},${value3},${0.3})`
}

setInterval(color_change,3000)
let userName = prompt("İsminizi giriniz:", "Orhan");
document.querySelector("#myName").innerHTML = userName;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    console.log(h,m,s);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML = `${h} : ${m} : ${s}`;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } ;
    return i;
}

showTime();
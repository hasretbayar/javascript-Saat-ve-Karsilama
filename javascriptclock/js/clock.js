let fullName = prompt ("Lütfen Adınızı Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${fullName}`

 function showTime() {
     let date = new Date();
     let h = date.getHours(); 
     let m = date.getMinutes(); 
     let s = date.getSeconds();

     let time = `${h} : ${m} : ${s}`;
     let myClock = document.querySelector("#myClock")
     myClock.innerHTML = time
     
     setTimeout(showTime, 1000);
    
 }
 showTime();


"use strict";


// let heads =document.getElementsByTagName("h1")  //hersey document icindedi.getElementsByTagName-bize tagine gore elementleri verir 
// // console.log(heads)  //HTML Collection-array seklinde verir
// // console.log(heads[0]) //birinci h1-i verir


// for (const item of heads) { //bir bir h1-lere catmaq ucun

//     console.log(item)
// }

// let elem = document.getElementById("header") //id-ye gore elementleri verir
//  console.log(elem)


// let elem = document.getElementsByClassName("header") //clasina gore verir array seklinde cunku cox class ola biler


// let elem = document.querySelector("#header1") //queryselector elementi hardadisa yazib elde ede bilirsen noqteynen hem sectiona hem h1 catmaq olur tapdiqin birin verir

// let elem = document.querySelectorAll("#header1") //yene yazib ozun cata bilirsen tapdiqi elmentlerin hamsin verir

// let h1 = document.querySelector("#products .card-item1 h1") //section icindeki clasin h1 tapir esayn elir =let h1


// let h1 = document.querySelector("#products .card-item1 h1:nth-child(2)") //h1-lerden ikincini verir
// console.log(h1)

// let elems = document.querySelectorAll("#products .card-item2 h1");

// for(let i = 0;i <elems.length;i++){  //arr seklinde gelen h1-ler fora salib icindekilere catiriq 
//   console.log(elems[i]); 
// }

// console.log(elems[0])  h olan arr -birincini verir

// let elem = document.querySelector("#products .card-item1 h1")

// console.log(elem.innerText)  //elemntin icinde olana catmaq uucn innerText

// let elemText =elem.innerText;

// if(elemText == "salam"){     //h1-deki yazi salama beraberdi ya yox
//     console.log("Correct")
// }

// let elemText =elem.innerHTML; //elem icindeki butun html verir butun taglari

// let a = document.querySelector("#products .card-item1 a ")

// a.innerText = "Roya"   //innertext yazib burdan basqa deyer versek htmlde hemin text deyisir
// a.innerHTML = "<span>Roya</span>";  //innerHTML yazib hem taglara catmaq olur hemde yeni tag elave etmek olur

// console.log(a)


// let element = document.querySelector("#products .card-item1 h1 ");

// element.style.color = "red";   // h1 reng vermek

// element.style.backgroundColor = "yellow";  //h1 backgroundcolor vermek

// element.style.position = "relative";
// element.style.top = "100px";

// element.className = "test"  //var olan clasi className yazib yeni deger verib deyise bilirik

// console.log(element.classList) //classList -elementin claslarini verir

// element.classList.add("active") //yeni class elave etmek olur claasList yani h1-in clasina elave class


// element.classList.add("Roya")   //Roya clasi elave et


// element.classList.remove("header") //header clasini sil




// let button = document.querySelector("#products .switch") //butonu elde edirik


// button.onclick = function(){  //butonun onclick-yani klikinde bu method islesin onclick-bir kliki dinliyir ancaq
// alert("Clicked")  //klik olanda alerte nese cixarmaq 

// }


// button.onclick = function(){ //bu klik oxunmur
//     alert("Clicked2")
// }


// button.addEventListener("click",function(){ //addEvenListener-butun klikleri oxuyur 
//   alert("Clicked1")
// })
// button.addEventListener("click",function(){  //ikinci klikinde bunu yazdirir
//     // this.style.backgroundColor="red";   //this yani bu butonu verir ve onu rengin deyise bilirsen
//                                            //button.style yazmaqda olar      
// })



// button.addEventListener("click",function(event){   // event- click olunan elementin objectini goturmek ucun functiona gelen bir parametirdi

//     event.target.style.backgroundColor="red";


// })


// let btnon =document.querySelector("#products .buttons .on")
// let btoff =document.querySelector("#products .buttons .off")

// let body = document.querySelector("body");

// let icon =document.querySelector("#products .icon i")


// btnon.addEventListener("click",function(){    //ekran qaranliq on butonu basanda white olur
//     body.style.backgroundColor="white"
//     icon.style.color="yellow"
// })
// btnoff.addEventListener("click",function(){    //of button basanda ekran yene qara olur
//     body.style.backgroundColor="black"
//     icon.style.color="gray"
// })


// icon.addEventListener("click", function () {      //icona basanda body backgroundcoloru olsun-white iconda olsun sari
//     if (!this.classList.contains("active-icon") && !body.classList.contains("active-body")) {
//         this.classList.add("active-icon");       //css yaratdiqimiz classi add-ele ki iconu sari elesin
//         body.classList.add("active-body");       //css yaratdiqimiz classi add-ele ki body backgrouncolor olsun white
//     } else {
//         this.classList.remove("active-icon");    //remove eleki  qayitsin evelki halina
//         body.classList.remove("active-body")     //remove eleki  qayitsin evelki halina
//     }



// })


// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon");    
//     body.classList.remove("active-body") 
// })
// icon.addEventListener("mouseover",function(){
//     this.classList.add("active-icon");      
//     body.classList.add("active-body"); 
// })

// let btn = document.querySelector("#products button")

// let input = document.querySelector("#products input")
// // let header = document.querySelector("#products h1")

// let ul =document.querySelector("#products ul")

// btn.addEventListener("click",function(){   //butona klik edende input text elde et
//    let inputValue = input.value;          
//     header.innerText =inputValue;             //input texti yazdir h1-e
//      input.value = "";     
// })


// btn.addEventListener("click",function(){
//    if(input.value == ""){        //eyer input bos olanda Add olunursa return!dayanacq yaratmayacaq li!
//     alert ("Dont empty")         
//     return;
//    }

//    let items = document.querySelectorAll("li");

//    for (const item of items) {
//     if(item.innerText == input.value){
//         input.value = "";
//         alert("Already exist")
//         return;
//     }
//    }



//     let li =document.createElement("li")  //click edende li yaradir hazir clasdi -createElement

//     li.className= "list-group-item mt-2"   //li beraber bootsrapdaki li clasina

//     li.innerText=input.value;               //li-nin texti beraber olsun inputdan gelen texte

//     ul.append(li);                          //sonra append-hazir methodla ul-enin icine elave edirik
//      input.value = "";
// })




//HOMEWORK


let btn = document.querySelector("#products button")
let input = document.querySelector("#products input")
let ul = document.querySelector("#products ul")


btn.addEventListener("click", function () {
    if (input.value == " ") {
        alert("Dont empty")
        return;
    }

    let items = document.querySelectorAll("li");
    console.log(items);
    for (const item of items) {
        if (item.innerText == input.value) {
            input.value = "";
            alert("Already exist")
            return;
        }
    }

    let li = document.createElement("li")
    li.className = "list-group-item mt-2"
    li.innerText = input.value;
    ul.append(li);
    input.value = "";


    let itemsLi = document.querySelectorAll("#products ul li");
    for (const item of itemsLi) {
        item.addEventListener("click", function () {
            this.remove()
        })
    }



})





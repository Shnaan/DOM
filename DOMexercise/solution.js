let task1 = document.getElementById("task1");
//task1 

task1.innerText = "This text changed using innerText";


//task2
let task2 = document.getElementById("task2");
let Btn = document.createElement("Button");
task2.append(Btn);

//task3

document.body.style.backgroundColor = "#232323";


//task4

let elements = document.querySelectorAll(".item");
for(let  element of elements){

element.style.border = "1px";

}


//task5

 document.getElementById("task5").setAttribute('href',  'https://www.springboard.com/');


//task6

//document.getElementById('task6').placeholder =  'DOM Master';

document.getElementById('task6').value =  'DOM Master';

//Task7
document.getElementById('task7').classList.add('new-class');


//task8

let parent = document.getElementById('task8');
let Btn2 = document.createElement("Button");

parent.append(Btn2);

//task9

let element = document.getElementById('task9');
element.remove();
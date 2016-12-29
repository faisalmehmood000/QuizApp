var mainDiv = document.getElementById('mainDiv');
var mainQDiv = document.getElementById('mainQDiv');
var resultDiv = document.getElementById("result");
var aboutDiv = document.getElementById("about");
function quistionBox() {
    
     resultDiv.setAttribute('class', "hideBox");
       mainDiv.setAttribute("class", "hideBox");
      mainQDiv.setAttribute("class", "innerDiv");
      c0();
      countQ = 00;
       qIncr();
       q1();
       hb();
}

//question counter
var QCounter = document.getElementById('QCountBox');
var  countQ = 00;
function qIncr(){
    countQ++;
    QCounter.innerHTML= countQ;
}
// after correct answer point counter increment
var counter = 0;
var pointCounter = document.getElementById('countBox');
function pointIncr() {
    counter +=  10 ;
    pointCounter.innerHTML = counter;
}
function c0(){
  counter = 0;
  pointCounter.innerHTML = counter;
}

var ca = "Correct";
var w = "Wrong";
var At = "The Correct Answer is </br>";
// var g = "Good"     

var q = document.getElementById('quis');
var opt = document.getElementsByTagName('li');
var a = opt[0];
var b = opt[1];
var c = opt[2];
var d = opt[3];
// Quiz Questions

var cR = ["1- Hazrat Muhammad (Sallallah u Alyhi Wasallam)","4- Hazrat Abdullah","3- Hazrat Aminah","1- 12th of Rabi ul Awwal",
           "3- 40", "4- Makkah","3- 25","3- Last Prophet,  after me","2- Hazrat Muhammad Sallallah Alyhi wa Sallam",
           "1- the most Praiseworthy One"]
  function q1() {
        q.innerHTML= " What is the Name of our beloved Prophet?";

        a.innerHTML = "Hazrat Muhammad (Sallallah u Alyhi Wasallam)";//correct
        a.setAttribute("onclick","pointIncr(),q2(),showMBox(ca,cR[0])");
        b.innerHTML = "Hazrat Essa (Alyhis Salaam)";
        b.setAttribute("onclick","q2(),showMBox(w,At+cR[0])");
        c.innerHTML = "Hazrat Ibrahim (Alyhis Salaam)";
        c.setAttribute("onclick","q2(),showMBox(w,At+cR[0])");
        d.innerHTML = "Hazrat Musa (Alyhis Salaam)";
        d.setAttribute("onclick","q2(),showMBox(w,At+cR[0])");            
}
function q2() {

        q.innerHTML= "What was the name of our holy prophet's Father? ";
        a.innerHTML = "Hazrat Abdul Muttalib";
        a.setAttribute("onclick","q3(),showMBox(w,At+cR[1])");
        b.innerHTML = "Hazrat Hamza";
        b.setAttribute("onclick","q3(),showMBox(w,At+cR[1])");
        c.innerHTML = "Hazrat Abdullah";//correct Answer
        c.setAttribute("onclick","pointIncr(),q3(),showMBox(ca,cR[1])");
        d.innerHTML = "Hazrat Abbaas";
        ans = "Hazrat Abdullah";
        d.setAttribute("onclick","q3(),showMBox(w,At+cR[1])");
}
function q3() {
        q.innerHTML= "What was the name of our holy prophet's Mother? ";
        a.innerHTML = "Hazrat Maryam";
        a.setAttribute("onclick","q4(),showMBox(w,At+cR[2])");
        b.innerHTML = "Hazrat Hawwa";
        b.setAttribute("onclick","q4(),showMBox(w,At+cR[2])");
        c.innerHTML = "Hazrat Haajirah";
        c.setAttribute("onclick","q4(),showMBox(w,At+cR[2])");
        d.innerHTML = "Hazrat Aminah"; //correct Answer
        d.setAttribute("onclick","pointIncr(),q4(),showMBox(ca,cR[2])");
}
function q4() {
        q.innerHTML= "when was our Beloved Prophet born?";
        a.innerHTML = "12th of Rabi ul Awwal on Monday"; //correct Answer
        a.setAttribute("onclick","pointIncr(),q5(),showMBox(ca,cR[3])");
        b.innerHTML = "1st Muharram";
        b.setAttribute("onclick","q5(),showMBox(w,At+cR[3])");
        c.innerHTML = "27th of Ramadan ";
        c.setAttribute("onclick","q5(),showMBox(w,At+cR[3])");
        d.innerHTML = "10th Zul Hajjah";
        d.setAttribute("onclick","q5(),showMBox(w,At+cR[3])");
}
function q5() {
        q.innerHTML= "Prophet Muhammad (Sallallahu Alyhi Wasallam) announced his prophethood at the age of?  ";
        a.innerHTML = "25";
        a.setAttribute("onclick","q6(),showMBox(w,At+cR[4])");
        b.innerHTML = "30";
        b.setAttribute("onclick","q6(),showMBox(w,At+cR[4])");
        c.innerHTML = "40"; //correct Answer
        c.setAttribute("onclick","pointIncr(),q6(),showMBox(ca,cR[4])");
        d.innerHTML = "45";
        d.setAttribute("onclick","q6(),showMBox(w,At+cR[4])");
}
function q6() {
        q.innerHTML= "Prophet Muhammad (Sallallahu Alyhi Wasallam) was born in the City Of ?  ";
        a.innerHTML = "Jerusalem";
        a.setAttribute("onclick","q7(),showMBox(w,At+cR[5])");
        b.innerHTML = "Syria";
        b.setAttribute("onclick","q7(),showMBox(w,At+cR[5])");
        c.innerHTML = "Madinah"; 
        c.setAttribute("onclick","q7(),showMBox(w,At+cR[5])");
        d.innerHTML = "Makkah";   //correct Answer
        d.setAttribute("onclick","pointIncr(),q7(),showMBox(ca,cR[5])");
}
function q7() {
        q.innerHTML= " Prophet Muhammad (Sallallahu Alyhi Wasallam) married Hazrat Khadija(radiyallahu anha) At the age of?  ";
        a.innerHTML = "20";
        a.setAttribute("onclick","q8(),showMBox(w,At+cR[6])");
        b.innerHTML = "28";
        b.setAttribute("onclick","q8(),showMBox(w,At+cR[6])");
        c.innerHTML = "25"; //correct Answer
        c.setAttribute("onclick","pointIncr(),q8(),showMBox(ca,cR[6])");
        d.innerHTML = "35";
        d.setAttribute("onclick","q8(),showMBox(w,At+cR[6])");
}
function q8() {
        q.innerHTML= "Prophet Muhammad Sallallahu Alyhi Wasallam Said:'I am the _________ of Allah There is no Prophet will come _____ ?  ";
        a.innerHTML = "First Prophet,  before me";
        a.setAttribute("onclick","q9(),showMBox(w,At+cR[7])");
        b.innerHTML = "Last Prophet,  before me";
        b.setAttribute("onclick","q9(),showMBox(w,At+cR[7])");
        c.innerHTML = "Last Prophet,  after me"; //correct Answer
        c.setAttribute("onclick","pointIncr(),q9(),showMBox(ca,cR[7])");
        d.innerHTML = "Last Prophet,  before  me";
        d.setAttribute("onclick","q9(),showMBox(w,At+cR[7])");
}
function q9() {
        q.innerHTML= "Who is the Leader Of all Prophets?  ";
        a.innerHTML = "Hazrat Ibrahim Alyhis Salaam";
        a.setAttribute("onclick","q10(),showMBox(w,At+cR[8])");
        b.innerHTML = "Hazrat Muhammad Sallallah Alyhi wa Sallam"; //correct Answer
        b.setAttribute("onclick","pointIncr(),q10(),showMBox(ca,cR[8])");
        c.innerHTML = "Hazrat Dawood Alyhis Salaam";
        c.setAttribute("onclick","q10(),showMBox(w,At+cR[8])");
       
        d.innerHTML = "Hazrat Adam Alyhis Salaam";
        d.setAttribute("onclick","q10(),showMBox(w,At+cR[8])");
}
function q10() {
        q.innerHTML= " What is the meaning of Name ‘Muhammad’?  ";
        a.innerHTML = "The most Praiseworthy One";
        a.setAttribute("onclick","pointIncr(),result(),showMBox(w,At+cR[9])");
        b.innerHTML = "The trustworthy One";
        b.setAttribute("onclick","result(),showMBox(w,At+cR[9])");
        c.innerHTML = "The truthful one"; 
        c.setAttribute("onclick","result(),showMBox(ca,cR[9])");
        d.innerHTML = "None of them";
        d.setAttribute("onclick","result(),showMBox(w,At+cR[9])");
}





// creating result of Quiz
 
function result() {
     

var rank = document.getElementById("rank");
if (counter >= 90){
      rank.innerHTML  = "Excellent";
} 
 else if(counter >= 70) {
      rank.innerHTML = "Good";
} 
else{
         rank.innerHTML = "islamic Quiz";
}
         document.getElementById('score').innerHTML = counter;
         mainQDiv.setAttribute("class", "hideBox");
        resultDiv.setAttribute("class", "innerDiv");
}
//modal box 
var modalBox = document.getElementById('modal_Box');
function hb() {
  modalBox.className ="hideBox";
}
hb();
function showMBox(hukm,ans) {
 modalBox.className = "";
 modalBox.childNodes[3].innerHTML = hukm;
 modalBox.childNodes[5].innerHTML = ans;
 if(hukm === w){
   modalBox.childNodes[3].style.color="red";
   modalBox.style.background= 'radial-gradient(circle, aliceblue, red)';
   
 }
 else{ modalBox.childNodes[3].style.color= "green";
 modalBox.style.background= 'radial-gradient(circle, aliceblue, green)';
}
}
function about() {
  mainQDiv.setAttribute("class", "hideBox");
 aboutDiv.setAttribute("class", "innerDiv");
  mainDiv.setAttribute("class", "hideBox");
}
function back() {
  aboutDiv.setAttribute("class", "hideBox");
  mainDiv.setAttribute("class", "innerDiv");
}



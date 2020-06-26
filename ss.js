var div_heading=document.createElement('div');//div container for Heading.
div_heading.setAttribute('class','div_heading')
div_heading.innerHTML="<h1>Sequence Finder Game</h1>";
document.body.append(div_heading);
var div_page=document.createElement("div");//div container for the elements in the page.
div_page.setAttribute('class','div_page');
var div_main=document.createElement("div");
div_main.setAttribute('class','div_circle');
document.body.append(div_page);
div_page.appendChild(div_main);
var div1=document.createElement("div");
var div2=document.createElement("div");
var div3=document.createElement("div");
var div4=document.createElement("div");
div1.setAttribute('class','div1');
div1.setAttribute('style','border-top-left-radius:100%;background-color: lawngreen;')
div_main.appendChild(div1);
var p=document.createElement('p');
div1.appendChild(p);
p.innerText="1";
div2.setAttribute('class','div1');
div2.setAttribute('style','border-top-right-radius:100%;background-color:yellow');
//div2.setAttribute('style','');
div_main.appendChild(div2);
var p2=document.createElement('p');
div2.appendChild(p2);
p2.innerText="2";
div3.setAttribute('class','div1');
div3.setAttribute('style','border-bottom-left-radius:100%; background-color:rebeccapurple;');
div_main.appendChild(div3);
var p3=document.createElement('p');
div3.appendChild(p3);
p3.innerText="3";
div4.setAttribute('class','div1');
div4.setAttribute('style','border-bottom-right-radius:100%;background-color:darkolivegreen;;');
var p4=document.createElement('p');
div4.appendChild(p4);
p4.innerText="4";
div_main.appendChild(div4);
//For scorecount(Maximum and Current)
var div_score=document.createElement('div');
div_score.setAttribute('class','score');
div_page.appendChild(div_score);
var scoreHeading=document.createElement('div');//For Heading in Score Box
div_score.appendChild(scoreHeading);
var current=document.createElement('div');
current.innerHTML="Current Score";
div_score.appendChild(current);
var max=document.createElement('div');
div_score.appendChild(max);
max.innerHTML="Maximum Score";
scoreHeading.setAttribute('class','score_heading');
scoreHeading.innerHTML="<h2><b>Score Card</b></h2>";
//For reset and play
var div_play=document.createElement('div');
div_play.setAttribute('class','play');
div_page.appendChild(div_play);
//Adding Button for play and reset
var_a=document.createElement('div');
var_b=document.createElement('div');
div_play.appendChild(var_a);//For Play
div_play.appendChild(var_b);//For Reset
var btn_play=document.createElement('button');
btn_play.setAttribute('id','button_play');
div_play.appendChild(btn_play);
btn_play.innerText="Play";
var_a.appendChild(btn_play);
var btn_reset=document.createElement('button');
btn_reset.setAttribute('id','button_reset');
div_play.appendChild(btn_reset);
btn_reset.innerText="Reset";
var_b.appendChild(btn_reset);
//User Input
div_user=document.createElement('div');
div_user.setAttribute('id','userinput');
var txt=document.createElement('input');
//containers for user Input
var item1=document.createElement('div');
var item2=document.createElement('div');
div_user.appendChild(item1);
div_user.appendChild(item2);
item2.appendChild(txt);
item1.innerHTML="Type the pattern:";
div_page.appendChild(div_user);
//JavaScript For Game.
let start=document.getElementById('button_play');
let userseq=document.querySelector('input');
var uservalue="";
let startPlay,gameseq="",score=0,allscores=[];
start.addEventListener('click',function f(){
    let count=0,flag=0;
    var startPlay=setInterval(function(){
        let n=genNumber();
        gameseq+=n;
        console.log(gameseq);
        clearInterval(startPlay);
    },1000)
 userseq.onkeypress=getData;
 function getData(e){
    let temp=e.key;
    if(e.keyCode==13)
    {
        if(gameseq===uservalue)
        {
            score++;
            console.log("score",score);
        }
        else
        {
            allscores.push(score);
            //console.log(allscores);
            flag=1;
        }
       start.removeEventListener('click',f()); 
    }
    else{
        uservalue+=temp.toString();
        console.log("user value",uservalue);
    }
}

    

    
    
  });

//Generating Random Number.
function genNumber(){
    return Math.floor((Math.random()*4)+1);
}
//Getting the quadrant.
var quads=document.getElementsByClassName('div1');
//
/*
displayBlink(){
    var n=0;
    var blink_start=function (){
        setTimeout(function)

    }
}*/
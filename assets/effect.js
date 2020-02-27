// JavaScript Document
var menu1_chk=1;
var dcon = "";
var sname = "";
var roll = "";
var ctime = 0;
var csec = 0;
var clake;
function logoin(){
	izero();
	document.getElementById("clogo").style.transition= ".6s";
	document.getElementById("clogo").style.width= "44vw";
	document.getElementById("clogo").style.left= "28vw";
	document.getElementById("clogo").style.height= "3.5vw";
	document.getElementById("clogo").style.top= "4vw";
	document.getElementById("clogo").style.boxShadow= "0 3px 4px 1px grey";
	setTimeout(tranof,1500);
	setTimeout(logo2in,100);
	setTimeout(menu1in,100);
	setTimeout(menu1_expand,800);
}
function logo2in(){
	document.getElementById("logo2").style.transition= ".6s";
	document.getElementById("logo2").style.top= "11vw";
	document.getElementById("logo2").style.left= "15vw";
	document.getElementById("logo2").style.height= "3vw";
	document.getElementById("logo2").style.width= "70vw";
}
function menu1in(){
	document.getElementById("smenuid").style.transition= ".6s";
	document.getElementById("smenuid").style.top= "14vw";
	document.getElementById("smenuid").style.height= "0vw";
	document.getElementById("smenuid").style.width= "70vw";
	document.getElementById("smenuid").style.left= "15vw";
}

function menu1_expand(){
	document.getElementById("smenuid").style.height= "27vw";
	document.getElementById("smenuid").style.zIndex= "-1";
}
function resultmenu1(){
	document.getElementById("smenu1id").style.width= "40vw";
	document.getElementById("smenu1id").style.transition= ".6s";
	setTimeout(resultmenu2,300);
	setTimeout(resultheading1,300);
	btn1ext();
	setTimeout(tranof,900);
}
function resultmenu2(){
	document.getElementById("smenu1id").style.left= "45vw";
	document.getElementById("btn1id").innerHTML= "Exams";
	rmenu();
	smenu2();
	btn1srnk();	
	setTimeout(resultmenu3,300);
}
function resultmenu3(){
	document.getElementById("smenu1id").style.width= "25vw";
	document.getElementById("smenu1id").style.left= "45vw";
	document.getElementById("smenu1id").style.boxShadow= "-2px 0 3px 2px rgba(0,0,0,0.28)";
	document.getElementById("smenu1id").style.transition= ".3s";
}
function resultheading1(){
	document.getElementById("smenu1_1id").style.left= "-32vw";
	document.getElementById("smenu1_1id").style.transition= ".3s"
	document.getElementById("smenu1_2id").style.left= "-32vw";
	document.getElementById("smenu1_2id").style.transition= ".3s";
	document.getElementById("smenu1_3id").style.transition= ".3s";
	document.getElementById("smenu1_3id").style.left= "-29vw";
}
function btn1ext(){
	document.getElementById("btn1id").style.width= "29vw";
	document.getElementById("btn1id").style.transition= ".6s";
	document.getElementById("btn1id").disabled= true;
}
function btn1srnk(){
	document.getElementById("btn1id").style.width= "14vw";
	document.getElementById("btn1id").disabled= false;
}
function rmenu(){
	document.getElementById("rmenu1_1").style.left= "0vw";
	document.getElementById("rmenu1_1").style.transition= ".6s";
	document.getElementById("rmenu1_2").style.left= "0vw";
	document.getElementById("rmenu1_2").style.transition= ".6s";
	document.getElementById("rmenu1_3").style.left= "0vw";
	document.getElementById("rmenu1_3").style.transition= ".6s";
}
function smenu2(){
	document.getElementById("smenu2id").style.left= "-3vw";
	document.getElementById("smenu2id").style.transition= ".6s";
	setTimeout(smenu2_text,200);
}
function smenu2_text(){
	document.getElementById("smenu2_1id").innerHTML= "Authorization Menu";
	document.getElementById("smenu2_2id").innerHTML= "Username";
	document.getElementById("smenu2_3id").innerHTML= "Password";
	document.getElementById("smenu2_4id").innerHTML= "";
	document.getElementById("b2").innerHTML= "Login";
	document.getElementById("i2").type= "password";
	izero();
}
function menuchkr(){
	if(menu1_chk==1){
		resultmenu1();
		menu1_chk = 0;
	} else {
		menu1_chk = 1;
		resultmenubck();
	}
}
function resultmenubck() {
	document.getElementById("smenu1id").style.width= "40vw";
	document.getElementById("smenu1id").style.left= "30vw";
	document.getElementById("smenu1id").style.transition= ".6s";
	document.getElementById("rmenu1_1").style.left= "15vw";
	document.getElementById("rmenu1_1").style.transition= ".6s";
	document.getElementById("rmenu1_2").style.left= "15vw";
	document.getElementById("rmenu1_2").style.transition= ".6s";
	document.getElementById("rmenu1_3").style.left= "15vw";
	document.getElementById("rmenu1_3").style.transition= ".6s";
	btn1ext();
	setTimeout(resultmenubck1,300);
	setTimeout(tranof,1100);
}
function resultmenubck1(){
	document.getElementById("smenu1id").style.left= "0vw";
	document.getElementById("smenu1id").style.transition= ".6s";
	btn1srnk();
	document.getElementById("btn1id").innerHTML= "Results";
	document.getElementById("btn1id").style.right= "5.5vw";
	setTimeout(resultmenubck2,200);
	rmenubck1();
	smenu2bck();
}
function resultmenubck2(){
	document.getElementById("smenu1id").style.width= "25vw";
	document.getElementById("smenu1id").style.left= "0vw";
	document.getElementById("btn1id").style.left= "5.5vw";
	document.getElementById("smenu1id").style.transition= ".6s";
	document.getElementById("smenu1id").style.boxShadow= "2px 0 3px 2px rgba(0,0,0,0.28)";
	smenu1bck();
}
function rmenubck1(){
	document.getElementById("rmenu1_1").style.left= "40vw";
	document.getElementById("rmenu1_2").style.left= "40vw";
	document.getElementById("rmenu1_3").style.left= "40vw";
	document.getElementById("rmenu1_1").style.transition= ".3s";
	document.getElementById("rmenu1_2").style.transition= ".3s";
	document.getElementById("rmenu1_3").style.transition= ".3s";
}
function smenu1bck(){
	document.getElementById("smenu1_1id").style.left= "0vw";
	document.getElementById("smenu1_1id").style.transition= ".4s"
	document.getElementById("smenu1_2id").style.left= "0vw";
	document.getElementById("smenu1_2id").style.transition= ".4s";
	document.getElementById("smenu1_3id").style.transition= ".4s";
	document.getElementById("smenu1_3id").style.left= "0vw";
}
function smenu2bck(){
	document.getElementById("smenu2id").style.left= "25vw";
	document.getElementById("smenu2id").style.transition= ".6s";
	setTimeout(smenu2_textbck,200);
}
function smenu2_textbck(){
	document.getElementById("smenu2_1id").innerHTML= "Configure Database";
	document.getElementById("smenu2_2id").innerHTML= "Database Name";
	document.getElementById("smenu2_3id").innerHTML= "Table Name";
	document.getElementById("smenu2_4id").innerHTML= "*New databases must have 50 QUESTIONS with 4 OPTIONS and answer in 5<sup>TH</sup> column";
	document.getElementById("b2").innerHTML= "Proceed!";
	izero();
	document.getElementById("i2").type= "text";
}
function tranof(){
	document.getElementById("clogo").style.transition= "none";
	document.getElementById("logo2").style.transition= "none";
	document.getElementById("smenuid").style.transition= "none";
	document.getElementById("smenu1id").style.transition= "none";
	document.getElementById("smenu1_1id").style.transition= "none";
	document.getElementById("smenu1_2id").style.transition= "none";
	document.getElementById("smenu1_3id").style.transition= "none";
	document.getElementById("btn1id").style.transition= "none";
	document.getElementById("rmenu1_1").style.transition= "none";
	document.getElementById("rmenu1_2").style.transition= "none";
	document.getElementById("rmenu1_3").style.transition= "none";
	document.getElementById("smenu2id").style.transition= "none";
	document.getElementById("smenu2_1id").style.transition= "none";
	document.getElementById("smenu2_2id").style.transition= "none";
	document.getElementById("smenu2_3id").style.transition= "none";
	document.getElementById("smenu2_4id").style.transition= "none";
	document.getElementById("error1id").style.transition= "none";
	document.getElementById("war1id").style.transition= "none";
	document.getElementById("name1").style.transition= "none";
	document.getElementById("menutxt2").style.transition= "none";
	document.getElementById("nameshow").style.transition= "none";
	document.getElementById("img_con1").style.transition= "none";
	document.getElementById("timer").style.transition= "none";
}
function izero(){
	document.getElementById("i1").value= "";
	document.getElementById("i2").value= "";
	document.getElementById("i3").value= "";
	document.getElementById("i4").value= "";
	document.getElementById("i5").value= "";
}
function con1(){
	var data1 = document.getElementById("i1").value;
	var tab1 = document.getElementById("i2").value;
	var con = new XMLHttpRequest();
	con.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200){
			dcon = this.responseText;
		}
	};
	con.open("GET", "assets/contest.php?db=" + data1 + "&tb=" + tab1, true);
	con.send();
}
function dchk(){
	if(dcon == "yes"){
		
	}else{
		errorlog();
		setTimeout(errorlogmenubck,100);
	}
}
function menu1chk1(){
	if(menu1_chk==1){
		con1();
		setTimeout(dchk,500);
	}else{
		
	}
}
function errorlog(){
	document.getElementById("error1id").style.transition= ".6s";
	document.getElementById("error1id").style.display= "block";
	document.getElementById("error1id").style.top= "0px";
	document.getElementById("error1id").style.left= "0px";
	document.getElementById("error1id").style.height= "100vh";
	document.getElementById("error1id").style.width= "100vw";
	document.getElementById("error1id").style.zIndex= "2";
	document.getElementById("error1id").style.overflow= "hidden";
	document.getElementById("error1id").style.position= "fixed";
	document.body.style.overflow= "hidden";
	setTimeout(errorlogmenu,200);
}
function errorlogmenu(){
	document.getElementById("war1id").style.transition= ".6s";
	document.getElementById("war1id").style.display= "block";
	document.getElementById("war1id").style.top= "33vh";
	document.getElementById("war1id").style.left= "28vw";
	document.getElementById("war1id").style.height= "15vw";
	document.getElementById("war1id").style.zIndex= "3";
	document.getElementById("war1id").style.width= "44vw";
	setTimeout(tranof,800);
}
function errorlogbck(){
	document.getElementById("error1id").style.transition= ".6s";
	document.getElementById("error1id").style.display= "block";
	document.getElementById("error1id").style.top= "50vh";
	document.getElementById("error1id").style.left= "50vw";
	document.getElementById("error1id").style.height= "0vh";
	document.getElementById("error1id").style.width= "0vw";
	document.getElementById("error1id").style.zIndex= "4";
	document.getElementById("error1id").style.overflow= "hidden";
	document.getElementById("error1id").style.position= "fixed";
	document.body.style.overflow= "visible";
	setTimeout(errorlogmenubck,100);
}
function errorlogmenubck(){
	document.getElementById("war1id").style.transition= ".6s";
	document.getElementById("war1id").style.display= "block";
	document.getElementById("war1id").style.top= "50vh";
	document.getElementById("war1id").style.left= "50vw";
	document.getElementById("war1id").style.height= "0vw";
	document.getElementById("war1id").style.zIndex= "4";
	document.getElementById("war1id").style.width= "0vw";
	setTimeout(tranof,800);
}
function menu1shrnk(){
	document.getElementById("smenuid").style.height= "0vw";
	document.getElementById("smenuid").style.zIndex= "-1";
	document.getElementById("smenuid").style.transition= ".6s";
	document.getElementById("menutxt1").style.transition= ".6s";
	document.getElementById("menutxt2").style.transition= ".6s";
	document.getElementById("menutxt1").style.top= "-3vw";
	document.getElementById("menutxt2").style.top= "0vw";
	logoout();
}
function logoout(){
	document.getElementById("clogo").style.transition= ".6s";
	document.getElementById("clogo").style.backgroundColor= "#BDD6E0";
	document.getElementById("clogo").style.top= "1vw";
	document.getElementById("clogo").style.boxShadow= "none";
	document.getElementById("clogop").style.color= "#BDD6E0";
	setTimeout(header1,600);
}
function header1(){
	document.getElementById("logo2").style.transition= ".6s";
	document.getElementById("logo2").style.top= "0vw";
	document.getElementById("logo2").style.left= "0vw";
	document.getElementById("logo2").style.height= "3vw";
	document.getElementById("logo2").style.width= "100vw";
	document.getElementById("clogo").style.display= "none";
	document.getElementById("clogop").style.display= "none";
	document.getElementById("smenuid").style.display= "none";
	document.getElementById("img_con1").style.paddingLeft= ".5vw";
	document.getElementById("menutxt2").innerHTML= "Test Menu";
	document.getElementById("img_con1").style.transition= ".6s";
	document.getElementById("menutxt2").style.left= "4vw";
	setTimeout(namein,600);
}
function namein(){
	document.getElementById("name1").style.transition= ".6s";
	document.getElementById("name1").style.top= "30vh";
	setTimeout(tranof,600);
}
function nameout(){
	document.getElementById("name1").style.transition= ".6s";
	document.getElementById("name1").style.top= "-30vw";
	sname = document.getElementById("i3").value.toUpperCase();
	roll = document.getElementById("i4").value.toUpperCase();
	ctime = document.getElementById("i5").value;
	setTimeout(nameshow,600);
	setTimeout(timershow,600);
}
function nameshow(){
	document.getElementById("nameshow").style.transition= ".6s";
	document.getElementById("nameshow").style.left= "0vw";
	document.getElementById("sname").innerHTML= sname;
	document.getElementById("rnumber").innerHTML= roll;
}
function timershow(){
	document.getElementById("timer").style.transition= ".6s";
	document.getElementById("timer").style.top= "0vw";
	timerinit();
	setTimeout(tranof,800);
}
function timerinit(){
	if((ctime<=0)||(ctime>99)||(isNaN(ctime))){
		ctime = 25;
	}
	clake = setInterval(timeroperate,1000);
}
function timeroperate(){
	if(ctime < 10){
		document.getElementById("time1").innerHTML = "0" + ctime;
	}else{
		document.getElementById("time1").innerHTML = ctime;
	}
	if(csec < 10){
		document.getElementById("time2").innerHTML = "0" + csec;
	}else{
		document.getElementById("time2").innerHTML = csec;
	}
	if((ctime == 0)&&(csec == 0)){
		timestop();
	}else if(csec == 0){
		csec = 60;
		ctime--;
	}
	csec--;
}
function timestop(){
	clearInterval(clake);
}
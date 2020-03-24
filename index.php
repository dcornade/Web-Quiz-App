<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="author" content="Broken Owl">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Present Test</title>
<link href="assets/effect.css" rel="stylesheet" type="text/css">
<script src="assets/effect.js"></script>
</head>

<body onLoad="setTimeout(logoin,100)">
	<div id="error1id" class="error1"></div>
	<div class="war1" id="war1id">
		<img src="assets/owlcom.jpg" class="war1_img">
		<p class="war1_head"> OOPS! Owl Found an ERROR! </p>
		<p class="war1_subhead">Owl couldn't find the Database You're looking for</p>
		<ul>Here's a few things you can do to help: - 
			<li>Make sure servers are running without any issue</li>
			<li>Make sure Webbrowser have given proper permissions</li>
			<li>Make sure the database in question exists in database</li>
			<li>If all else fails call cornade he must know something</li>
		</ul>
		<button type="submit" class="btn3" onclick="errorlogbck()">Let's Try Again</button>
	</div>
	<div id="clogo" class="compdesc">
		<p id="clogop">Welcome To The Project Made By BrokenOwlCorporation&reg;</p>
	</div>
	<div id="logo2" class="login_container">
		<img src="assets/my logo2.png" class="img_container" id="img_con1">
		<p id="menutxt1">Main Menu</p><p id="menutxt2">Success!</p>
		<button type=submit class="subbtn" id="subbtnid" onClick="timestop()">Submit All</button>
	</div>
	<div class="smenu" id="smenuid">
		<div class="smenu1" id="smenu1id">
			<p class="smenu1_1" id="smenu1_1id">Examination Menu</p>
			<p class="smenu1_2" id="smenu1_2id">Enter your Custom Database and Table <br> to give exam from that table or leave it <br> Blank to use Default Database.</p>
			<p class="smenu1_3" id="smenu1_3id">Want to view Results instead?</p>
			<button type="submit" class="btn1" onClick="menuchkr()" id="btn1id">Results</button>
			<div class="smenu1_1" id="rmenu1_1">Results Menu</div>
			<div class="smenu1_2" id="rmenu1_2">Due to privacy and Sensitivity of <br> information you must enter Username <br> and Pasword to continue</div>
			<div class="smenu1_3" id="rmenu1_3">Want to go back to Exam Menu?</div>
		</div>
		<div class="smenu2" id="smenu2id">
			<p class="smenu2_1" id="smenu2_1id">Configure Database</p>
			<p class="smenu2_2" id="smenu2_2id">Database Name</p>
			<input type="text" id="i1" class="inp1" >
			<p class="smenu2_3" id="smenu2_3id">Table Name</p>
			<input type="text" id="i2" class="inp2">
			<button class="btn2" id="b2" onClick="menu1chk1()">Proceed!</button>
			<p class="smenu2_4" id="smenu2_4id">*New databases must have 50 QUESTIONS with 4 OPTIONS and answer in 5<sup>TH</sup> column</p>
		</div>
		
	</div>
	<div id="name1">
		<p class="name1-1">Name: -</p>
		<input type="text" id="i3" class="inp3">
		<p class="name1-2">Roll Number: -</p>
		<input type="text" id="i4" class="inp4">
		<p class="name1-3">Time: -(in Minutes)</p>
		<input type="text" id="i5" class="inp5">
		<p class="name1-4">*Leave Blank for Default 25 Min.</p>
		<button type="submit" class="btn4" onClick="nameout()">Submit</button>
	</div>
	<div id="nameshow">
		<p class="nameshow1">Name: - </p>
		<p class="nameshow2">Roll Number: -</p>
		<p id="sname"></p>
		<p id="rnumber"></p>
	</div>
	<div id="timer">
		<p class="timerhead">Time  Left : </p>
		<p id="time1">00</p>
		<p class="timecolon">:</p>
		<p id="time2">00</p>
	</div>
	<div id="buttonplace">
	</div>
	<div id="navplace">
		<button id="left1" type="submit" onclick="navleft()">< Previous</button>
		<button id="right1" type="submit" onclick="navright()">Next ></button>
		<button id="submit1" type="submit" onClick="submit1()">Submit</button>
	</div>
	<div class="quepanel" id="quepanel1">
		<p class="que1-1">Question No. : -</p>
		<p id="quenum">1</p>
		<div class="quesum">
			<p class="quesim" id="quesim1"></p>	
		</div>
		<div class="options1" id="option1">
			<p class="opthead">---Options---</p>
			<button class="optbtn" value="1" id="opt1" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="2" id="opt2" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="3" id="opt3" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="4" id="opt4" onClick="opbtn(this.value)"></button>
		</div>
	</div>
	<div class="quepanel" id="quepanel2">
		<p class="que1-1">Question No. : -</p>
		<p id="quenum2"></p>
		<div class="quesum" >
			<p class="quesim" id="quesim2"></p>	
		</div>
		<div class="options1" id="option2">
			<p class="opthead">---Options---</p>
			<button class="optbtn" value="1" id="opt10" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="2" id="opt20" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="3" id="opt30" onClick="opbtn(this.value)"></button>
			<button class="optbtn" value="4" id="opt40" onClick="opbtn(this.value)"></button>
		</div>
	</div>
</body>
</html>
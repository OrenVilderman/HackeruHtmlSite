//Tabs animation
$('.tablinks').on('click', function(event) {
    $('main div[style="display: block;"]').hide().delay(50).slideToggle(400); //.slideDown(200) //"slow"
});

//Sign Up and Log In
document.querySelector("#SignUPForm").addEventListener("submit", function(e){
	// Prevent the form from submitting
	e.preventDefault();
	// dbCreate() will be called when the form is submitted
	dbCreate();
});

var userSigned;
var passSigned;

function dbCreate() {
	userSigned = document.getElementById("SignUPusername").value;
	passSigned = document.getElementById("SignUPpassword").value;
	dbCreateVerification(userSigned,passSigned);
}

function dbCreateVerification(userSignedTemp,passSignedTemp) {
	if(userSignedTemp.length > 2 && passSignedTemp.length > 2 ) {
		location.href="#topPage";
		$( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		document.getElementById('logInMain').click();
		return true;
	} else {
		location.href="#topPage";
		$( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		return false;
	}
}

document.querySelector("#logInForm").addEventListener("submit", function(e){
	// Prevent the form from submitting
	e.preventDefault();
	// logIn() will be called when the form is submitted
	logIn();
});


function logIn() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	logInVerification(user,pass);
}

function logInVerification(user,pass) {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if(user == userSigned && pass == passSigned) {
		document.querySelector("#membersArea").style.display = "block";
		location.href="#topPage";
		$( "div.successL" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		document.getElementById('firstClassMain').click();
		return true;
	} else {
		location.href="#topPage";
		$( "div.failureL" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		return false;
	}
}

//Function for testing example
function logInToTest(strUserName, strUserPass) {
	var user = strUserName;
	var pass = strUserPass;
	if(user == "testName" && pass == "testPass") {
		return true;
	} else {
		return false;
	}
}

function logInExercise() {
	var user = document.getElementById("logInExerciseName").value;
	var pass = document.getElementById("logInExercisePassword").value;
	logInExerciseVerification(user,pass);
}

function logInExerciseVerification(user,pass) {
	if(user == "hackeru" && pass == "hacker123") {
		document.querySelector("#membersArea").style.display = "block";
		location.href="#topPage";
		$( "div.successL" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		return true;
	} else {
		location.href="#topPage";
		$( "div.failureL" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
		return false;
	}
}

const userConst = "hackeru";
const passConst = "hacker123";

function PromptlogIn() {
	var userTemp = prompt ("Please enter your user name");
	var passTemp = prompt("Please enter your password");
	PromptlogInVerification(userTemp,passTemp);
}

function PromptlogInVerification(user,pass) {
	if (user == userConst && pass == passConst){
		alert("Welcome");
		location.href="#topPage";
		$( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
	}else {
		alert ("Wrong password");
		location.href="#topPage";
		$( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
	}
}


function PromptlogIn2() {
	do {
		var userTemp = prompt ("Enter user name");
	} while (userTemp  == "");
	do {
		var passwordTemp = prompt ("Enter password");
	}while (passwordTemp == "");
	PromptlogIn2Verification(userTemp,passwordTemp);
}

function PromptlogIn2Verification(user,pass) {
	if (user == userConst && pass == passConst){
		alert("welcome");
		location.href="#topPage";
		$( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
	} else {
		alert ("Wrong Password");
		location.href="#topPage";
		$( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
	}
}

function logInTest() {
	var userTemp = document.getElementById("userNameToTest").value;
	logInTestVerification(userTemp);
}

function logInTestVerification(user) {
	var usersArray = ["oren","aoren","boren","coren","popcorn"];
		console.log(usersArray.length);
		console.log(usersArray[0]);
	for (i = 0; i < usersArray.length; i++) {
		console.log(i);
		console.log(usersArray[0]);
		if (usersArray[i] == user){
		/*if (usersArray[i] == userNameToTest.value) {*/
			alert("You are logged in !!!");
			break;
		} else if (i == usersArray.length-1) {
			alert("The password or user name is wrong");
		}
	}
}		

//Run script from text configuration
var testStrings = ["function helloWorldTemp() { \n	document.getElementById(\"myTextArea1\").value =\"Hello World!\";\n}\nhelloWorldTemp();",
	"function showTypeAndValue(str) {\n	document.getElementById('myTextArea1').value = \"The type of the var is: 	\"  +\n	typeof(str) + \"\\nThe value of the var is: 	\" + str +\n	\"\\nThe length of the var is: 	\" + ((typeof(str)==\"object\"||typeof(str)=='undefined')?\n	\"Error there is not lenght to \" + typeof(str) : str.length)\n}\nvar name = \"Oren\"; 	//String\nvar num = 2; 		//Number\nvar num1; 		//Undefined\nvar num2 = null; 	//null=object\nshowTypeAndValue(name);",
	"var num1 = 5; 	//Number\nvar num2 = 4; 	//Number\nvar temp = num1 + \"+\" + num2 + \" = \" + (num1+num2);\ndocument.getElementById('myTextArea2').value = num1 + \"+\" + num2 + \" = \" + (num1+num2);\n/*document.getElementById('myTextArea2').value = num1 + \"*\" + num2 + \" = \" + (num1*num2);*/\n/*document.getElementById('myTextArea2').value = num1 + \"/\" + num2 + \" = \" + (num1/num2);*/",
	"var nameFirst = \"Oren\"; 	//String\nvar nameFamily = \"Vilderman\"; 	//String\nvar nameFull = nameFirst+ \" \" + nameFamily;\ndocument.getElementById('myTextArea2').value = \"My full name is: \" + nameFull;\n/*document.getElementById('myTextArea2').value = \"My full name size is: \" + nameFull.length;*/",
	"function myNum(){\n	var myNum = prompt(\"Entrer a number;\");\n	myNum = Number(myNum);\n	alert(\"The value of your number times 2 will be printed to the console\");\n	alert(\"The value of your number times 2 will be printed to the text area\");\n	console.log(myNum + myNum);\n	document.getElementById('myTextArea3').value = myNum + \"*\" + 2 + \" = \" + (myNum*2);\n}\nmyNum();"]

function showTypeAndValue(str) { 
	document.getElementById('myTextArea1').value = "The type of the var is: 	" + typeof(str) + "\nThe value of the var is: 	" + str + "\nThe length of the var is: 	" + ((typeof(str)=="object"||typeof(str)=='undefined')? "Error there is not lenght to " + typeof(str) : str.length)
}

function test(texArea) {
	var userFunction = document.getElementById("myTextArea" + texArea).value;
	var test = new Function("return function (){ " + userFunction + " };")();
	test();
}

function integratedTest(str,texArea) {
	document.getElementById("myTextArea" + texArea).value = str;
}

//In first class JS
function shrinkText(){
	pera1.innerHTML = "...";
	alert("The text will shrink");
}

function revertText(){
	pera1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>";
	alert("The text will revert back");
}

//In second class JS
function getAllFields(runThis){
	var number1 = Number(document.getElementById("number1").value);
	var number2 = Number(document.getElementById("number2").value);
	var number3 = Number(document.getElementById("number3").value);
	if (runThis == 'addAllFields'){
		addAllFields(number1, number2, number3);
	} else {
		MultiplyAllFields(number1, number2, number3);
	}
}
function addAllFields (number1, number2, number3) {
	alert("This is the sum of all the numbers: " + (number1+number2+number3));
}
function MultiplyAllFields (number1, number2, number3) {
	alert("This is the multiply of all the numbers: " + (number1*number2*number3));
}

function getAllFields2(runThis){
	var number4 = Number(numb1.value);
	var number5 = Number(numb2.value);
	var number6 = Number(numb3.value);
	if (runThis == 'addAllFields2'){
		addAllFields2(number4, number5, number6);
	} else {
		MultiplyAllFields2(number4, number5, number6);
	}
}
function addAllFields2(number1, number2, number3) {
	alert("This is the sum of all the numbers: " + (number1+number2+number3));
}
function MultiplyAllFields2(number1, number2, number3) {
	alert("This is the mmultiply of all the numbers: " + (number1*number2*number3));
}

function getTextFields(runThis){
	var str1 = document.getElementById("str1").value;
	var str2 = document.getElementById("str2").value;
	if (runThis == 'firstNameFirst'){
		printStr(str1, str2);
	} else {	
		printStr(str2, str1);
	}
}
function printStr(str1, str2) {
	alert("The name is: " + str1 + " " + str2);
}

function buyItems(){
	var priceT = Number(totalPrice.value);
	var countT = Number(itemAmount.value);
	var percentDiscount = 0;
	var overDiscount = 0;
	if (countT > 5) {
		percentDiscount = priceT*0.15;
	}
	if (priceT > 300) {
		overDiscount = 50;
	}
	if (percentDiscount > overDiscount) {
		alert("You've won a 15% off offer, you'll only pay: " + (priceT-percentDiscount) + " NIS")
	} else if (percentDiscount < overDiscount) {
		alert("You've won an offer price of NIS 50 off,  you'll only pay: " + (priceT-overDiscount) + " NIS")
	} else if (overDiscount > 0) {
		alert("You've won an offer price of NIS 50 off,  you'll only pay: " + (priceT-overDiscount) + " NIS")
	} else {
		alert("You must pay full price of " + priceT + " NIS")
	}
}

function changeTabText(){
	var newText = newTabText.value;
	changeHTML.innerHTML=newText;
}

function calculateMoneyLeft(){
	var intCostPerKid = Number(costPerKid.value);
	var intKidsT = Number(kidsT.value);
	var intMusicLessonPerMonth = Number(musicLessonPerMonth.value);
	var intTripsCostT = Number(tripsCostT.value);
	var intGardenWorkingMonths = Number(gardenWorkingMonths.value);						
	var moneyPaid = intKidsT*intCostPerKid;
	var costMusic = intMusicLessonPerMonth*intGardenWorkingMonths;
	var totalLeftCash = moneyPaid-intTripsCostT-costMusic;
	alert(totalLeftCash + " Will remain at the end of year to gift the kindergarten teacher");
}

function calculateCashLeft(){
	var intCostPerFlat = Number(costPerFlat.value);
	var intCostCleanPerFloor = Number(costCleanPerFloor.value);
	var intFlatsPerFloor = Number(flatsPerFloor.value);
	var intFloorsT = Number(totalFloors.value);
	var appartmentsT = intFloorsT*intFlatsPerFloor;
	var incomePerMonth = appartmentsT*intCostPerFlat;
	var paymentsPerMonth = intFloorsT*intCostCleanPerFloor;
	alert("At the end of each month, the House Committee maintains " + (incomePerMonth-paymentsPerMonth) + " NIS");
	alert("At the end of the year, the House Committee maintains " + (incomePerMonth-paymentsPerMonth)*12 + " NIS");
}

//In third class JS
function printTenTimes(){
	var namePrint = prompt("Please enter your name");
	var newName = "";
	for (var i = 0; i < 10 ; i++) {
		newName += namePrint + "<br/>";
	}
	namePosition.innerHTML=newName;
}

function printMultiTable(){
	var newTable = "";
	for (var j = 1; j < 11 ; j++) {
		for (var i = 1; i < 11 ; i++) {
			newTable += i*j;
			if (i*j < 10) {
				newTable += "&nbsp;&nbsp;";
			}
			if (i%10 == 0 && (i*j) != 100) {
				newTable +="&nbsp;&nbsp; | ";
			} else {
				newTable +=" | ";
			}
		}
		newTable += "<br/>";
	}
	tablePosition.innerHTML=newTable;
}

function printNumbersUp(){
	for (var i = 15; i < 36 ; i++) {
		alert(i);
	}
}

function printNumbersDown(){
	for (var i = 35; i > 14 ; i--) {
		alert(i);
	}
}

function printNumbersEven(){
	var intUserNumber = Number(userNumber.value);
	do {
		if (intUserNumber%2 ==0) {
			alert(intUserNumber);
		}
		intUserNumber--;
	} while (intUserNumber > 1);
}

function printAllWords(){
	var intUserNumber = Number(arraySize.value);
	var wordsArray = [];
	for (var i = 0; i < intUserNumber; i++) {
		wordsArray[i] = prompt("Enter a word " + (i+1)+ "/" + intUserNumber);
	}
	for (var i = 0; i < wordsArray.length; i++) {
			alert(wordsArray[i]);
	}
}

function printAllWordsFlipped(){
	var intUserNumberFlipped = Number(arraySizeFlipped.value);
	var wordsArrayFlipped = [];
	for (var i = 0; i < intUserNumberFlipped; i++) {
		wordsArrayFlipped[i] = prompt("Enter a word " + (i+1)+ "/" + intUserNumberFlipped);
	}
	for (var i = wordsArrayFlipped.length; i > 0; i--) {
			alert(wordsArrayFlipped[i-1]);
	}
}

function printFibonacciNum(){
	var intFibonacciNum = Number(fibonacciNum.value);
	var tempintFibonacciNum = 0;
	if (intFibonacciNum == 0) {
		answerPosition.innerHTML = "The Fibonacci number at F(0) is 0";
	} else if (intFibonacciNum == 1) {
		answerPosition.innerHTML = "The Fibonacci number at F(1) is 1";
	} else if (intFibonacciNum < 0){
		answerPosition.innerHTML = "Invalid number";
	} else {
		var firstF = 0;
		var secondF = 0;
		var thridF = 1;
		for (i = 2; i <= intFibonacciNum; i++) {
			firstF = secondF;
			secondF = thridF;
			thridF = firstF+secondF;
		}
	answerPosition.innerHTML = "The Fibonacci number at F(" + intFibonacciNum + ") is " + thridF;
	}
}

//In fourth class JS
function printLargest(){
	var intUserNumber = Number(arraySizeLargest.value);
	var numbersArray = [];
	for (var i = 0; i < intUserNumber; i++) {
		numbersArray[i] = prompt("Enter the next number " + (i+1)+ "/" + intUserNumber);
	}
	var largestTemp = Number(numbersArray[0]);
	for (var i = 0; i < numbersArray.length; i++) {
		if (largestTemp < Number(numbersArray[i])) {
			largestTemp = Number(numbersArray[i])
		}
	}
	answerPositionLargest.innerHTML = "The Largest number in the array is:  " + largestTemp;
}

function printFlipFT(){
	var arrayToPrint = "";
	for (var i = 1; i <= 100; i++) {
		if (i%3 == 0 && i%5 == 0) {
			arrayToPrint += " FT</br>";
		} else if (i%3 == 0) {
			arrayToPrint += " T";
		} else if (i%5 == 0) {
			arrayToPrint += " F";
		} else {
			arrayToPrint += " " + i;
		}
	}
	answerPositionFlipFT.innerHTML = arrayToPrint;
}

function printTry(){
	var triangleStr = "";
	var triangleSize = 5;
	for (var j = 1; j <= triangleSize; j++) {
		for (var i = 1; i <= triangleSize; i++) {
			if (j>=i) {
				triangleStr += "*";
			}
		}triangleStr += "</br>";
	}
	printTryArea.innerHTML = triangleStr;
}

function divideByTen(){
	var intDividedNumber = Number(dividedNumber.value);
	intDividedNumber = intDividedNumber/10;
	answerDivided.innerHTML = "Number as is: " + intDividedNumber;
	intDividedNumber = Math.round(intDividedNumber);
	answerDividedRound.innerHTML = "Number rounded: " + intDividedNumber;
}

function flipTheString(){
	var stringToFlipTemp = stringToFlip.value;
	var stringToFlipOut = "";
	var intOfStringToFlip = Number(stringToFlip.value.length);
	for (i = 0 ; i < intOfStringToFlip ; i++) {
		stringToFlipOut = stringToFlipTemp.charAt(i) + stringToFlipOut;
	}
	answerFlippedString.innerHTML = "This is the string flipped: " + stringToFlipOut;
}

function orenNumber(){
	var stringToConvertTemp = stringToConvert.value;
	theNumberBefore.innerHTML = "This is the string as number: " + stringToConvertTemp + " " + typeof(stringToConvertTemp);	
	var stringToConvertTemp = stringToConvert.value - 0;
	theNumberBack.innerHTML = "This is the string as number: " + stringToConvertTemp + " " + typeof(stringToConvertTemp);
}

//In the main screen functions
function imgSizeMin(){
	imgHackeru.style.width = "6%";
}

function imgSizeMid(){
	imgHackeru.style.width = "40%";
}

function imgSizeMax(){
	imgHackeru.style.width = "55%";
}

//adding tabs functions
var activeTabname = "";
var tabListner;

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	activeTabname = "#" + tabName	;
	tabListner = document.getElementsByClassName('mainView')[0];
	tabListner2 = document.getElementsByClassName('mainView')[1];
	tabListner.addEventListener('click', function (event) {
		document.querySelector(activeTabname).style.display = "none";
	});
	tabListner2.addEventListener('click', function (event) {
		document.querySelector(activeTabname).style.display = "none";
	});
}

//adding collapsible functions
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
		  content.style.maxHeight = null;
		} else {
		  content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
}

//Random Prompt Functions
function PromptFullName(){
	var first = prompt("Please enter your first name");
	var last = prompt ("Please enter you last name");
	console.log(first +" "+ last);
	alert("Your name was printed to the console");
}

function PromptCheckAge(){
	var age = prompt("Enter age")
	if (age *1 <= 16 ){
		alert("You cant drive");
	}
	else {
		alert("You can drive");
	}
}

function PromptCheckAge2(){
	var age = prompt("Enter age");
	if (age <=16 ){
		alert("You cant drive");
	} else if (age <=18 ){
		alert("You can start");
	} else if (age < 70 ){
		alert("You can drive");
	} else {
		alert("Please go to see your doctor");
	}
}

function checkSize(){
	var size = prompt ("Enter size number");
	if (size >= 24 && size <= 30){
		alert("S");
	}
	else if (size >=31 && size <= 36  ){
		alert("M");
	} else if (size >36 ){
		alert ("L");
	}
}	

function sumPrice(){
	var sum = null;
	for (let i=0; i<5 ; i++){
		if (sum != null) {
			sum += prompt("Enter the price of " + (5-i) + " more items")*1;
		} else {
		sum += prompt("Enter the price of " + (5-i) + " items")*1;
		}
	}
	alert(sum);
}

function sumUntilZero (){		
	n = 1;
	var sum = 0;
	while (n != 0){
		var n = prompt("Enter a number or 0 to sum");
		n = Number(n);
		sum += n;
	}
	alert(sum);
}

function pyramidCounter(){
	var num = prompt("Please enter a number to the calculator");
	num = Number(num);
	var sum = 0;
	for (let i=0; i<= num ; i++){
		sum += i;
	}
	alert("The sum of all the blocks in the pyramid is: " +sum);
}

function CreateSentence(){
	var num = prompt("How long is your sentence?");
	num = Number(num);
	var s = "";
	for (let i=0; i<num ; i++){
		i == 0? s += prompt("Enter the first word")
		: s += prompt("Enter the next word" + (i+1) + "/" + num);
		s += " ";
	}
	alert("The sentence is: " + s);
}

function isEven(){
	var n = prompt("Enter number to chack if even or odd");
	n = Number(n);
	if (n%2 ==0){
		alert("The number is even");
	} else {
		alert("The number is odd");
	}
}

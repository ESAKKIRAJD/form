function validFunction(){
	var fName=document.getElementById('firstName').value;
	var lName=document.getElementById('lastName').value;
	var email=document.getElementById('mail').value;
	var pass=document.getElementById('password').value;
	var mon=document.getElementById('month').value;
	var days=document.getElementById('day').value;
	var years=document.getElementById('year').value;

	 
	if(null==fName||fName==""){
		document.getElementById('firstNameErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('firstNameErr').innerHTML="";
	}
	if(null==lName||lName==""){
		document.getElementById('lastNameErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('lastNameErr').innerHTML="";
	}
	if(null==email||email==""){
		document.getElementById('emailErr').innerHTML="";
	}else{
		document.getElementById('emailErr').innerHTML="Password does not match";
	}
	
	
	if(null==pass||pass==""){
		document.getElementById('PasswordErr').innerHTML="";
	}else{
		document.getElementById('PasswordErr').innerHTML="Password does not match";
	}
	
	if(null==mon||mon==""){
		document.getElementById('monthErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('monthErr').innerHTML="";
	}
	if(null==days||days==""){
		document.getElementById('dayErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('dayErr').innerHTML="";
	}
	if(null==years||years==""){
		document.getElementById('yearErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('yearErr').innerHTML="";
	}
	if(null==genders||genders==""){
		document.getElementById('genderErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('genderErr').innerHTML="";
	}
}
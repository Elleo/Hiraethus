var gender = "male";
var skinColor = "light";
var hairCount = 0;
var eyes = "blue";
var hair = "bald";
var hairColor = "blonde";
var hairStyles = [];
hairStyles["female"] = [];
hairStyles["female"][0] = "bald";
hairStyles["female"][1] = "bangslong";
hairStyles["female"][2] = "bangsshort";
hairStyles["female"][3] = "loose";
hairStyles["female"][4] = "pixie";
hairStyles["female"][5] = "ponytail";
hairStyles["female"][6] = "princess";
hairStyles["female"][7] = "swoop";
hairStyles["female"][8] = "unkempt";
hairStyles["male"] = [];
hairStyles["male"][0] = "bald";
hairStyles["male"][1] = "bangs";
hairStyles["male"][2] = "bedhead";
hairStyles["male"][3] = "long";
hairStyles["male"][4] = "longhawk";
hairStyles["male"][5] = "messy1";
hairStyles["male"][6] = "messy2";
hairStyles["male"][7] = "page";
hairStyles["male"][8] = "parted";
var rotationOffset = 128;

function setGender(g) {
	gender = g;
	$("#gender").hide(500);
	$("#newchar").css("background-image", "url('img/2/" + skinColor + gender + ".png')");
	$("#trousers").css("background-image", "url('img/2/" + gender + "-trousers-green.png')");
	$("#shirt").css("background-image", "url('img/2/" + gender + "-shirt-white.png')");
	$("#shoes").css("background-image", "url('img/2/" + gender + "-shoes-brown.png')");
	if(gender == "male") {
		setHair("bangs");
	} else {
		setHair("bangslong");
	}

	$("#features").show(500);
	return false;
}

function setSkin(c) {
	skinColor = c;
	$("#newchar").css("background-image", "url('img/2/" + skinColor + gender + ".png')");
	return false;
}

function nextHair() {
	hairCount++;
	if(hairCount >= hairStyles[gender].length) {
		hairCount = 0;
	}
	setHair(hairStyles[gender][hairCount]);
	return false;
}

function previousHair() {
	hairCount--;
	if(hairCount < 0) {
		hairCount = hairStyles[gender].length;
	}
	setHair(hairStyles[gender][hairCount]);
	return false;
}

function setHair(h) {
	hair = h;
	if(hair == "bald") {
		$("#hair").css("background-image", "none");
	} else {
		$("#hair").css("background-image", "url('img/2/" + gender + "-" + hair + "-" + hairColor + ".png')");
	}
	return false;
}

function setHairColor(c) {
	hairColor = c;
	setHair(hair);
	return false;
}

function rotateRight() {
	rotationOffset += 64;
	if(rotationOffset > 192) {
		rotationOffset = 0;
	}
	$(".charsprite").css("background-position", "0px -" + rotationOffset + "px");
	return false;
}

function rotateLeft() {
	rotationOffset -= 64;
	if(rotationOffset < 0) {
		rotationOffset = 192;
	}
	$(".charsprite").css("background-position", "0px -" + rotationOffset + "px");
	return false;
}

function setEyes(c) {
	eyes = c;
	$("#eyes").css("background-image", "url('img/2/" + gender + "-eyes-" + eyes + ".png')");
	return false;
}

var realResult;
var firstAnss;
var secAnss;
var thirdAnss;
var forthAnss;
var fifthAnss;


function finalResult() {
    let firstAnss = firstAns.value
    console.log(firstAnss);

    let secAnss = secAns.value
    console.log(secAnss);

    let thirdAnss = thirdAns.value
    console.log(thirdAnss);

    let forthAnss = forthAns.value
    console.log(forthAnss);

    let fifthAnss = fifthAns.value
    console.log(fifthAnss);

    
let realResult = result.value
console.log(realResult);


if (firstAnss=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss=="blue whale"){
    result.value = "5/5"
    theEdit.innerText = "CONGRATULATIONS! You just passed the Annual Confirmation Test"
}
else if ((firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") ||
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale")) {
    result.value = "4/5"
    theEdit.innerText = "CONGRATULATIONS! You got 4 out of 5"
}
else if ((firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") ||
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale")) {
    result.value = "3/5"
    theEdit.innerText = "You got 3 out of 5, you can do better"
}
else if ((firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale") ||
(firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale")) {
    result.value = "2/5"
    theEdit.innerText = "you got 2 out of 5, you can do better next year"
}
else if ((firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss=="6" && fifthAnss!=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss!=="8" && thirdAnss=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale") || 
(firstAnss!=="hydrogen" && secAnss=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale") ||
(firstAnss=="hydrogen" && secAnss!=="8" && thirdAnss!=="diamond" && forthAnss!=="6" && fifthAnss!=="blue whale")) {
    result.value = "1/5"
    theEdit.innerText = "you got 1 out of 5, do well to come back next year..."
}
else if (firstAnss=="" && secAnss=="" && thirdAnss=="" && forthAnss=="" && fifthAnss==""){
    alert("you have to answer the questions")
}

else{
    result.value = 0
    theEdit.innerText = "Who registered you for the test 😂...COME BACK NEXT YEAR ABEG!"
}

}
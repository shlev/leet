export function printTestResult(testPass, pInput, pOutput ) {
    console.log(testPass);
  
    let pResult = document.createElement('p');
    let resultText = testPass ? "Pass" : "Fail";
    let resultColor = testPass ? "green" : "red";
    pResult.innerHTML = `Input: head = ${resultText}`
    pResult.style.color = resultColor
  
    document.body.appendChild(pInput);
    document.body.appendChild(pOutput);
    document.body.appendChild(pResult);
}
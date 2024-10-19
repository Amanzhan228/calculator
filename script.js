function calculatePrice() {

    let basePrice = 100;
    let educationCoeff = parseFloat(document.getElementById("education").value);
    let netWorthCoeff = parseFloat(document.getElementById("netWorth").value);
    let casteBonus = parseFloat(document.getElementById("caste").value);

    let skillBonus = 0;
    skillBonus += document.getElementById("instrument").checked ? 10 : 0;
    skillBonus += document.getElementById("cook").checked ? 20 : 0;
    skillBonus += document.getElementById("easygoing").checked ? 15 : 0;
    skillBonus += document.getElementById("sing").checked ? 10 : 0;

    let ageCoeff = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationCoeff = 1;
    reputationCoeff *= document.getElementById("parentsGossip").checked ? 0.85 : 1; 
    reputationCoeff *= document.getElementById("characterGossip").checked ? 0.9 : 1;
    basePrice += document.getElementById("generalGossip").checked ? -20 : 0;

    let finalPrice = basePrice * educationCoeff * netWorthCoeff * ageCoeff + casteBonus + skillBonus;
    finalPrice *= reputationCoeff;


    document.getElementById("price").innerText = finalPrice.toFixed(2);  
}

document.querySelector("button").addEventListener("click", calculatePrice);

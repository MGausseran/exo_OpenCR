let listeMots = ["balançoire", "zigouigoui", "anticonstitutionnellement", "poubelle", "atome", "train", "voiture", "zouave", "évaluation"];

let score = 0;
let randomIndex = Math.floor(Math.random() * listeMots.length)
let motUtilisateur = prompt("Ecrivez le mot suivant : " + listeMots[randomIndex]);

if (motUtilisateur === listeMots[randomIndex]) {
    console.log("Bravo, vous avez bien orthographié le mot !")
    score += 1;
    alert(`Vous avez ${score} points !`)
}
else {
    alert("Vous avez fait une erreur de frappe.")
}
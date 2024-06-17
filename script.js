let listeMots = ["balançoire", "zigouigoui", "anticonstitutionnellement", "poubelle", "atome", "train", "voiture", "zouave", "évaluation"];
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];
let score = 0;
let randomIndexMots = Math.floor(Math.random() * listeMots.length);
let randomIndexPhrases = Math.floor(Math.random() * listePhrases.length);

let choix = prompt("Veuillez choisir entre 'mots' ou 'phrases': ");
while (choix !== "mots" && choix !== "phrases") {
    prompt("Veuillez choisir l'une des deux listes proposées.")
}
if (choix === "mots") {
    let motUtilisateur = prompt("Ecrivez le mot suivant : " + listeMots[randomIndexMots]);
    if (motUtilisateur === listeMots[randomIndexMots]) {
        console.log("Bravo, vous avez bien orthographié le mot !")
        score += 1;
        alert(`Vous avez ${score} point(s) !`);
    }
    else {
        alert("Vous avez fait une erreur de frappe.");
        alert(`Vous avez ${score} point(s)!`);
    }

}
else {
    let phraseUtilisateur = prompt("Ecrivez la phrase suivante: " + listePhrases[randomIndexPhrases]);
    if (motUtilisateur === listeMots[randomIndexPhrases]) {
        console.log("Bravo, vous avez bien orthographié la phrase !")
        score += 1;
        alert(`Vous avez ${score} point(s) !`);
    }
    else {
        alert("Vous avez fait une erreur de frappe.");
        alert(`Vous avez ${score} point(s)!`);
    }
};
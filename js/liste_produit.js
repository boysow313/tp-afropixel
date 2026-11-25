import { CarteProduit } from "./carte_produit.js";

export class ListeProduit{
    constructor(images){
        this.carteProduits = []
        for (const picture of images) {
            this.carteProduits.push(
                new CarteProduit(picture.id, picture.nom, picture.prix, picture.categorie, picture.url)
            )
        }
    }

    rendre(){
        let rendu = ''
        for (const carteProduit of this.carteProduits) {
            rendu += carteProduit.rendre()
        }

        return `<div class="liste_produits">${rendu}</div>`
    }

    changer(id, difference){
        let nombre = 0
        let total = 0
        let lignes = ''

        for (const carte of this.carteProduits) {
            if (carte.id === id && carte.quantite + difference >= 0) {
                carte.quantite += difference
                document.getElementById(`quantite_${id}`).textContent = carte.quantite
            }
            if (carte.quantite > 0) {
                nombre += carte.quantite
                total += carte.quantite * carte.prix
                lignes += `<li><span>${carte.nom}: ${carte.quantite}</span><span>${carte.quantite * carte.prix} CFA</span></li>`
            }
        }

        document.getElementById('compteur').textContent = nombre
        document.getElementById('panier_liste').innerHTML = lignes || '<li>Votre panier est vide</li>'
        document.getElementById('panier_total').textContent = total
    }
}
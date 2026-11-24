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
}
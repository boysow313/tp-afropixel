import { images } from "../pictures.js";
class CarteProduit {
    constructor(id, nom, prix, categorie, url) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
        this.quantite = 0;
    }

    rendre(){
        return `
            <div class="carte_produit">
                <img class="image_produit" src="${this.url}" alt="${this.nom}">
                <div>${this.nom}</div>
                <div>${this.prix.toLocaleString('fr-FR')} CFA</div>
                <div class="div_actions">
                    <button onclick="liste_produits.changer(${this.id}, 1)">+</button>
                    <span class="quantite" id="quantite_${this.id}">0</span>
                    <button onclick="liste_produits.changer(${this.id}, -1)">-</button>
                </div>
            </div>
        `
    }
}

class ListeProduit{
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

        for (const carte of this.carteProduits) {
            if (carte.id === id && carte.quantite + difference >= 0) {
                carte.quantite += difference
                document.getElementById(`quantite_${id}`).textContent = carte.quantite
            }
            nombre += carte.quantite
        }

        document.getElementById('compteur').textContent = nombre
    }
}

const liste_produits = new ListeProduit(images)

document.getElementById('app').innerHTML = liste_produits.rendre()
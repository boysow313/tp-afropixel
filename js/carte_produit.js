export class CarteProduit {
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
                <img class="image_produit" src="${this.url}">
                <div>${this.nom}</div>
                <div>${this.prix} CFA</div>
                <div class="div_actions">
                    <button onclick="liste_produits.changer(${this.id}, 1)">+</button>
                    <span id="quantite_${this.id}">0</span>
                    <button onclick="liste_produits.changer(${this.id}, -1)">-</button>
                </div>
            </div>
        `
    }
}

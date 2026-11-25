import { images } from "../pictures.js";
import { ListeProduit } from "./liste_produit.js"

const liste_produits = new ListeProduit(images)
window.liste_produits = liste_produits

document.getElementById('app').innerHTML = liste_produits.rendre()

document.getElementById('panier_icone').onclick = () => {
    document.getElementById('panier_resume').classList.toggle('cache')
}
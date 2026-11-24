import { images } from "../pictures.js";
import { ListeProduit } from "./liste_produit.js"

const liste_produits = new ListeProduit(images)

document.getElementById('app').innerHTML = liste_produits.rendre()
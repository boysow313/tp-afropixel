let images = [
	{
		"id": 1,
		"nom": "Femme noire",
		"prix": 25000,
		"categorie": "art",
		"url": "images/blackness.jpg"
	},
	{
		"id": 2,
		"nom": "Girls in Tech",
		"prix": 18000,
		"categorie": "technologie",
		"url": "images/deux.jpg"
	},
	{
		"id": 3,
		"nom": "Femme musulmane",
		"prix": 27500,
		"categorie": "religion",
		"url": "images/muslima.jpg"
	},
	{
		"id": 4,
		"nom": "Jigeen ci Tech",
		"prix": 20000,
		"categorie": "technologie",
		"url": "images/trois.jpg"
	},
	{
		"id": 5,
		"nom": "Les gadgets high tech",
		"prix": 19500,
		"categorie": "technologie",
		"url": "images/un.jpeg"
	},
	{
		"id": 6,
		"nom": "Centre de controle",
		"prix": 12500,
		"categorie": "papier peint",
		"url": "images/wallpaper-1.jfif"
	},
	{
		"id": 17,
		"nom": "Dark Army",
		"prix": 17000,
		"categorie": "papier peint",
		"url": "images/wallpaper-2.jpeg"
	},
	{
		"id": 20,
		"nom": "Champions d'Afrique",
		"prix": 22000,
		"categorie": "papier peint",
		"url": "images/wallpaper-3.jpg"
	},
	{
		"id": 21,
		"nom": "Bureau Mac OS",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-4.png"
	},
	{
		"id": 22,
		"nom": "Bureau Mac OS bleu",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-5.jpg"
	},
	{
		"id": 23,
		"nom": "Logo Ubuntu",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-6.jpg"
	},
	{
		"id": 24,
		"nom": "Cyber Task Force",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-7.jpg"
	},
	{
		"id": 25,
		"nom": "Regard profond",
		"prix": 17500,
		"categorie": "papier peint",
		"url": "images/wallpaper-8.jpg"
	},
	{
		"id": 26,
		"nom": "Administrateur",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-9.jpg"
	},
	{
		"id": 7,
		"nom": "Cybercriminalité",
		"prix": 120012000,
		"categorie": "papier peint",
		"url": "images/wallpaper-10.jfif"
	}
]

const galerie = document.getElementById('galerie');
const compteur = document.getElementById('compteur');

let total = 0;

function ajouter() {
    total++;
    compteur.textContent = total;
}

function retirer() {
    if (total > 0) {
        total--;
        compteur.textContent = total;
    }
}

let html = '';

for (const image of images) {
    html += `
        <div class="carte">
            <img src="${image.url}" alt="${image.nom}">
            <p>${image.nom}</p>
            <p>${image.prix} CFA</p>
            <button onclick="ajouter()">+</button>
            <button onclick="retirer()">-</button>
        </div>
    `;
}

galerie.innerHTML += html;
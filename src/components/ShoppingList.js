// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={`${plant}-${index}`}>{plant}</li>
//             ))}
//         </ul>
//     )
// }

// export default ShoppingList

import { plantList } from "../datas/plantList"; // Importation de données : Le code importe un fichier appelé "plantList" depuis un chemin spécifié "../datas/plantList". Ce fichier contient une liste d'objets représentant différentes plantes, avec des propriétés telles que "name", "category", "id".

// Ce code est destiné à être utilisé dans une application React pour afficher une liste de courses, où les plantes sont regroupées par catégorie.
function ShoppingList() {   // C'est un composant React qui génère une liste de courses.
    const categories = plantList.reduce(    //La méthode reduce() est utilisée sur la liste des plantes (plantList). Cette méthode est utilisée pour réduire le tableau à une seule valeur. Dans ce cas, elle est utilisée pour extraire uniquement les catégories uniques des plantes.
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )

    return (    // la fonction retourne une structure HTML qui contient deux listes non ordonnées <ul>. La première liste contient les catégories de plantes, et la deuxième liste contient les noms de toutes les plantes.
        <div>
            <ul>
                {categories.map((cat) => (  // La méthode map() est utilisée sur le tableau de catégories pour créer une liste <ul> contenant une série d'éléments <li>, chacun représentant une catégorie unique de plantes.
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => ( // Une deuxième liste est créée avec la méthode map() sur la liste complète des plantes. Chaque plante est affichée sous forme d'élément <li> avec son nom, et chaque élément <li> a un attribut key qui est l'ID unique de la plante.
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList // Le composant ShoppingList est exporté pour être utilisé ailleurs dans l'application.
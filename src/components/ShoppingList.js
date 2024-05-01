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

import { useState } from 'react'
import { plantList } from "../datas/plantList"; // Importation de données : Le code importe un fichier appelé "plantList" depuis un chemin spécifié "../datas/plantList". Ce fichier contient une liste d'objets représentant différentes plantes, avec des propriétés telles que "name", "category", "id".
//import CareScale from './CareScale';
import PlantItem from './PlantItem';
import Categories from "./Categories";
import '../styles/ShoppingList.css'

// Ce code est destiné à être utilisé dans une application React pour afficher une liste de courses, où les plantes sont regroupées par catégorie.
function ShoppingList({ cart, updateCart}) {   // C'est un composant React qui génère une liste de courses.
    const [activeCategory, setActiveCategory] = useState('')
    // 'categories' nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
    const categories = plantList.reduce(    //La méthode reduce() est utilisée sur la liste des plantes (plantList). Cette méthode est utilisée pour réduire le tableau à une seule valeur. Dans ce cas, elle est utilisée pour extraire uniquement les catégories uniques des plantes.
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
    )

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (    // la fonction retourne une structure HTML qui contient deux listes non ordonnées <ul>. La première liste contient les catégories de plantes, et la deuxième liste contient les noms de toutes les plantes.
        <div className='lmj-shopping-list'>
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

            {/*<ul>
                {categories.map((cat) => (  // La méthode map() est utilisée sur le tableau de catégories pour créer une liste <ul> contenant une série d'éléments <li>, chacun représentant une catégorie unique de plantes.
                    <li key={cat}>{cat}</li>
                ))}
            </ul>*/}
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                //key={id} // Assurez-vous que la clé est unique
                                //id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            {/*<button onClick={() => updateCart(cart +1)}>Ajouter</button>*/}
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>) : null
				)} 
            </ul>
        </div>
    )
}

/* OU dans le 2ème <ul> mettre 
{plantList.map((plant) => ( // Une deuxième liste est créée avec la méthode map() sur la liste complète des plantes. Chaque plante est affichée sous forme d'élément <li> avec son nom, et chaque élément <li> a un attribut key qui est l'ID unique de la plante.         
                 {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                 {plant.isBestSale ? <span>🔥</span> : null}
                 {plant.isBestSale && <span>🔥</span>}        Indiquée entre accolades,  &&   précède un élément JSX et précise que l'élément ne sera généré que si la condition est respectée 
                    //<li key={plant.id}>{plant.name} {plant.isBestSale && <span>🔥</span>}</li>
                    //<li key={plant.id}>{plant.name} {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}</li>
                    //<li key={plant.id}>{plant.name} {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}</li>
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name} 
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
                ))}
*/

export default ShoppingList // Le composant ShoppingList est exporté pour être utilisé ailleurs dans l'application.
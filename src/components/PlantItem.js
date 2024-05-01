import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}


/* EVENEMENT SYNTHETIQUE 
il s'agit de la même interface que pour les événements natifs du DOM, sauf qu'ils sont compatibles avec tous les navigateurs.
function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}
onClick={handleClick}
*/

function PlantItem({  cover, name, water, light }) { //key={id}  id,
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)} > {/* on déclare une fonction directement dans  onClick  (les fonctions fléchées sont très pratiques pour ça). Cette fonction appellera handleClick en lui passant  name   en paramètre  */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
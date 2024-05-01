// function CareScale(props) {
//     const scaleValue = props.scaleValue
//     return <div>{scaleValue}☀️</div>
// }
    
// function CareScale(props) {
//     const scaleValue = props.scaleValue

//     const range = [1, 2, 3]

//     return (
//         <div>
//             {range.map((rangeElem) =>
//                 scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
//             )}
//         </div>
//     )
// }

/* DESTRUCTURATION
const {scaleValue, careType} = props
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType
Cela nous permet de déclarer directement nos deux variables  scaleValue   et  careType  , et de les assigner aux valeurs passées en props. On peut même directement l'écrire dans les paramètres :

function CareScale({scaleValue, careType}) {s
*/

// function CareScale({ scaleValue, careType }) {
//     const range = [1, 2, 3]
//     const scaleType = careType === 'light' ? '☀️' : '💧'

//     return (
//         <div>
//             {range.map((rangeElem) =>
//                 scaleValue >= rangeElem ? (
//                     <span key={rangeElem.toString()}>{scaleType}</span>
//                 ) : null
//             )}
//         </div>
//     )
// }

import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// on peut créer un state  cart  . Avec  useState  , nous devons déclarer en même temps une fonction pour mettre à jour ce state ( updateCart  ), et lui attribuer une valeur initiale, qui sera ici de 0
//const [cart, updateCart] = useState(0)

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )
        }>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
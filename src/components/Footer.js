import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    // un input pour récupérer le mail de l'utilisateur, en appliquant la méthode de composant contrôlé. La syntaxe du state que nous avons utilisée dans ce chapitre pour  inputValue   et  setInputValue   qui utilise useState est d'ailleurs déjà écrite dans la base de code
	function handleInput(e) {
		setInputValue(e.target.value)
	}

    // l'événement  blur   (quand on clique en dehors du champ) qui déclenche une alerte si inputValue ne contient pas le caractère "@". Cette alerte devra préciser "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.”
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
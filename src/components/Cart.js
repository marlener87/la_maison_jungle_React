import '../styles/Cart.css'
import { useState, useEffect } from 'react'

// ajouter un bouton dans mon panier qui permet d'ajouter un monstera avec la fonction que nous venons de déclarer
function Cart({ cart, updateCart}) {
    //const monsteraPrice = 8
    // const [cart, updateCart] = useState(0)  // variable et fonction      on la passe dans App.js
    const [isOpen, setIsOpen] = useState(true) // variable et fonction
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

    // const items = Object.keys(cart)
    // const total = items.reduce(
	// 	(acc, item) => acc + cart[item].amount * cart[item].price,
	// 	0
	// )
    
    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }, [total])
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])
    

    //const ivyPrice = 10
    //const flowerPrice = 15
    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >Fermer</button>
            {/*<h2>Panier</h2>
            <div>Monstera : {monsteraPrice}€</div>
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>*/}
            {cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >Ouvrir le Panier</button>
        </div>
    )  
}

export default Cart

/*
<div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice}€</li>
            <li>Lierre : {ivyPrice}€</li>
            <li>Fleurs : {flowerPrice}€</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice }€*/

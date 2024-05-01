import '../styles/Banner.css'
//import logo from '../assets/logo.png'
//import Recommendation from './Recommendation'

// function Banner() {
//     //return <h1>La maison jungle</h1>
    
//     // return <div className='lmj-banner'>
//     //     <h1>La maison jungle</h1>
//     // </div>

//     const title = 'La maison jungle'
//     /*const currentMonth = new Date().getMonth();
//     const isSpring = currentMonth >= 2 && currentMonth <= 5;
//     const recommendation =  isSpring ? (
//             <div>C'est le printemps, rempotez</div>
//         ) : (
//             <div>Ce n'est pas le moment de rempoter</div>
//         )
//     console.log(currentMonth); // janvier est à 0*/

//     return (
//         <div className='lmj-banner'>
//             <div className='lmj-banner-row'>
//                 <img src={logo} alt='La maison jungle' className='lmj-logo' />
//                 <h1 className='lmj-title'>{title}</h1>
//             </div>
//             <Recommendation />
//         </div>
//     )
// }

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner



/* Pour les recommandations de rempotage
// SOIT mettre ça dans la div juste après la div className='lmj-banner-row' , en enlevant 'const recommendation'
    {isSpring ? (
            <div>C'est le printemps, rempotez</div>
        ) : (
            <div>Ce n'est pas le moment de rempoter</div>
    )}

// SOIT 
    const recommendation =  isSpring ? (
            <div>C'est le printemps, rempotez</div>
        ) : (
            <div>Ce n'est pas le moment de rempoter</div>
        )

ET {recommendation} juste après la div className='lmj-banner-row'
*/
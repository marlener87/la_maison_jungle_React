import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    //return <h1>La maison jungle</h1>
    
    // return <div className='lmj-banner'>
    //     <h1>La maison jungle</h1>
    // </div>

    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner
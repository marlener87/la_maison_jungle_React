// NE FONCTIONNE PAS

// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)

//     return (
//     <form onSubmit={handleSubmit}>
//         <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//         <button type='submit'>Entrer</button>
//     </form>
// )

// }
// export default handleSubmit


// import { useState } from 'react'

// function QuestionForm() {
//     const [inputValue, setInputValue] = useState('Posez votre question ici')
//     return (
//         <div>
//             <textarea
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
//         </div>
//     )
// }

// export default QuestionForm

// import {useForm} from "react-hook-form";

// let counter = 0;

// function App() {
//     const {register, handleSubmit} = useForm();
//     const onSubmit = (d) => 
//         alert(JSON.stringify(d));

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>
//                 First Name :
//                 <input {...register("firstName")} />
//             </label>
//             <label>
//                 Last Name :
//                 <input {...register("lastName")} />
//             </label>

//             <p>Render : <span>{counter++}</span></p>
//             <input type="submit" value="submit" />
//         </form>
//     );
// }

// export default App
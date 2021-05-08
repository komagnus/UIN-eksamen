import { useState } from "react";
import { Abonner } from "../styles/ContactStyle";
const Subscribe = ({ loading, onSubmit }) => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({email});
    }

    return(
        <Abonner>
        <form className="subform" onSubmit={handleSubmit} method="POST">
            
            <label htmlFor="abboner">
                Abonner på nyhetsbrevet!
            </label>
            <input 
                id="abboner"
                onChange={(event)=> setEmail(event.target.value)} 
                value={email}
                type="email" 
                placeholder="olanordmann@gmail.com" 
                required>

            </input>
            

            
            <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
            
        </form>
        </Abonner>
    )
}
export default Subscribe;
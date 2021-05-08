import { useState } from "react";
import { KursformStyle } from "../../styles/kursStyles";


const KursPrisSkjema = ({ loading, onSubmit, title }) => {
    const [epost, setEpost] = useState('');
    const [name, setName] = useState('');
    const [tlf, setTlf] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({title, epost, name, tlf});
    }

    return(
        <form onSubmit={handleSubmit} method="POST">
            <KursformStyle>
                <label htmlFor="title"></label>
                    <p id="title" value={title} required>{title}</p>
                <label htmlFor="epost">
                    Epost:
                    </label>
                        <input 
                        id="epost"
                        onChange={(event)=> setEpost(event.target.value)} 
                        value={epost}
                        type="text" 
                        placeholder="Skriv inn din epost for å melde deg på kurset" 
                        required>
                        </input>
                <label htmlFor="name">
                    Navn:
                    </label>
                        <input 
                        id="name"
                        onChange={(event)=> setName(event.target.value)} 
                        value={name}
                        type="text" 
                        placeholder="Skriv inn fullt navn for å melde deg på kurset" 
                        required>
                        </input>
                <label htmlFor="tlf">
                    Telefonnummer:
                    </label>
                    <input 
                    id="tlf"
                    onChange={(event)=> setTlf(event.target.value)} 
                    value={tlf}
                    type="text" 
                    placeholder="Skriv inn ditt telefonnummer for å melde deg på kurset" 
                    required>
                    </input>
                <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
                </KursformStyle >
        </form>
    )
}
export default KursPrisSkjema;
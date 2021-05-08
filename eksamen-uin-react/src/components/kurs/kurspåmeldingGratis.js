import { useState } from "react";


const KursSkjema = ({ loading, onSubmit, title }) => {
    const [epost, setEpost] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({title, epost});
    }

    return(
        <form onSubmit={handleSubmit} method="POST">
            <section>
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
            <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
            </section>
        </form>
    )
}
export default KursSkjema;
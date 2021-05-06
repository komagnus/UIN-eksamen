import { useState } from "react";
import { TipsSkjema} from '../styles/ContactStyle';

const ContactForm = ({ loading, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState ('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({title, content});
    }

    return(
        <form onSubmit={handleSubmit} method="POST">
            <TipsSkjema>
            <label htmlFor="title">
                Tittel:
                </label>
                <input 
                id="title"
                onChange={(event)=> setTitle(event.target.value)} 
                value={title}
                type="text" 
                placeholder="Hva tipser du om?" 
                required>

                </input>
            
            <label htmlFor="content">
                Innhold:
                </label>
                <textarea id="content"onChange={(event)=> setContent(event.target.value)} value={content} type="text" rows="10" cols="50" placeholder="Skriv beskjed her..." required></textarea>
            
            <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
            </TipsSkjema>
        </form>
    )
}
export default ContactForm;
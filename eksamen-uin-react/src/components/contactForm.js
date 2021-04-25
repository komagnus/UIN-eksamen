import { useState } from "react";

const ContactForm = ({ loading, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState ('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({title, content});
    }

    return(
        <form onSubmit={handleSubmit} method="POST">
            <label id="title">
                Tittel:
                <input 
                onChange={(event)=> setTitle(event.target.value)} 
                value={title}
                type="text" 
                id="title" 
                placeholder="Hva tipser du om?" 
                required>

                </input>
            </label>
            <label id="content">
                Innhold:
                <textarea onChange={(event)=> setContent(event.target.value)} value={content} type="text" id="content" rows="10" cols="60" placeholder="Skriv beskjed her..." required></textarea>
            </label>
            <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
        </form>
    )
}
export default ContactForm;
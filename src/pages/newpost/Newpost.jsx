import './Newpost.css'
import React, { useState } from 'react';
import InputField from '../../components/InputField.jsx';
import Button from "../../components/Button.jsx";

function Newpost() {

    const [formState, setFormState] = useState({
        author: '',
        comments: 0,
        content: '',
        id: 0,
        readTime: 0,
        created: '',
        shares: 0,
        subtitle: '',
        title: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="newpostPage">
            <h1>Newpost</h1>
            <form onSubmit={{handleSubmit}}>
                <InputField name="author" label="naam" inputType="text" value={formState.author} onchange={(e) => setFormState.author(e.target.value)}/>
                <InputField name="title" label="titel verhaal" inputType="text" value={formState.title} onchange={(e) => setFormState.title(e.target.value)}/>
                <InputField name="subtitle" label="korte inleiding verhaal" inputType="text" value={formState.subtitle} onchange={(e) => setFormState.subtitle(e.target.value)}/>
                <InputField name="content" label="je verhaal" inputType="textarea" value={formState.content} onchange={(e) => setFormState.title(e.target.value)} rows={12} cols={42}/>
                <Button type="submit">Verzend</Button>
            </form>
        </div>
    )
}

export default Newpost
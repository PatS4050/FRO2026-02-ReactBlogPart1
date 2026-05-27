import './NewPost.css'
import React, { useState } from 'react';
import InputField from '../../components/InputField.jsx';
import Button from "../../components/Button.jsx";

function NewPost() {

    const [formState, setFormState] = useState({
        author: '',
        content: '',
        subtitle: '',
        title: '',
    })

    function handleSubmit(e) {
        const event = new Date();

        e.preventDefault();
        console.log({...formState, created:event.toISOString(), comments:0, shares:0});
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;
        setFormState({
            ...formState,
                [changedFieldName]: e.target.value,

        });

    }

    return (
        <div className="newpostPage">
            <h1>Newpost</h1>

            <section>

            <form onSubmit={handleSubmit}>
                <InputField
                    name="author"
                    label="naam"
                    inputType="text"
                    value={formState.author}
                    changeHandler={handleChange}
                />
                <InputField
                    name="title"
                    label="titel verhaal"
                    inputType="text"
                    value={formState.title}
                    changeHandler={handleChange}
                />
                <InputField
                    name="subtitle"
                    label="korte inleiding verhaal"
                    inputType="text"
                    value={formState.subtitle}
                    changeHandler={handleChange}
                />
                <p>je verhaal</p>
                <textarea
                    name="content"
                    label="je verhaal"
                    value={formState.content}
                    onChange={handleChange}
                    rows="12"
                    cols="42"
                    minLength={300}
                    maxLength={2000}
                >je verhaal</textarea>
                <Button
                    type="submit"

                >Verzend</Button>
            </form>
            </section>

        </div>
    )
}

export default NewPost
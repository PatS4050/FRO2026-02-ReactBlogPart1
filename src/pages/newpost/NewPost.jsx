import './NewPost.css'
import React, { useState } from 'react';
import InputField from '../../components/inputField/InputField.jsx';
import Button from "../../components/button/Button.jsx";
import calcReadTime from "../../helpers/calcReadTime.jsx";
import axios from "axios";

function NewPost() {
    const linkApi = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
    //project id = 'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'

    const [formState, setFormState] = useState({
        author: '',
        content: '',
        subtitle: '',
        title: '',
    })

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e) {
        const event = new Date();
        e.preventDefault();
        toggleError(false)
        toggleLoading(true)

        console.log({...formState, created:event.toISOString(), comments:0, shares:0, readTime:calcReadTime(formState.content)});
    try {
        const response = await axios.post(linkApi, {
            ...formState,
            created:event.toISOString(),
            comments:0,
            shares: 0,
            readTime:calcReadTime(formState.content)
            }, {
            headers: {'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'}})
    } catch (e) {
        toggleError(true)
        console.error(e);
    }
    finally {
        toggleLoading(false);
    }
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
                {error && <ErrorMessage
                    message="Er is iets misgegaan. Probeer het opnieuw"/>}
            </section>

        </div>
    )
}

export default NewPost
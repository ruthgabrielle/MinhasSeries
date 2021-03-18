import React, { useState } from 'react';
import axios from 'axios';
import {
    Redirect
} from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSucess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios
        .post('/api/genres', {
            name
        }).then(res => {
            setSucess(true)
        })
    }

    if (success) {
     return <Redirect to='/genders'/>
    }

    return (
        <div className='container'>
            <h1>Novos Gêneros </h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro'/>
                </div>
            </form>
            <button type="submit" onClick={save} className="btn btn-primary">Salvar</button>
        </div>
    )
}
export default NovoGenero;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Redirect
} from 'react-router-dom'

const InfoSerie = ({match}) => {
    const [name, setName] = useState('')
    const [success, setSucess] = useState(false)
    const [data, setData] = useState({})

    useEffect(() =>{
        axios
            .get('/api/series/' + match.params.id)
            .then(res => {
                setData(res.data)
            })
    },[match.params.id])

    const onChange = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios
        .post('/api/series', {
            name
        }).then(res => {
            setSucess(true)
        })
    }

    if (success) {
     return <Redirect to='/series'/>
    }

    return (
        <div>
            <header>
                <div className='h-100' style={{ background: 'rgba(0,0,0,0.7'}}>
                    <div className='row'>
                        <div className='col-3'>
                            foto
                        </div>
                        <div className='col-8'>
                            titulo
                        </div>
             
                    </div>
                </div>
            </header>
                <div className='container'>
                    <h1>Nova Série </h1>
                    <pre>{JSON.stringify(data)}</pre>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Nome</label>
                            <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Série'/>
                        </div>
                    </form>
                    <button type="submit" onClick={save} className="btn btn-primary">Salvar</button>
                </div>
        </div>
    )
}
export default InfoSerie;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Redirect
} from 'react-router-dom'

const NovaSerie = () => {
    const [form, setForm] = useState({})
    const [success, setSucess] = useState(false)
    const [genres, setGenres] = useState([])
    const [data, setData] = useState({})
    const [genreId, setGenreId] =  useState('')
    
    useEffect(() => {
        axios
            .get('/api/series/' )
            .then(res => {
                setData(res.data)
                setForm(res.data)
            })
    })

    const save = () => {
        axios
        .post('/api/series', {
            ...form,
            genre_id: genreId
        }).then(res => {
            setSucess(true)
        })
    }

    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res=> {
            setGenres(res.data.data)
            const genres = (data, res.data.data)
            const encontrado = genres.find(value => data.genre === value.name)
            if(encontrado && form ){
                setGenreId(encontrado.id)
            }
        })
    }, [data])

    const onChangeGenre = evt => {
        setGenreId(evt.target.value)
    }

    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

    if (success) {
     return <Redirect to='/series'
     />
    }

    return (
        <div className='container'>
            <h1>Nova Série </h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={form.name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Série'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Gênero</label>
                    <select className='form-control' onChange={onChangeGenre} value={genreId}> 
                    {genres.map(genre =>  <option hey={genre.id} value={genre.id}>{genre.name} </option> )}
                    </select>
                </div>
            </form>
            <button type="submit" onClick={save} className="btn btn-primary">Salvar</button>
        </div>
    )
}
export default NovaSerie;
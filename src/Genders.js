import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Link 
} from 'react-router-dom'

const Genders = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res => {
            setData(res.data.data)
        })
    }, [])

    const deleteGenero = id => {
        axios
            .delete('/api/genres/' + id)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }

    const renderizaLinha = record => {
        return(
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteGenero(record.id)}> Remover </button>
                    <Link to={'/genders/' + record.id} className='btn btn-warning'> Editar </Link>
                </td>

            </tr>
        )
    }

    if(data.length === 0) {
        return (
            <div className='container'>
                <h1> Genêros </h1>
                <div>
                <Link to='/genders/novo' className='btn btn-primary'> Novo Gênero </Link>
                </div>
                <div className='alert alert-warning' role='alert'>
                    Você não possui gêneros criados ainda.
                </div>
            </div>
        )
    }

    return(
        <div className='container'>
         <h1>Genders</h1>
                <div>
                <Link to='/genders/novo' className='btn btn-primary'> Novo Gênero</Link>
                </div>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>NOME</th>
                    <th scope='col'>AÇÕES</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )

}

export default Genders;
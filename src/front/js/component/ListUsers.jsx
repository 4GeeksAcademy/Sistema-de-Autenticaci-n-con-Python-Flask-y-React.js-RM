import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext.js'

const ListUsers = () => {
    const { store, actions } = useContext(Context)

    const token = localStorage.getItem('token')
    const userName = localStorage.getItem('name');

    return (
        <div>
            <h1>Bienvenid@ {userName} A Lista de Usuarios</h1>
            <button className="btn btn-primary" onClick={async () => await actions.getList()}>Obtener Lista</button>
            <br />
            <ul>
                {
                    store.userList.map((user, index) => {
                        return (
                            <li key={index}>{user.name}</li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-danger" onClick={actions.logout}>Cerrar sesión</button>

        </div>
    )
}
export default ListUsers
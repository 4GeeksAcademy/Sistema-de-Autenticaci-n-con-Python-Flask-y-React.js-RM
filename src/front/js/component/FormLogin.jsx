import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext.js'

const FormLogin = () => {
    const { actions } = useContext(Context)
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",

    })
    const handleData = (e) => {
        let valor = e.target.value
        let type = e.target.name
        setFormLogin({ ...formLogin, [type]: valor })
    }
    const sendDataLogin = async (e) => {
        e.preventDefault() //para que era esto, lo olvide?
        try {
            console.log("la data enviada a flux es para ejercutar el fecth login es: ", formLogin)
            await actions.login(formLogin)
            setFormLogin({
                email: "",
                password: "",
            })

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='col-2 container-fluid'>
            <h1>Login</h1>
            <form onSubmit={sendDataLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input value={formLogin.email} name='email' type="email" onChange={handleData} className="form-control" id="email" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={formLogin.password} name='password' type="password" onChange={handleData} className="form-control" id="password'" />
                </div>

                <button type="submit" className="btn btn-primary">Log-in</button>
            </form>
        </div>
    )


}

export default FormLogin
import React, { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppContainer, AppButton, AppInput } from '../src/components';

const Login = props => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <Head>
                <title>Infoweb chat - Login</title>
            </Head>
            <main>
                <AppContainer>
                    <AppInput 
                        label="Usuário"
                        title="apelido ou email do usuario"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <AppInput 
                        label="Senha"
                        type="password"
                        title="senha do usuário"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <AppButton
                        onClick={event => router.back ()}
                        label="voltar"
                        color="secondary"
                        variant='outlined'
                    />
                    <AppButton
                        title="Clique aqui para entrar no chat"
                        label="Entrar no chat"
                        variant='contained'
                        disabled={!(!!name && !!password)}
                    />
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;
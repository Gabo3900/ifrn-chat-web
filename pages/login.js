import React from 'react';
import Head from 'next/head'
import { AppContainer } from '../src/components/AppContainer';
import { AppInput } from '../src/components/AppInput';
import { AppButton } from '../src/components/AppButton';

const Login = props => {
    return (
        <AppContainer>
            <Head>
                <title>Página de login</title>
            </Head>
            <form>
                <AppInput 
                    label="Usuário: "
                    type="text"
                    title="apelido ou email do usuario"
                />
                <AppInput 
                    label="Senha: "
                    type="password"
                    title="senha do usuário"
                />
                <AppButton />
            </form>
        </AppContainer>
    );
};

export default Login;
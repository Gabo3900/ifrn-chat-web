import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppContainer } from '../src/components/AppContainer';
import { AppInput } from '../src/components/AppInput';
import { AppButton } from '../src/components/AppButton';

const Login = props => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Página de login</title>
            </Head>
            <main>
                <nav>
                    <p>Chat de Infoweb</p>
                    <button onClick={() => router.back()}>voltar</button>
                </nav>
                <AppContainer>
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
                </AppContainer>
            </main>
        </div>
    );
};

export default Login;
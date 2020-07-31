import React, { useState } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export const Input = styled.input`
    background: var(--dark);
    color: var(--white);
`;

function CadastroCategoria(){

    const categoria = {
        nome: '',
        descricao: '',
        cor: '#ff0000'
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(categoria);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(evento){
        setValue(
            evento.target.getAttribute('name'),
            evento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>

            <form onSubmit={function handlerSubmit(evento){
                evento.preventDefault();
                setCategorias([
                    ...categorias, values
                ]);

                setValues(categoria)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text" 
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="text" 
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color" 
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para a Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
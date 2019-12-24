import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Container } from './styles';

export default function Fag() {
    const [fags, setFags] = useState([]);

    useEffect(() => {
        async function loadQuestion() {
            const response = await api.get('/parse/classes/FAQ', {
                headers: { 'X-Parse-Application-Id': 'br.com.metasix.poc' },
            });
            setFags(response.data.results);
        }
        loadQuestion();
    }, [fags]);

    return (
        <Container>
            <div className="card-fag">
                <h1>
                    <span>Faq</span> - Perguntas frequentes
                </h1>
                <div className="search">
                    <input placeholder="Busque por termo..." type="text" />
                    <button type="button">
                        <i className="fas fa-search" /> &nbsp; buscar
                    </button>
                </div>
            </div>

            <div className="nav-question">
                <ul>
                    <li className="description-search">
                        <li>Pergunta</li>
                        <li>
                            <button type="button">
                                <i className="fas fa-plus-circle" />
                                &nbsp; Nova Pergunta
                            </button>
                        </li>
                    </li>
                    <li className="order">Ordem</li>
                    <li className="edit">Editar</li>
                    <li className="delete">Excluir</li>
                </ul>
            </div>

            <div className="question-styles">
                {fags.map(fag => (
                    <ul key={fag.objectId}>
                        <li>
                            <span>{fag.question}</span>
                        </li>
                        <li className="icons">
                            <li className="order-data">{fag.position}</li>
                            <li className="edit-data">
                                <i className="fas fa-edit" />
                            </li>
                            <li className="trash-data">
                                <i className="fas fa-trash" />
                            </li>
                        </li>
                    </ul>
                ))}
            </div>
        </Container>
    );
}

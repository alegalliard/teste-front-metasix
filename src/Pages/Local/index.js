import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Buttons';

export default function Fag() {
    return (
        <Container>
            <Header />
            <div className="button">
                <Link to="/">
                    <Button text="home" />
                </Link>
                <Link to="fags">
                    <Button className="" text="Fag" />
                </Link>
                <Link to="locais">
                    <Button text="Locais" />
                </Link>
                <Link to="categorias">
                    <Button text="categorias" />
                </Link>
            </div>
        </Container>
    );
}

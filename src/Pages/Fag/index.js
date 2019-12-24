import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Buttons';

export default function Fag() {
    return (
        <Container>
            <Header />
            <div className="button">
                <Button text="home" />
                <Button id="button-fag" text="Fag" />
                <Button text="Locais" />
                <Button text="categorias" />
            </div>
        </Container>
    );
}

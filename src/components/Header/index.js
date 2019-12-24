import React, { useState } from 'react';

import Resp from '../Resp';

import { Container } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <Container>
            <div className="nav">
                <img src={logo} alt="logo" />
                <ul>
                    <li className="modules">
                        <li>
                            <i className="fas fa-th" />
                        </li>
                        <li>Módulos</li>
                    </li>
                    <li className="log-out">
                        <li>
                            <i className="fas fa-sign-out-alt" />
                        </li>
                        <li className="log-out-text">Log out</li>
                    </li>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <i className="fas fa-times-circle" />
                        ) : (
                            <i className="fas fa-bars" />
                        )}
                    </button>
                </ul>
            </div>
            {isMenuOpen && (
                <div>
                    <Resp />
                </div>
            )}
        </Container>
    );
}

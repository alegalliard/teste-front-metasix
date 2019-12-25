import React from 'react';

import { Responsive } from './styles';

export default function Resp() {
    return (
        <Responsive>
            <ul>
                <li>
                    <i className="fas fa-th" />
                    <li>Módulos</li>
                </li>
                <li>
                    <i className="fas fa-sign-out-alt" />
                    <li>Log out</li>
                </li>
            </ul>
        </Responsive>
    );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Button(props) {
    return (
        <Container>
            <button type="button">{props.text}</button>
        </Container>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

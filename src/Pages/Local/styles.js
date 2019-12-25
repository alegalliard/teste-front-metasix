import styled from 'styled-components';

export const Container = styled.div`
    background: #fafafa;

    .button {
        display: flex;
        margin-left: 4rem;
        a {
            text-decoration: none;
        }

        .btnFag {
            background: blue;
        }
    }

    @media (max-width: 700px) {
        .button {
            display: flex;
            flex-direction: column;
        }
    }
`;

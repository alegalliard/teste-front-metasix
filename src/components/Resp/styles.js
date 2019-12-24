import styled from 'styled-components';

export const Responsive = styled.div`
    @media (min-width: 700px) {
        display: none;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;

        height: 7rem;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    height: 120px;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        height: 50px;
        /* margin-top: 15px; */
    }

    button {
        height: 36px;
        width: 76px;
        border-radius: 10px;
        border: none;
        margin-right: 26px;
        background: #fff;
        font-size: 1rem;
        color: #707070;
        text-transform: uppercase;

        box-shadow: 1px 1px 10px 0.5px rgba(0, 0, 0, 0.22);

        @media (max-width: 700px) {
            width: 100%;
        }
    }
`;

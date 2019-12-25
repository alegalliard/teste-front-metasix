import styled from 'styled-components';

export const Container = styled.div`
    background: #0168b4;

    @media (max-width: 700px) {
        margin-bottom: 1.5rem;
    }

    img {
        max-width: 165px;

        @media (max-width: 700px) {
            max-width: 125px;
        }
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 8.8rem;
        padding: 0 4.3rem;
    }

    ul {
        display: flex;

        list-style: none;

        li {
            color: #fff;
            font-size: 1.1rem;

            i {
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }
        }

        .modules {
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (max-width: 700px) {
                display: none;
            }
        }
        .log-out {
            .fa-sign-out-alt {
                display: flex;
                flex-direction: column;
                align-items: center;

                margin-left: 4.4rem;

                @media (max-width: 700px) {
                    display: none;
                }
            }
        }

        .log-out-text {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-left: 4.4rem;
            @media (max-width: 700px) {
                display: none;
            }
        }

        .fa-bars {
            display: flex;
            flex-direction: column;
            align-items: center;

            color: #fff;
            font-size: 2rem;

            margin-left: 4.4rem;
            cursor: pointer;

            @media (min-width: 700px) {
                display: none;
            }
        }

        .fa-times-circle {
            color: #fff;
            font-size: 2rem;

            @media (min-width: 700px) {
                display: none;
            }
        }

        button {
            background: none;
            border: none;
        }
    }
`;

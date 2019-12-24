import styled from 'styled-components';

export const Container = styled.div`
    .card-fag {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 2.5rem 0 4.4rem;

        @media (max-width: 500px) {
            flex-direction: column;
        }

        h1 {
            font-size: 2.4rem;
            letter-spacing: 0.2rem;

            span {
                text-transform: uppercase;
            }

            @media (max-width: 700px) {
                margin-top: 1rem;
                font-size: 150%;
            }
        }

        .search {
            @media (max-width: 960px) {
                display: flex;
                width: 20%;
            }

            input {
                height: 3.7rem;
                width: 20.8rem;
                padding-left: 1rem;
                border-radius: 1rem;
                border: 1px solid #e7e7e7;

                ::placeholder {
                    color: #707070;
                    font-style: italic;
                }

                @media (max-width: 700px) {
                    width: 20rem;
                    margin-top: 1rem;
                }

                @media (max-width: 960px) {
                    display: none;
                }
            }

            button {
                height: 3.6rem;
                width: 106px;
                margin-left: 1rem;
                background: #0168b4;
                font-size: 1rem;
                color: #fff;
                border: none;
                border-radius: 1rem;
                text-transform: uppercase;

                @media (max-width: 960px) {
                    display: none;
                }
            }
        }
    }

    .nav-question {
        padding: 0 4rem 0 4.3rem;
        margin-bottom: 20px;

        @media (max-width: 700px) {
            width: 100%;
            padding: 0 1rem;
        }

        ul {
            display: flex;
            align-items: center;

            list-style: none;
            margin-top: 2rem;

            li {
                button {
                    display: flex;
                    align-items: center;

                    background: none;
                    font-size: 1.1rem;
                    color: #fff;
                    border: none;

                    .fa-plus-circle {
                        font-size: 2rem;
                    }

                    @media (max-width: 500px) {
                        display: none;
                    }
                }
            }
        }

        .description-search {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 0 2.2rem;
            background: #0168b4;
            font-size: 1.1rem;
            color: #fff;
            height: 3.5rem;
            width: 100%;
            border-radius: 0.5rem 0 0 0.5rem;
        }

        .order {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 3.5rem;
            width: 8.6rem;
            margin-left: 0.1rem;
            background: #0168b4;
            font-size: 1.1rem;
            color: #fff;
        }

        .edit {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 3.5rem;
            width: 8.5rem;
            margin-left: 0.1rem;
            background: #0168b4;
            font-size: 1.1rem;
            color: #fff;
        }

        .delete {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 3.5rem;
            width: 9.2rem;
            border-radius: 0 0.5rem 0.5rem 0;
            margin-left: 0.1rem;
            background: #0168b4;
            font-size: 1.1rem;
            color: #fff;
        }
    }

    .question-styles {
        padding: 0 4rem 4rem 4.3rem;
        height: 37rem;

        @media (max-width: 700px) {
            width: 100%;
            padding: 0 1rem;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 4.2rem;
            background: #fff;
            list-style: none;
            box-shadow: 1px 1px 1rem 0.5px rgba(0, 0, 0, 0.22);
            padding: 1.5rem 0 1.5rem 2.2rem;
            margin-top: 1rem;
        }

        li span {
            color: #303030;

            font-size: 1.1rem;
        }

        .icons {
            display: flex;

            .order-data {
                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 1.1rem;
                width: 8rem;

                @media (max-width: 960px) {
                    width: 5.7rem;
                }

                @media (max-width: 700px) {
                    width: 4.1rem;
                }
            }

            .edit-data {
                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 1.1rem;
                width: 6.8rem;

                @media (max-width: 960px) {
                    width: 5.7rem;
                }

                @media (max-width: 700px) {
                    width: 4.1rem;
                }
            }

            .trash-data {
                display: flex;
                align-items: center;
                justify-content: center;

                font-size: 1.1rem;
                width: 7rem;

                @media (max-width: 960px) {
                    width: 5.7rem;
                }

                @media (max-width: 700px) {
                    width: 4.7rem;
                }
            }

            .fa-edit {
                color: #0168b4;
            }
            .fa-trash {
                color: #dc3545;
            }
        }
    }
`;

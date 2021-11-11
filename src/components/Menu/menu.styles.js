import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    ul{
        display: flex;
        li {
            list-style: none;
            list-style: none;
            width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: 1px solid black;
            &:hover {
                background-color: blue;
                transition: .5s all ease-in-out;
                a{
                    color: white;
                }
            }
            a{
                text-decoration: none;
            }
        }
    }
`

// libs
import styled from "styled-components";

export const HeaderLogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 130px;
    padding-left: 17px;
    background-color: aliceblue;
    .header-logo{
        &-left {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-right {
            display: flex;
            align-items: flex-end;
            padding-bottom: 27px;
            span {
                height: 25px;
                line-height: 25px;
                font-weight: bold;
            }
            select {
                height: 25px;
                margin: 0 3px;
            }
            button {
                padding: 5px;
                border: 0;
                border-radius: 3px;
                background-color: pink;
                cursor: pointer;
                a {
                    text-decoration: none;
                    color: white;
                    &:hover{
                        color: black;
                    }
                }
            }
        }
    }
`

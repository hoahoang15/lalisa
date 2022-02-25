// libsi
import styled from "styled-components"
// images
import menu_border_left from "../../../../../../assets/image/menu-left.jpg"
import menu_border_right from "../../../../../../assets/image/menu-right.jpg"
import menu_content from "../../../../../../assets/image/menu-content.jpg"

export const HeaderMenuContainer = styled.div`
    height: 45px;
    background: url(${menu_border_left}) top left no-repeat;
    .header-menu {
        &-right {
            background: url(${menu_border_right}) top right no-repeat;
            height: 45px;
            &-content {
                margin: 0 12px;
                height: 45px;
                /* line-height: 45px; */
                background: url(${menu_content}) top center repeat;
                ul {
                    display: flex;
                    align-items: center;
                    height: 45px;
                    padding: 0 !important;
                    li {
                        list-style: none;
                        padding: 0 22px;
                        &.description {
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            width: 44%;
                            span{
                                padding: 0 3px;
                            }
                            a{
                                color: #7bb183;
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                        &.line {
                            width: 1px;
                            height: 45px;
                            background-color: #d2d2d2;
                            padding: 0;
                        }
                        a{
                            font-size: 12px;
                            font-weight: bold;
                            color: #000043;
                            text-decoration: none;
                            text-transform: uppercase;
                            &:hover{
                                color: #363;
                                text-decoration: underline;

                            }
                    
                        }
                    }
                }
            }
        }

    }
`
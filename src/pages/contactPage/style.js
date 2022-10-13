import styled from "styled-components";

export const ContactLeft = styled.div`
    width: 50vw;
    height: 55vh;
    margin: 130px 0px 0px 70px;
    // border: 5px red solid;
`

export const ContactRight = styled.div`
    width: 50vw;
    height: 55vh;
    margin: 130px 50px 0px 0px;
    // border: 5px red solid;
`

export const ContactInfo = styled.div`
    margin-bottom: 5%;
    text-align: right;
    padding: 5%;
    // border: 5px red solid;
`

export const ContactLink = styled.div`
    // border: 5px red solid;
    text-align: right;
    padding: 5%;
`

export const Link = styled.a`
    margin: 1%;
`

export const User = styled.input`
    color: var(--color-primary);
    background-color: var(--color-bg);
    border-bottom: var(--color-primary) 2px solid;
    width: 90%;
    height: 10%;
`
export const Comment = styled.textarea`
    color: var(--color-primary);
    background-color: var(--color-bg);
    border: var(--color-primary) 2px solid;
    width: 90%;
    height: 200px;
    resize: none;
`

export const Titel = styled.h1`
    color: var(--color-primary);
    font-size: 28px;
    letter-spacing: 5px;
`
export const Text = styled.h2`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
`
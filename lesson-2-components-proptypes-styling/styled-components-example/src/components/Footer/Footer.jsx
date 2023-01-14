import styled from '@emotion/styled';

const Wrapper = styled.footer`
    padding: 20px 0;

    .btn {
        background-color: #000;
        color: #fff;
    }
`

const Footer = () => {
    return (
        <Wrapper>
            <p>Footer text</p>
            <button className="btn">To top</button>
        </Wrapper>
    )
}

export default Footer;
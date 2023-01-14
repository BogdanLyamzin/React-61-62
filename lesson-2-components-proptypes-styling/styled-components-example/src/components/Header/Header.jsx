import styled from '@emotion/styled';

const Wrapper = styled.header`
    padding: 15px 0;
`

const Header = () => {
    return (
        <Wrapper>
            <h1>Page header</h1>
        </Wrapper>
    )
}

export default Header;
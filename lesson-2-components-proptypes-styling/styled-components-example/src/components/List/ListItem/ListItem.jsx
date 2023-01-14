import PropTypes from "prop-types";
import styled from '@emotion/styled';

const Wrapper = styled.li`
    font-size: 16px;
`

const ListItem = ({title, year}) => {
    return <Wrapper>{title}. {year}</Wrapper>
}

export default ListItem;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}
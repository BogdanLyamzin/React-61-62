import PropTypes from "prop-types";
import styled from '@emotion/styled';

import ListItem from "./ListItem/ListItem";

const Title = styled.h4`
    font-size: 24px;
    margin-bottom: 10px;
`

const ListWrapper = styled.ul`
    list-style: none;
`

const List = ({title, items})=> {
    const elements = items.map(item => <ListItem key={item.id} {...item}  />);
    // const elements = items.map(item => <ListItem key={item.id} id={item.id} title={item.titile} year={item.year}  />);
    
    return (
        <>
            {title && <Title>{title}</Title>}
            <ListWrapper>
                {elements}
            </ListWrapper>
        </>
    )
}

export default List;

List.defaultProps = {
    items: []
}

List.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    })),
}
import PropTypes from "prop-types";

const VoteResults = ({ total, democratesPercent, republicansPercent }) => {
    return (
        <>
            <p>Total votes: {total}</p>
            <p>Democrats: {democratesPercent}</p>
            <p>Republicants: {republicansPercent} </p>
        </>
    )
}

export default VoteResults;

VoteResults.propTypes = {
    total: PropTypes.number.isRequired,
    democratesPercent: PropTypes.number.isRequired,
    republicansPercent: PropTypes.number.isRequired,
}
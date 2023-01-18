import PropTypes from "prop-types";

import Button from "../../../shared/components/Button/Button";

const VoteVariants = ({ options, leaveVote }) => {
    const elements = options.map(name => <p key={name} >
                                            <Button onClick={() => leaveVote(name)} type="button">Democrates</Button>
                                       </p>)
    return (
        <>
           {elements}
        </>
    )
}

export default VoteVariants;

VoteVariants.propTypes = {
    leaveVote: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
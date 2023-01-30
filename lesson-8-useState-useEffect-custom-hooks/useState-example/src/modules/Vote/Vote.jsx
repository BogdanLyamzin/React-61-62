import { useState } from "react";

import VoteVariants from "./VoteVariants/VoteVariants";
import VoteResults from "./VoteResults/VoteResults";
import VoteBlock from "./VoteBlock/VoteBlock";

import styles from "./vote.module.scss";

const voteOptions = ["democrats", "republicans"];

const Vote = ()=> {
    const [votes, setVotes] = useState({
        democrats: 0,
        republicans: 0,
    });

    const leaveVote = name => {
        setVotes(prevState => {
            const value = prevState[name];
            
            return {...prevState, [name]: value + 1}
        })
    }

    const total = votes.democrats + votes.republicans;

    const calcPercent = (propName) => {
        if(!total) {
            return 0;
        }
        const value = votes[propName]; 
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    const democratesPercent = calcPercent("democrats");
    const republicansPercent = calcPercent("republicans");

    return (
        <div>
            <h3 className={styles.title}>Leave your vote</h3>
            <div className={styles.wrapper}>
                <VoteBlock title="Vote variants">
                    <VoteVariants options={voteOptions} leaveVote={leaveVote} />
                </VoteBlock>
                <VoteBlock title="Vote results:">
                    <VoteResults total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent}  />
                </VoteBlock>

            </div>
        </div>
    )
}

export default Vote;

/*
class Vote extends Component {
    state = {
        democrats: 0,
        republicans: 0,
    }

    leaveVote = (name) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1
            }
        });
    }

    calcTotal() {
        const {democrats, republicans} = this.state;
        const total = democrats + republicans;
        return total;
    }

    calcPercent(propName) {
        const total = this.calcTotal();
        if(!total) {
            return 0;
        }
        const value = this.state[propName]; // this.state.democrats
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
    }

    render(){
        const total = this.calcTotal();
        const democratesPercent = this.calcPercent("democrats");
        const republicansPercent = this.calcPercent("republicans");
        
        return (
            <div>
                <h3 className={styles.title}>Leave your vote</h3>
                <div className={styles.wrapper}>
                    <VoteBlock title="Vote variants">
                        <VoteVariants options={voteOptions} leaveVote={this.leaveVote} />
                    </VoteBlock>
                    <VoteBlock title="Vote results:">
                        <VoteResults total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent}  />
                    </VoteBlock>
    
                </div>
            </div>
        )
    }
}

export default Vote;
*/
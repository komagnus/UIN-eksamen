import React from 'react';
import { Button } from '../../styles/HomeStyle';
import { ClickableKurs, KursContent } from '../../styles/kursStyles';

class Kurs1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showKurs1: false,
        }
        this.handleKurs1 = this.handleKurs1.bind(this);

    }

    handleKurs1 () {
        this.setState( state => ({
            showKurs1: !state.showKurs1
        }))
    }

    render() {
        return(
            <ClickableKurs onClick={this.handleKurs1}>
                <Button>Kurs1</Button>
            {
                this.state.showKurs1
                ? (
                    <KursContent>
                        <p>Kurs1</p>
                    </KursContent>
                    
                )
                : (
                    null
                )
            }
            </ClickableKurs>
        )
    }
}

export default Kurs1;

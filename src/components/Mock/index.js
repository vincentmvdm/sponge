import React, { Component } from 'react';
import { spongeMock } from 'spongemock';
import Input from '../Input';
import P from '../P';

class Mock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponge: ""
        }
    }

    onInputChange(sponge) {
        this.setState({
            sponge
        });
    }

    render() {
        return (
            <div>
                <Input type="text" placeholder={spongeMock("type something")} value={this.state.sponge} onChange={event => this.onInputChange(event.target.value)} marginTop="32px" />
                <P marginTop="24px">
                    {spongeMock(this.state.sponge)}
                </P>
            </div>
        );
    }
}

export default Mock;

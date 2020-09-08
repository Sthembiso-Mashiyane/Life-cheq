import React, {Component} from "react";
import LifeInsurance from './lifeInsurance'

export class Home extends Component {
    render() {
        return (
            <div className="mt-5">
                <h3>
                    Actions
                </h3>
                <LifeInsurance></LifeInsurance>
            </div>
        )
    }
}

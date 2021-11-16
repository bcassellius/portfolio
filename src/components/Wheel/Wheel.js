import React, { Component } from 'react';
import Card from '../Card/Card';

export class Wheel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            radius: 250,
            cards: [],
            theta: 0.0,
        }

        this.temp_theta = 0.0;
        this.anim_id=null;
    }

    componentDidMount() {
        let center_of_wheel = {
            x: parseFloat(this.wheel.style.width) / 2.0,
            y: parseFloat(this.wheel.style.height) / 2.0
        }

        let new_cards = [];
        
        for (let i = 0; i < 8; i++) {
            new_cards.push (
                <Card theta={(Math.PI / 4.0) * i} radius={this.state.radius} center={center_of_wheel} key={`card_${i}`}/>
            );

        }

        this.setState({ cards: new_cards})
    }

    handle_scroll = event => {
        this.temp_theta +=event.deltaY;
        this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta * 0.07}deg)`;

        this.anim_id= setTimeout(()=> {
            this.setState({theta: this.temp_theta});
        }, 150);

    }

    render() {
        return (
            <div onWheel={this.handle_scroll} ref={ref_id => this.wheel = ref_id} style={styles.wheel}>
                {this.state.cards}
            </div>
        )
    }
}

const styles = {
    wheel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        trasform: 'translate(-50%, -50%)',
        height: '300px',
        width: '300px',
        background: 'red',
        borderRadius: '150px'
    }
}

export default Wheel;

// video followed--> https://www.youtube.com/watch?v=ZujFSPE7phg
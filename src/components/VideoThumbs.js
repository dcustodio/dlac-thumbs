import React from 'react';
import styled from 'styled-components'


const InputBar = styled.div`
display: flex;
`

const Button = styled.button`

display: inline-block;
color: white;
padding: 0.5em 1em;
background-color: rgba(255,255,255,0.1);
cursor: pointer;
border-radius: 1em;
margin: 0 .5em;
border: 0;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
const Input = styled.input`
color: white;
padding: 0.5em 1em;
border: 0;
border-radius: 1em;
margin: 0 .5em;
background-color: rgba(255,255,255,0.2);
box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 5px rgba(0,0,0,0.24);
&:focus {
    outline: none; 
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.25), inset 0 1px 5px rgba(0,0,0,0.25);

}
`

export default class VideoThumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <InputBar>
                <Input type="text" placeholder='Paste youtube URL here' value={this.state.value} onChange={this.handleChange} />
                <Button onClick={this.handleSubmit}>Get Thumbnails</Button>
            </InputBar>
        );
    }
}
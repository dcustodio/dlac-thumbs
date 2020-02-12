import React from 'react';
import styled from 'styled-components'


const InputBar = styled.div`
display: flex;
border: 2px solid #0F4C81;`

const Button = styled.button`
display: inline-block;
color: #0F4C81;
font-size: 1em;
padding: 0.25em 1em;
border-left: 2px solid #0F4C81;
background-color: white;
`
const Input = styled.input`
color: #0F4C81;
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
                <Input type="text" value={this.state.value} onChange={this.handleChange} />
                <Button onClick={this.handleSubmit}>Get Thumbnails</Button>
            </InputBar>
        );
    }
}
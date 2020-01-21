import React from 'react';

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
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="" onClick={this.handleSubmit}>Get Thumbnails</button>
            </div>
        );
    }
}
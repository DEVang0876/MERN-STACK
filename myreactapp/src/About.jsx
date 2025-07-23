import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h1 class="about">About Page</h1>
                <p>This is the about page of our application.</p>
            </div>
        );
    }
}

export default About
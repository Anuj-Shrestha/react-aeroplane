import React, { Component } from 'react';

class Topics extends Component {
    constructor() {
        super()
        this.state = {
            topic: 1
        }
    }

    setTopic = (value) => {
        this.setState({ topic: value })
    }

    renderTopic = (val) => {
        switch (val) {
            case 2: {
                return <Topic2/>
            }
            case 3: {
                return <Topic3/>
            }
            default: {
                return <Topic1/>
            }
        }
    }
    
    render() {
        return (
            <div className="content">
                <div className="nav-bar">
                    <ul className="nav-bar-ul">
                        <li className="nav-bar-li"><p onClick={() => this.setTopic(1)} className="nav-bar-link">Topic 1</p></li>
                        <li className="nav-bar-li"><p onClick={() => this.setTopic(2)} className="nav-bar-link">Topic 2</p></li>
                        <li className="nav-bar-li"><p onClick={() => this.setTopic(3)} className="nav-bar-link">Topic 3</p></li>
                    </ul>
                </div>
                <div className="topic-main">
                    {
                        <Topic val={this.state.topic} content={this.renderTopic(this.state.topic)}/>
                    }
                </div>
            </div>
        );
    }
}

const Topic = ({val, content}) => {
    return (<div className={`topic-container topic-container-${val}`}>
            {content}
        </div>)
}

const Topic1 = () => {
    return (<div className="">
        <h3>Topic 1 Title</h3>
        <p>Topic goes here</p>
        </div>)
}

const Topic2 = () => {
    return (<div className="">
        <h3>Topic 2 Title</h3>
        <p>Topic goes here</p>
        </div>)
}

const Topic3 = () => {
    return (<div className="">
        <h3>Topic 3 Title</h3>
        <p>Topic goes here</p>
        </div>)
}
export default Topics
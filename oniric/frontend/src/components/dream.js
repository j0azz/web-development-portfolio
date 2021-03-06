import React from "react";

class Dream extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
            <div class="dream-container">
                {
                    this.props.data != undefined && this.props.data != []

                    &&

                    <div class="dream-container">
                        <div class="title-container">
                            <h3>
                                {this.props.data.title}
                            </h3>
                        </div>
                        <div class="content-container">
                            <p>
                                {this.props.data.content}
                            </p>
                            <p>
                                {this.props.data.createdAt}
                            </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Dream
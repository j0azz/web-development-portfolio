import React from 'react'
import axios from 'axios'

import Dream from "./dream"

import './style/feed.css'

class PersonalTL extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dreams: []
        }
    }

    componentDidMount() {
        const fetchDreams = axios({
            method: "GET",
            url: "http://localhost:3030/profile/dreams",
            headers: {
                "x-access-token": localStorage.getItem("oniric-user-token"),
            }
        }).then((res) => {
            
            this.setState({dreams: res.data})
        })
        // this.setState({dreams: fetchDreams.data})
    }
    render() {
        return (
            <div class="feed-container">
                <h2>Sonhado por {this.props.user}</h2>
                {
                    this.state.dreams != undefined && this.state.dreams != []

                    &&

                    <div class="list-container">
                        {this.state.dreams.map((dream) => {
                            if(dream.private == 0)
                                return <Dream data={dream} />;
                            else
                                return
                        })}
                    </div>
                }
                
            </div>
        );
    }
}

export default PersonalTL
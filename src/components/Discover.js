import React, { Component } from "react";

import API from "../utils/APIRandom";


const styles = {
    width: '50px',
    height: '50px'
}
const styles1 = {
    width: '50px',
    height: '50px'
}
const divStyle = {
    display: "flex",
    justifyContent: "space-around"
}

class Discover extends Component {

    state = {
        dogImg : ""
    }

    // componentDidMount() {
    //    this.searchForPuppy();
    //   }
    
    handleUp = () => {
        console.log("Handle up")
    }

    handleDown = () => {
        console.log("Handle down")
        console.log(API)
    }


    // searchForPuppy = query => {
    //     console.log(query)
    //     API.then(res =>
    //         console.log(res)
    //     //   this.setState({ result: res.data.message })
    //       )
    //   };


render() {
    return (
        <div>
            {/* <img src={this.state.dogImg} alt="puppy" /> */}
            <div style={divStyle}>
                <button className="btn btn-danger btn-lg" onClick={this.handleDown}>
                    <img style={styles1} src="http://www.clker.com/cliparts/H/X/b/b/5/e/thumbs-dwn-icon-red-th.svg.med.png" alt="down" />
                </button>
                <button className="btn btn-success btn-lg" onClick={this.handleUp}>
                    <img style={styles} src="https://www.clker.com/cliparts/f/0/t/Y/n/t/thumbs-up-icon-green-th.svg.hi.png" alt="up" />
                </button>
            </div>
        </div>
    )
}
}

export default Discover;

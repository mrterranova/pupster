import React from "react";

const styles = {
  width: '100px',
  height: '100px'
}


function Buttons() {
  return (
    <div>
      <button className="btn btn-success btn-lg" onClick={this.handleUpvote}>Like
              <img style={styles} src="https://www.clker.com/cliparts/f/0/t/Y/n/t/thumbs-up-icon-green-th.svg.hi.png" />
      </button>


      <button style={styles} className="btn btn-danger btn-lg" style={styles} onClick={this.handleDownvote}>Dislike
              <img style={styles} src="http://www.clker.com/cliparts/H/X/b/b/5/e/thumbs-dwn-icon-red-th.svg.med.png" />
      </button>
    </div>
  )
}

export default Buttons;
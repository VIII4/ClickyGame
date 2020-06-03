import React, { Component } from "react";
import "./style.css";

class ImageCard extends Component {
  //Method to call when card is clicked
  handleClickEvent = (event) => {
    //evaluate if isclicked? reset game: change state to clicked
    //event.preventDefault();
    if (!this.clicked) {
      this.setState({
        clicked: true,
      });
      //   Add Score
    } else {
    }

    console.log(this.state.clicked);
  };

  render() {
    return (
      <div className="col mb-4">
        <div className="card ">
          <a
            href="#!"
            id={this.props.id}
            name={this.props.name}
            onClick={this.props.handleClick}
          >
            <img
              className="card-img card-img-cstm"
              src={this.props.image}
              alt="?"
            />
            <div
              className="card-img-overlay rgba-white-slight"
              id={this.props.id}
              name={this.props.name}
            ></div>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;

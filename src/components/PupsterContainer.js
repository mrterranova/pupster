import React, { Component } from "react";
import Container from "./Container";
import Card from "./Card";
import SearchForm from "./SearchForm";
import API from "../utils/API";
// import PupDetail from "./PupDetail";

class PupsterContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchForPuppy("poodle");
  }

  searchForPuppy = query => {
    console.log(query)
    API.then(res =>
      this.setState({ result: res.data.message })
      )
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForPuppy(this.state.search);
  };

  render() {
    return (
      <Container>
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
              {/* <PupDetail>{this.state.result}</PupDetail> */}

      </Container>
    );
  }
}

export default PupsterContainer;

import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Content from "./Content/Content";
import Header from "./Header";
import TopBar from "./TopBar";

import { tabData, cardData } from "./data";

export default class AllContent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}

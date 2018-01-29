import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Block from './Block'

export default class Canvas extends Component {


  render() {
    return (
      <svg><Block/></svg>
    );
  }
}

'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// this module

class CastBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      max: props.spell && props.spell.castTime || 0,
      start: (new Date()).valueOf(),
      value: 0
    };
  }

  componentDidMount () {
    this.setState({ isMounted: true });
    global.requestAnimationFrame(this.updateState.bind(this));
  }

  componentWillUnmount () {
    global.cancelAnimationFrame(this.state.animationFrame);
  }

  updateState () {
    if (!this.props.spell) {
      return;
    }
    let { max, start, value } = this.state;
    if (value >= max) {
      return;
    }
    let now = (new Date()).valueOf();
    this.setState({
      animationFrame: global.requestAnimationFrame(this.updateState.bind(this)),
      value: now - start
    });
  }

  render () {
    let className = classNames('CastBar', {
      'CastBar--casting': !!this.props.spell
    });
    return (
      <progress className={className} {...this.state} />
    );
  }
}

CastBar.propTypes = {
  spell: PropTypes.shape({
    castTime: PropTypes.number
  })
};
CastBar.defaultProps = {};

export default CastBar;

import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Platform, TouchableHighlight } from 'react-native';

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes;

export default class DefaultMarker extends React.Component {
  static propTypes = {
    pressed: PropTypes.bool,
    pressedMarkerStyle: ViewPropTypes.style,
    markerStyle: ViewPropTypes.style,
    enabled: PropTypes.bool,
    currentValue: PropTypes.number,
    valuePrefix: PropTypes.string,
    valueSuffix: PropTypes.string,
  };

  render() {
    return (
      <TouchableHighlight>
        <View
          style={this.props.enabled ? [
            styles.markerStyle,
            this.props.markerStyle,
            this.props.pressed && styles.pressedMarkerStyle,
            this.props.pressed && this.props.pressedMarkerStyle,
          ] : [styles.markerStyle, styles.disabled]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  markerStyle: {
    ...Platform.select({
      ios: {
        height: 20,
        width: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgb(200,160,80)',
        backgroundColor: 'rgb(200,160,80)',
      },
      android: {
        height: 20,
        width: 20,
        borderRadius: 30,
        backgroundColor: 'rgb(200,160,80)',
      },
    }),
  },
  pressedMarkerStyle: {
    ...Platform.select({
      ios: {},
      android: {
        height: 20,
        width: 20,
        borderRadius: 20,
      },
    }),
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});

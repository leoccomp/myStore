import React, { Component } from 'react';
import ReactSlider from 'rc-slider';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(sliderValue) {
    const values = this.props.isRangeSlider
      ? sliderValue
      : [this.props.min, sliderValue];
    this.props.onChange && this.props.onChange(values);
  }

  render() {
    const {
      min,
      max,
      values,
      isRangeSlider,
      isBasicSlider,
      step,
      className
    } = this.props;
    if (!values || values.length < 2) return null;

    const sliderClassName = classnames('range-slider', className, {
      'min-filtered': values[0] !== min,
      'max-filtered': values[1] !== max,
      'max-only': !isRangeSlider,
      'selector-slider': isBasicSlider
    });

    return (
      <div className={sliderClassName}>
        {isRangeSlider && (
          <ReactSlider.Range
            min={min}
            max={max}
            value={values}
            allowCross={false}
            pushable
            step={step}
            onChange={this.onChange}
          />
        )}
        {!isRangeSlider && (
          <ReactSlider
            min={min}
            max={max}
            value={values[1]}
            step={step}
            onChange={this.onChange}
          />
        )}
        {!isBasicSlider && (
          <div className="text">
            <div className="from">{values[0]}</div>
            <div className="to">{values[1]}</div>
          </div>
        )}
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  values: PropTypes.array.isRequired,
  isRangeSlider: PropTypes.bool,
  isBasicSlider: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  className: '',
  values: [0, 0],
  isRangeSlider: true,
  isBasicSlider: false
};

export default Slider;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AttachMoney from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles(theme => ({
  root: {
    width: 150 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  function valuetext(value) {
    return `$${value}`;
  };

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={valuetext(value)}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const RangeSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0px 2px 2px',
      '&:focus,&:hover,&$active': {
        boxShadow: '#ccc 0px 2px 3px 1px',
      },
      '& .bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 3,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);
  
  function RangeThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }
  
  export default function CustomizedSlider(props) {
    const classes = useStyles();
  
    return (
        <>
        <legend style={{textAlign: "left"}}>Price Range</legend>
        <div className={classes.root}>
            <RangeSlider
            ThumbComponent={RangeThumbComponent}
            ValueLabelComponent={ValueLabelComponent}
            getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[0, 2000]}
            min={0}
            max={props.max}
            style={{marginLeft: "10px"}}
            />
        </div>
      </>
    );
  }
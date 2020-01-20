import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ tooltipText }) => {
  return (
    <div>
      <ReactTooltip place="right" type="dark" effect="float">
        <span>{tooltipText}</span>
      </ReactTooltip>
    </div>
  );
};
Tooltip.propTypes = {
  tooltip: PropTypes.string
};
export default Tooltip;

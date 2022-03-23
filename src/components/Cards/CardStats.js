import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statTitle,
  statValue,

  statIconColor,
}) {
  return (
    <div className=" flex flex-col min-w-full border-t-4 border-violet-500 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg py-3">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-slate-400 uppercase font-bold text-xs">
              {statTitle}
            </h5>
            <span className="font-semibold text-xl text-slate-700">
              ${statValue}
            </span>
          </div>

        </div>

      </div>
    </div>

  );
}

CardStats.defaultProps = {
  statTitle: "Traffic",
  statValue: "350,897",
  // statArrow: "up",
  // statPercent: "3.48",
  // statPercentColor: "text-emerald-500",
  // statDescripiron: "Since last month",
  // statIconName: "far fa-chart-bar",
  // statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statTitle: PropTypes.string,
  statValue: PropTypes.number,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};

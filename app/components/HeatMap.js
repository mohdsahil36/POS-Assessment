// components/Heatmap.js
import React from 'react';
import HeatMap from 'react-heatmap-grid';

// Mapping consensus score to colors
const scoreToColor = (score) => {
  switch (score) {
    case 0:
      return '#ECFFF1'; // Light Green
    case 1:
      return '#F8F8A7'; // Yellow
    case 2:
      return '#A6D96A'; // Light Green
    case 3:
      return '#1A9641'; // Dark Green
    case 4:
      return '#003F0B'; // Very Dark Green
    default:
      return '#FFFFFF'; // Default color (White) for no score
  }
};

const Heatmap = ({ data, xLabels, yLabels }) => {
  return (
    <div className="mt-8">
      <h3 className="text-center text-xl font-semibold">Skillset Heatmap</h3>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        square
        height={300}
        width={600}
        cellStyle={(x, y, value) => ({
          backgroundColor: scoreToColor(value),
          border: '1px solid white',
        })}
      />
    </div>
  );
};

export default Heatmap;

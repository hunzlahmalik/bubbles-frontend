/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import * as d3 from 'd3';

export interface ChartProps {
  totalNFT: number;
  inCirculation: number;
  staked: number;
  height?: number;
  width?: number;
  donutWidth?: number;
}

interface ChartState {
  chRef: React.RefObject<HTMLInputElement>;
}

class NFTChart extends Component<ChartProps, ChartState> {
  constructor(props) {
    super(props);
    this.state = {
      chRef: React.createRef(),
    };
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.drawChart();
    }
  }

  createBackgroundSVG = (_endAngle: number, fillColor: string, arc, svg) => {
    return svg.append('path').datum({ endAngle: _endAngle }).style('fill', fillColor).attr('d', arc);
  };

  createArc = (innerRad: number, outerRad: number, _startAngle: number, cornerRad) => {
    return d3.arc().innerRadius(innerRad).outerRadius(outerRad).cornerRadius(cornerRad).startAngle(_startAngle);
  };

  drawChart() {
    const { totalNFT, inCirculation, staked, height, width, donutWidth } = this.props;
    const inCirculationArcData = (inCirculation / totalNFT) * 2 * Math.PI;
    const stakedArcData = (staked / totalNFT) * 2 * Math.PI;
    const chartWidth: number = height ?? 400;
    const chartHeight: number = width ?? 400;
    const chartDonutWidth: number = donutWidth ?? 18;

    const radius1 = Math.min(chartWidth, chartHeight) / 2;
    const radius2 = radius1 - chartDonutWidth - 14;
    const radius3 = radius2 - chartDonutWidth - 14;
    const { chRef } = this.state;
    d3.select(chRef.current).selectAll('*').remove();
    const svg = d3.select(chRef.current).append('svg').attr('width', chartWidth).attr('height', chartHeight);
    const totalSVG = svg.append('g').attr('transform', `translate(${chartWidth / 2},${chartHeight / 2})`);
    const inCirculationSVG = svg.append('g').attr('transform', `translate(${chartWidth / 2},${chartHeight / 2})`);
    const stakedSVG = svg.append('g').attr('transform', `translate(${chartWidth / 2},${chartHeight / 2})`);

    // Create Arcs
    const totalArc = this.createArc(radius1 - chartDonutWidth, radius1, 0, radius1 - (radius1 - chartDonutWidth));
    const inCirculationArc = this.createArc(
      radius2 - chartDonutWidth,
      radius2,
      0,
      radius2 - (radius2 - chartDonutWidth),
    );
    const stakedArc = this.createArc(radius3 - chartDonutWidth, radius3, 0, radius3 - (radius3 - chartDonutWidth));

    // Create Background SVG
    this.createBackgroundSVG(6.29, '#A9CDFF', totalArc, totalSVG);
    this.createBackgroundSVG(6.29, '#fee793', inCirculationArc, inCirculationSVG);
    this.createBackgroundSVG(6.29, '#f5a3a7', stakedArc, stakedSVG);

    // Create Foreground SVG
    const totalForeground = totalSVG.append('path').datum({ endAngle: 0 }).style('fill', '#517ddb');
    totalForeground.transition().duration(750).call(arcTween, 6.29, totalArc);

    const cirForeground = inCirculationSVG.append('path').datum({ endAngle: 0 }).style('fill', '#fec62d');
    cirForeground.transition().duration(750).call(arcTween, inCirculationArcData, inCirculationArc);

    const stakedForground = stakedSVG.append('path').datum({ endAngle: 0 }).style('fill', '#ea3943');
    stakedForground.transition().duration(750).call(arcTween, stakedArcData, stakedArc);

    const path1 = totalSVG.selectAll('path').enter().append('path');
    const path2 = inCirculationSVG.selectAll('path').enter().append('path');
    const path3 = stakedSVG.selectAll('path').enter().append('path');

    path1.exit().remove();
    path2.exit().remove();
    path3.exit().remove();

    // svg.selectAll(chRef.current).remove();

    function arcTween(transition, newAngle, sentArc) {
      transition.attrTween('d', (d) => {
        const interpolate = d3.interpolate(d.endAngle, newAngle);

        return (t) => {
          // eslint-disable-next-line no-param-reassign
          d.endAngle = interpolate(t);

          return sentArc(d);
        };
      });
    }
  }

  render() {
    const { chRef } = this.state;
    return <div ref={chRef} />;
  }
}

export default NFTChart;

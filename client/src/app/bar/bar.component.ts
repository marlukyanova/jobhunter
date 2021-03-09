import { Component, Input, OnChanges} from '@angular/core';

import { Data } from '../data';

import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnChanges {

  @Input() data!: Data[];
  @Input() title!: string;
  @Input() chartid!: string;

  svg: any;
  margin = 50;
  width = 550 - (this.margin * 2);
  height = 300 - (this.margin * 2);

  constructor() {}


  ngOnChanges(): void {
    this.createSvg();
    this.drawBars(this.data);
  }


  createSvg(): void {
    // d3.select('svg').remove();

    this.svg = d3.select(`#${this.chartid}`)
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  drawBars(data: Data[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.description))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      // .attr("transform", "translate(10,0)")
      .style('text-anchor', 'middle')
      .attr('font-size', '12px');

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d: any) => d.number)])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(y))
      .attr('font-size', '12px')
      .append('text')
      .attr('transform', 'rotate(-90)')
      .style('text-anchor', 'middle');

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: Data) => x(d.description))
      .attr('y', (d: Data) => y(d.number))
      .attr('width', x.bandwidth())
      .attr('height', (d: Data) => this.height - y(d.number))
      .attr('fill', '#673ab7');

    //Add values to bars
    this.svg.selectAll('text.bar')
      .data(this.data)
      .enter().append('text')
      .attr('class', 'bar')
      .attr('text-anchor', 'start')
      .attr('x', (d: Data) => x(d.description))
      .attr('y', (d: Data) =>  y(d.number) - 5)
      .text((d: Data) => +d.number);
  }

}

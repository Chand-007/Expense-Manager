import * as d3 from "d3"
import { useRef,useEffect } from "react"


export default function Barchart(){
    const ref = useRef()

    const data = [
        {
          "Name": "Springfield",
          "Population": 150000
        },
        {
          "Name": "Rivertown",
          "Population": 85000
        },
        {
          "Name": "Lakeside",
          "Population": 120000
        },
        {
          "Name": "Mapleton",
          "Population": 55000
        },
        {
          "Name": "Greenfield",
          "Population": 98000
        },
        {
          "Name": "Sunnyvale",
          "Population": 73000
        },
        {
          "Name": "Hilltop",
          "Population": 40000
        },
        {
          "Name": "Coastline",
          "Population": 175000
        },
        {
          "Name": "Valleywood",
          "Population": 67000
        },
        {
          "Name": "Pinecrest",
          "Population": 56000
        }
      ]
      

    useEffect(()=>{


        const width = 600;
        const height = 600;
        const marginTop = 20;
        const marginRight = 10;
        const marginBottom = 30;
        const marginLeft = 60;

        const arrayLike = [0,d3.max(data,(d)=>d.Population)]


        const x = d3.scaleBand()
                  .domain(d3.groupSort(data,([d])=>-d.Population,(d)=>d.Name))
                  .range([marginLeft,width+marginRight])
                  .padding(0.1)


        const y = d3.scaleLinear()
                  .domain([0,d3.max(data,(d)=>d.Population)])
                  .range([height-marginBottom,marginTop])
  
                



        const svgElement = d3.select(ref.current)
        svgElement
        .attr("width",width)
        .attr("height",height)




        svgElement.append("g")
        .attr("transform",`translate(0,${height-marginBottom})`)
        .call(d3.axisBottom(x))


        svgElement.append("g")
        .attr("transform",`translate(${marginLeft},0)`)
        .call(d3.axisLeft(y))


        svgElement.append("g")
        .attr("fill","lightgreen")
        .selectAll()
        .data(data)
        .join("rect")
        .attr("x",(d)=>x(d.Name))
        .attr("y",(d)=>y(d.Population))
        .attr("height",(d)=>y(0)-y(d.Population))
        .attr("width",x.bandwidth());
        


    },[])



    return(
        <div className="chart-container" style={{"marginLeft":"30px"}}>
            <h1>THis is Bar Chart Container</h1>
            <svg ref={ref}></svg>
        </div>
    )
}
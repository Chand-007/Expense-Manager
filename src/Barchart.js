import * as d3 from "d3"
import { useRef,useEffect } from "react"


export default function Barchart({income,expense}){
    const ref = useRef()

    const data = [
      {
        "Name":"Income",
        "Population":income
      },
      {
        "Name":"Expense",
        "Population":Math.abs(expense)
      },
      ]



    useEffect(()=>{


        const width = 400;
        const height = 300;
        const marginTop = 10;
        const marginRight = 10;
        const marginBottom = 30;
        const marginLeft = 40;

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


    console.log("Barchart.js component is loaded")

    return(
        <div className="chart-container" style={{"marginLeft":"100px","marginTop":"150px"}}>
          
            <svg ref={ref}></svg>
        </div>
    )
}
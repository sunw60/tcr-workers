import React from 'react'
import Chart from 'chart.js/auto';
import { Line, Bar, Scatter } from 'react-chartjs-2';

export default function Path3() {

    const data = {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],
            fill: true,

      pointBorderColor:"green",
      pointBackgroundColor:"green"
        }],
    };
    
    const options = {
      plugins:{legend:{display:false}},
      layout:{padding:{bottom:100}},
      scales: {
        y:{
          ticks:{
            color:"blue",
            font:{
              size:18
            }
          },
          grid:{
            color:"#243240"
          }
        },
        x:{
          ticks:{
            color:"blue",
            font:{
              size:18
            }
          }
        }
      },
    };
    
    return (
        <div>
            <h1>Title</h1>
            <Scatter data={data} options={options}/>
        </div>
    );
}

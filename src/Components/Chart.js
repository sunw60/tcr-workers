import React, {Component, useState} from "react";
import {Line} from 'react-chartjs-2'

const Dankmemes = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thiccness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    React.useEffect(() => {
        chart()
    }, [])
    return(
        <div className="App">
            <h1>Chart</h1>
            <div>
                <Line data={chartData}/>
            </div>
        </div>
    )
}

export default Dankmemes;

import React from 'react'
//import Plot from 'plotly.js';
import plotly from 'plotly.js/dist/plotly'
import createPlotComponent from 'react-plotly.js/factory'
import styles from '../styles/Plot.module.css'

const Plot = createPlotComponent(plotly)

export default function SpectralDataPlot({data}) {
        const { X, Y } = data
        return (
            <div className={styles.plot}>
            <h1> Infra Red</h1>
            <Plot
                
                data={[
                    {
                        x:X,
                        y:Y,
                    }
                ]}
                layout={{
                    responsive: true,
                    autosize: true,
                    margin: {
                        l:30,
                        r:30,
                        b:30,
                        t:10
                    },
                    paper_bgcolor: "#dfdfdf",
                    plot_bgcolor: "#dfdfdf",
                }}
                useResizeHandler={true}
                style={{}}
            />
            </div>
        )
    }


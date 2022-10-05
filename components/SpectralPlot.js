import React from 'react'
//import Plot from 'plotly.js';
import plotly from 'plotly.js/dist/plotly'
import createPlotComponent from 'react-plotly.js/factory'
import styles from '../styles/SpectralPlot.module.css'

const Plot = createPlotComponent(plotly)

export default class SpectralDataPlot extends React.Component {
    render() {

        return (
            <Plot
                className={styles.plot}
                data={[
                    {
                        x:this.props.spectralData.X,
                        y:this.props.spectralData.Y,
                    }
                ]}
                layout={ {width: 750, height: 450, title: "Infra Red"} }                
            />
        )
    }
}

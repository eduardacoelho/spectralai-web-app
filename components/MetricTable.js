import * as React from 'react';
import styles from '../styles/MetricTable.module.css'



export default class MetricTable extends React.Component { 
  render() {
    const names = this.props.metrics.names
    const values = this.props.metrics.values


    return (
      <>
        <table className={styles.metric_table}>
          <thead>
            <tr>
              {names.map((item,index) => (
                <th key={`name_${index}`}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {values.map((item,index) => (
                <td key={`value_${index}`}>{item.toFixed(2)}</td>
              ))}
            </tr>
          </tbody>
        </table> 
      </>
    )
  }
}

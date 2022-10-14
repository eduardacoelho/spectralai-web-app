import * as React from 'react';
import styles from '../styles/Metric.module.css'


export default function Metric({metrics}) {

    return (
        <div className={styles.container}>
            <h2>Metrics</h2>
            <div className={styles.metric}>
                    {metrics.map((item,index) => (
                        <div className={styles.metric_item} key={index}>
                            <p><span>{item[0]}:</span> {(item[1]*100).toFixed(1)}%</p>
                        </div>
                    ))}                
            </div>
        </div>
    )
}
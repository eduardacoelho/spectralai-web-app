import * as React from 'react';
import styles from '../styles/Predict.module.css'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';

import * as groupsraw from '../public/data/groups.json'

const groups = Array.from(groupsraw.default)

function icon(value) {
  return (
    value
    ? <DoneSharpIcon style={{color: 'green'}}/>  
    : <CloseSharpIcon style={{color: 'red'}}/>
  )
}

export default function Predict({predictions}) {
    const {real,pred} = predictions
    const rows = []

    for (let i = 0; i < real.length; i += 1) {
        rows.push({
          id: i,
          group: groups[i],
          real: real[i],
          pred: pred[i]
        })  
      }

    return (
        <div className={styles.container}>
            <h2>Predictions</h2>
            <div className={styles.predict}>
            <table>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Real</th>
                  <th>Pred</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item,index) => (
                  <tr key={`prediction_${index}`}>
                    <td key={`group_${index}`}>{item.group }</td>
                    <td key={`real_${index}`}>{icon(item.real )}</td>
                    <td key={`pred_${index}`}>{icon(item.pred )}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
    )
}
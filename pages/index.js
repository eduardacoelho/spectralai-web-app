import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import CardMolecule from '../components/CardMolecule'
import Predict from '../components/Predict'
import Metric from '../components/Metric'
import dynamic from 'next/dynamic'
const DynamicPlot = dynamic(import('../components/Plot'), {
  ssr:false
})


import * as dataraw from '../public/data/forWeb_Tabular.json'
const data = Array.from(dataraw.default)
const ids = data.map((item) => (item.ids))


export default function Home() {
  const [idx, setIdx] =  useState(0)


  return (
      <div className={styles.main_container}>       
        <div className={`${styles.containers} ${styles.title_container}`}>
          <h1 className={styles.title}>Spectral<span>AI</span></h1>
        </div>
        <div className={`${styles.containers} ${styles.cards_container}`}>
          <CardMolecule ids={ids} idx={idx} setIdx={setIdx}/>
        </div>
        <div className={`${styles.containers} ${styles.result_containers}`}>
          <div className={`${styles.result} ${styles.prediction_container}`}>
            <Predict
              predictions={data[idx].predictions}
            />
          </div>          
          <div className={`${styles.result} ${styles.right}`}>
            <DynamicPlot className={styles.plot} data={data[idx].data}/>
            <Metric className={styles.metric} metrics={data[idx].metrics}/>
          </div>  
        </div>
      </div>
    )
}

/*
{true
  ?<div>PLOT</div>
  :<SpectralDynamicPlot spectralData={data[this.state.ind].data}/>}
*/
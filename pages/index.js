import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React from 'react'
import CardMolecule from '../components/CardMolecule'
import PredictTable from '../components/PredictTable'
import MetricTable from '../components/MetricTable'

import dynamic from 'next/dynamic'
const SpectralDynamicPlot = dynamic(import('../components/SpectralPlot'), {
  ssr:false
})

import * as dataraw from '../public/data/forWeb_Tabular.json'
const data = Array.from(dataraw.default)
const ids = data.map((item) => (item.ids))


export default class Home extends React.Component  {
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = { ind:0 }
    this.handleIndexChange = this.handleIndexChange.bind(this)     
    
    
  }

  handleIndexChange(id) {   
    this.setState({ind:ids.indexOf(id)})

    
  } 

  render() {
    
    return (
      <>
         <div className={styles.title_container}>
              <h1 className={styles.title}>
                Spectral<span>AI</span>
              </h1>
        </div>
        <div className={styles.mol_container}>
          <ul className={styles.mol_cards}>
              {data.map((item) => (
                <CardMolecule
                  mol_data={item.ids}
                  key={item.ids.cas}
                  onMolSelect={this.handleIndexChange}
                  ind_cas={data[this.state.ind].ids.cas}
                 />
              ))}
          </ul>
        </div>          
        <div>
          <Image 
            
            src={`/images/${data[this.state.ind].ids.cas}.svg`}
            width="300"
            height="100"
            alt="Spectral AI"
          />
          
        </div>
        <div className={styles.spectral_container}>
            <div className={styles.spectral_tables}>
              <div className={styles.spectral_prediction}>
                <PredictTable predictions={data[this.state.ind].predictions} />
              </div>
              <div className={styles.container_right}>              
                <div className={styles.spectral_metric}>
                  <MetricTable metrics={data[this.state.ind].metrics} />
                </div>
                <div className={styles.spectral_plot}>
                  <SpectralDynamicPlot spectralData={data[this.state.ind].data}/>
                </div>
              </div>
            </div>
        </div>
      </>
    )
  }  
}

/*
{true
  ?<div>PLOT</div>
  :<SpectralDynamicPlot spectralData={data[this.state.ind].data}/>}

https://chemapps.stolaf.edu/jmol/jmol.php?model=CCC
  ?{`/images/${data[this.state.ind].ids.cas}.svg`}
*/
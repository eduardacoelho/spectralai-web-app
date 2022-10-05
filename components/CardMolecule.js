import Image from 'next/image'
import styles from '../styles/CardMolecule.module.css'
import * as React from 'react';


export default class CardMolecule extends React.Component {
    constructor(props) {
        super(props)
        this.mol_data = props.mol_data
        this.handleMolSelect = this.handleMolSelect.bind(this)
    }
    handleMolSelect(e) {
        this.props.onMolSelect(e)
    }
    render () {
        //console.log(`/images/${this.mol_data.cas}.svg`)
        return (
            <>
            <div className={styles.card} onClick={this.handleMolSelect.bind(this,this.mol_data)}>
                <Image 
                    src={`/images/${this.mol_data.cas}.svg`}
                    width="300"
                    height="100"
                    alt={this.mol_data.smile}
                />
                <p className={styles.id}>#{this.mol_data.cas}</p>
                <p className={styles.title}>{this.mol_data.smile}</p>
            </div>
            </>
        )
    }
}
import Image from 'next/image'
import styles from '../styles/CardMolecule.module.css'
import * as React from 'react';


export default class CardMolecule extends React.Component {
    constructor(props) {
        super(props)
        //console.log(props)
        this.mol_data = props.mol_data
        this.handleMolSelect = this.handleMolSelect.bind(this)
        
    }
    handleMolSelect(e) {
        this.props.onMolSelect(e)
    }
    render () {
        return (
            <li
                className={`
                    ${styles.mol_card}
                    ${this.props.mol_data.cas === this.props.ind_cas
                        ? styles.active
                        : styles.inactive
                    }
                `}
                onClick={this.handleMolSelect.bind(this,this.mol_data)}
            >
                    <h3 className={styles.mol_card_title}>{this.mol_data.iupac_name}</h3>
                    <Image 
                        className={styles.mol_card_content}
                        src={`/images/${this.mol_data.cas}.svg`}
                        width="300"
                        height="100"
                        alt={this.mol_data.smile}
                    />
                    <p className={styles.mol_card_formula}>
                        {this.mol_data.formula}
                    </p>            
            </li>
        )
    }
}
import Image from 'next/image'
import styles from '../styles/CardMolecule.module.css'

export default function CardMolecule ({ids, idx, setIdx}) {
    

    function setNumberSub (txt) {
        let res = txt.split('')
        res = res.map((l)=>(+l + 1 ? <sub>{l}</sub> : l))
        return (res)
    }

    function handleSetIdx (e,index) {
        setIdx(index)
        console.log(e)
    }
    
    return (
        <div className={styles.cards}>

            {ids.map((item,index) => (
                <div 
                    key={item.cas}
                    className={`
                        ${styles.card}
                        ${index === idx
                            ? styles.active : ''
                    }
                `}
                    onClick={(e) => (handleSetIdx(e,index))}
                >
                    <Image 
                        className={`${styles.item} ${styles.card_image}`}
                        src={`/images/${item.cas}.svg`}
                        width="900"
                        height="300"
                        alt={item.smile}
                    />
                    <p className={styles.item}>
                        {setNumberSub(item.formula)}
                        <span className={styles.tooltip}>{item.iupac_name}</span>
                    </p>
                </div>

            ))}
        </div>
    )
}


/*
                        <h3>{item.iupac_name}</h3>
                        <Image 
                            className={styles.card_content}
                            src={`/images/${ids.cas}.svg`}
                            width="300"
                            height="100"
                            alt={ids.smile}
                        <p className={styles.item}>{formula(item.formula)}</p>
                        />
                        <h3 className={styles.item}>{item.iupac_name}</h3>
                        
*/
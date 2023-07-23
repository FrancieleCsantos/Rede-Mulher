import styles from "../styles/components/button.module.css"
function Button ({text}) {
    return (
        <button className={styles.ButtonContent}>{text}</button>
    )
}

export default Button;
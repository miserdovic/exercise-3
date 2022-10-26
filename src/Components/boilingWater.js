export const BoilingWater = (props) => {
    
    if (props.celsius >= 100) {
        return <p>Water is boiling</p>;
    } else {
        return <p>Water is not boiling</p>
    }
    
}
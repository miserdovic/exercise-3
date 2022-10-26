

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TemperatureInput = (props) => {
    const temperature = props.temperature;
    const scale = props.scale;

    
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

        
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type='text' value={temperature} onChange={(event) => handleChange(event)} />
                                
        </fieldset>
    )
    
}

export default TemperatureInput;
interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit:any;

}

const Form: React.FC<FormProps> = (props) => {
    return (
        <div>
            <p>Find the best promo pitch and keywords! </p>
            <p>What is your brand product or service? </p>

            <input 
                type="text" 
                placeholder="wheels" 
                value={props.prompt} 
                onChange={(e) => props.setPrompt(e.currentTarget.value)}>
                </input>
            <button onClick={props.onSubmit}>Submit</button>
        </div>
    );
};

export default Form;
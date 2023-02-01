interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length <= props.characterLimit;
    const updatePromptValue = (text: string) => {
        if(text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    }

    return (
        <div>
            <p>Get a promo pitch and keywords for social media! </p>
            <p>Tell us about your brand&apos;s product or service </p>

            <input 
                type="text" 
                placeholder="classy cocktails" 
                value={props.prompt} 
                onChange={(e) => updatePromptValue(e.currentTarget.value)}>
                </input>
                <div>{props.prompt.length}/{props.characterLimit}</div>
            <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Submit</button>
        </div>
    );
};

export default Form;
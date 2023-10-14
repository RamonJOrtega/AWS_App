interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length < props.characterLimit;
    const updatePromptValue = (text: string) => {
        if(text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    }

    let statusColor = "text-neutral-600";
    let statusText = null;
    if (!isPromptValid) {
        statusColor = "text-yellow-400";
        statusText = `Limit input to less than ${props.characterLimit} characters`;
    }

    return (
        <div>
            <div className="mb-6 text-amber-50">
                <p>Get a promo pitch and keywords for social media! </p>
                <p>Tell us about your brand&apos;s product, service, or style. </p>
            </div>

            <input
                className="p-2 w-full rounded-md focus:outline-yellow-400 text-neutral-900" 
                type="text" 
                placeholder="classy cocktails" 
                value={props.prompt} 
                onChange={(e) => updatePromptValue(e.currentTarget.value)}>
                </input>
                <div className={statusColor + " flex justify-between my-2 text-sm mb-6"}>
                    <div>{statusText}</div>
                    {props.prompt.length}/{props.characterLimit-1}
                </div>
            <button 
            className="bg-gradient-to-r from-amber-50 to-yellow-200
             text-neutral-900 rounded-md disabled:opacity-10 w-full p-2 text-lg" 
                onClick={props.onSubmit} 
                disabled={props.isLoading || !isPromptValid}>
                    Submit
                </button>
        </div>
    );
};

export default Form;
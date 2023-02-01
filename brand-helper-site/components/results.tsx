interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack: any;

}

const Results: React.FC<ResultsProps> = (props) => {
    return (
        <div>
            <div>
                <div>
                    <b>Prompt</b> 
                </div> 
                <div>{props.prompt}</div>
            </div>
            <div>
                <div>
                    <b>Snippet</b> 
                </div> 
                <div>{props.snippet}</div>
            </div>
            <div>
                <div>
                    <b>Keywords</b>
                </div>
                <div>{props.keywords.join(", ")}</div> 
            </div>
            <button onClick={props.onBack}>Back</button>
        </div>
    )

}

export default Results
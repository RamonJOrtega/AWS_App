interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack: any;

}

const Results: React.FC<ResultsProps> = (props) => {

    const keywordElements = [];
    for(let i = 0; i < props.keywords.length; i++) {
        const element = <div key={i}>#{props.keywords[i].replace("-","")}</div>;
        //the replace methode here should really be fixed on the frontend in getAPIBrandingDataFromOpenAI.
        //but for now keep it here. future issue to be submitted
        keywordElements.push(element);
    }

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
                <div>{keywordElements}</div> 
            </div>
            <button onClick={props.onBack}>Back</button>
        </div>
    )

}

export default Results
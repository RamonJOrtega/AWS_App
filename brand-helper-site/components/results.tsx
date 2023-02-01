interface ResultsProps {
    snippet: string;
    keywords: string[];
    onBack: any;

}

const Results: React.FC<ResultsProps> = (props) => {
    return (
        <div>
            Here are your results
            <div>Snippet: {props.snippet}</div>
            <div>Keywords: {props.keywords.join(", ")}</div>
            <button onClick={props.onBack}>Back</button>
        </div>
    )

}

export default Results
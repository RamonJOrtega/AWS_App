interface ResultsProps {
    snippet: string;
    keywords: string[];

}

const Results: React.FC<ResultsProps> = (props) => {
    return (
        <div>
            Here are your results
            <div>Snippet: {props.snippet}</div>
            <div>Keywords: {props.keywords.join(", ")}</div>
        </div>
    )

}

export default Results
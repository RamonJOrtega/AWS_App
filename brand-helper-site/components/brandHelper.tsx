import React from "react";
import Form from "./form";
import Results from "./results";

const BrandHelper: React.FC = () => {
    const ENDPOINT = 'https://55mgcbkr77.execute-api.us-west-2.amazonaws.com/prod/generate_snippet_and_keywords';
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);


    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
            .then((res) => res.json())
            .then(onResult);
    };

    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResult(true);
    }

    const formElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />;

    let ResultsElement = null;
    if (hasResult) {
        ResultsElement = <Results snippet={snippet} keywords={keywords} />
    }   
    return (
        <>
            <h1>Brand Marketing Helper</h1>
            {formElement}
            {ResultsElement}
        </>
    );
};

export default BrandHelper
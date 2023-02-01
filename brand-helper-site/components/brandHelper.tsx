import React from "react";

const BrandHelper: React.FC = () => {
    const ENDPOINT = 'https://55mgcbkr77.execute-api.us-west-2.amazonaws.com/prod/generate_snippet_and_keywords';
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([])


    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
            .then((res) => res.json())
            .then(onResult);
    };

    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
    }

    console.log(snippet);
    console.log(keywords);

    let onResultsElement = null;

    return (
        <>
            <h1>Brand Marketing Helper</h1>
            <p>Find the best promo pitch and keywords! </p>
            <p>What is your brand product or service? </p>

            <input type="text" placeholder="wheels" value={prompt} onChange={(e) => setPrompt(e.currentTarget.value)}></input>
            <button onClick={onSubmit}>Submit</button>
        </>
        
    );
};

export default BrandHelper
import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/bronze 2.png"

const BrandHelper: React.FC = () => {
    const CHARACTER_LIMIT: number = 32; //exclusive limit, so really only 31 characters valid
    const ENDPOINT_SNIPPET = 'https://55mgcbkr77.execute-api.us-west-2.amazonaws.com/prod/generate_snippet_and_keywords';
    const ENDPOINT_KEYWORDS = 'https://55mgcbkr77.execute-api.us-west-2.amazonaws.com/prod/generate_snippet_and_keywords';
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    
    const [hasKeywordResult, setHasKeywordResult] = React.useState(false);
    const [hasSnippetResult, setHasSnippetResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT_SNIPPET}?prompt=${prompt}`).then((res) => res.json()).then(onResultSnippet);
        fetch(`${ENDPOINT_KEYWORDS}?prompt=${prompt}`).then((res) => res.json()).then(onResultKeywords)
    };

    const onResultSnippet = (data: any) => {
        setSnippet(data.snippet);
        setHasSnippetResult(true);
        setIsLoading(false);
    }

    const onResultKeywords = (data: any) => {
        setKeywords(data.keywords);
        setHasKeywordResult(true);
        setIsLoading(false);
    }

    const onReset = () => {
        setPrompt("");
        setHasSnippetResult(true);
        setHasSnippetResult(false);
        setHasKeywordResult(true);
        setIsLoading(false);
    }

    let displayedElement = null;

    let ResultsElement = null;
    if (hasKeywordResult && hasSnippetResult) {
        displayedElement = <Results snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt} />
    } else {
        displayedElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />;
    }
const gradientTextStyle = 
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-700";

    return (
        <div className="h-screen flex">
           <div className="max-w-md m-auto p-2">
                <div className="bg-neutral-900 p-6 rounded-md text-white" >
                    <div className= "text-center my-6">
                        <div className="flex justify-center">
                            <Image src={logo} width={20} alt={""} />
                        </div>
                        <div className={gradientTextStyle}>AI Generated</div>
                        <h1 className={gradientTextStyle + " text-2xl font-lightw-fit m-auto"} >Brand Marketing Help</h1>
                    </div>
                    {displayedElement}
                </div>
           </div> 
        </div>
    );
};

export default BrandHelper
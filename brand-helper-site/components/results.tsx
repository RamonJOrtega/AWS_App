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

    

    const resultSection = (label: string, body: any) => {
        return (
        <div className="bg-neutral-800 p-4 my-2 rounded-md">
            <div className="text-neutral-700 text-sm font-bold mb-4">{label}</div> 
            <div>{body} </div>
        </div>
        )
    }


    return (
        <div>
            <div className="mb-6">
                {resultSection("Prompt", <div className="text-lg font-bold">{props.prompt}</div>)}
                {resultSection("Promo pitch", props.snippet)}
                {resultSection("Keywords", keywordElements)}

            </div>
          
            <button className="bg-gradient-to-r from-amber-50 to-yellow-200
             text-neutral-900 rounded-md disabled:opacity-10 w-full p-2 text-lg"
                onClick={props.onBack}>
                    Back
                </button>
        </div>
    )

}

export default Results
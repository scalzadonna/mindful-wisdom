'use client';

import { useEffect, useState } from "react";
import { saveQuote } from "../data/quote/action";

export default function ContentFetcher({user}){
    const [data, setContent] = useState('');

    const fetchContent = async () => {
        const response = await fetch('https://api.realinspire.live/v1/quotes/random', {
            headers: {
                Accept: 'application/json'
            }
        })
        const data = await response.json()
        setContent(data[0])
    }

    useEffect( () => {
        fetchContent();
    },[]);

    const saveText = user ? 'Save' : 'Login to save'

    return (
        <div>
            <p className="text-lg md: text-xl lg:text-2xl p-5">{data.content || 'Loading inspiration...'}
                <br/>-{data.author || 'Unknown'} </p>
            <div className="flex justify-center gap-10">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={fetchContent}
                >
                    Get wisdom
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    disable={!user}
                    onClick={async () => {
                        if (! user) return;
                        await saveQuote(data)
                        alert('Saved')
                    }}
                >
                    {saveText}
                </button>
            </div>
        </div>
    )
}
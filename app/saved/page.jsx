import DeleteButton from "../components/DeleteButton";
import { createClient } from "../utils/supabase/server";

export default async function Saved(){
    const supabase = await createClient();
    const {data:userData} = await supabase.auth.getUser();

    let quotes = [];

    if(userData.user) {
        const {data: quotesData, error} = await supabase.from('quote').select('*');
        if (error){
            console.error('Error fetching quotes.', error)
        }
        quotes = quotesData;
    }
    let header = 'Saved quotes'

    if (!quotes.length){
        header = 'Save some quotes to see it here'
    }

    if (!userData.user){
        header = 'Login to save your quotes'
    }
    return (
        <main className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-2xl font-bold mb-4">{header}</h1>
            <ul>
                {
                    quotes.map((quote) =>(
                        <div key={quote.id} className="flex items-center justify-center space-x-2">
                            <li className="list-none">
                                {quote.quote} - {quote.author}
                            </li>
                            <DeleteButton quoteId={quote.id}/>
                        </div>
                    ))
                }
            </ul>
        </main>

    );
}
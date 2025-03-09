'use server';

import { createClient } from "../../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveQuote(quote) {
    const supabase = await createClient();
    const {data} = await supabase.auth.getUser();
    const user = data.user;

    if (!user){
        throw Error('Must be an authenticated user to perform this action')
    }

    try {
        const {data, error} = await supabase.from('quote').insert([
            {user_id:user.id, quote: quote.content, author:quote.author}
        ])
        if (error) throw error;
        revalidatePath('/saved');
        return data;
    } catch (error){
        throw error
    }
    
}
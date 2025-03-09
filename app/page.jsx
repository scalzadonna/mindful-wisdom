import ContentFetcher from "./components/ContentFetcher";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {data} = await supabase.auth.getUser();

  return (
      <main className="bg-gray-800 min-h-screen flex items-center justify-center text-center text-white">
        <ContentFetcher user={data.user}/>
      </main>
       
  );
}

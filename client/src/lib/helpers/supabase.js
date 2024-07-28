import {createClient} from "@supabase/supabase-js"

const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const URL = `https://${PROJECT_ID}.supabase.co`

const supabase = createClient(URL,ANON_KEY)

export default supabase
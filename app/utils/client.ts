//import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
//const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

//export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a single supabase client for interacting with your database
//export const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key')

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
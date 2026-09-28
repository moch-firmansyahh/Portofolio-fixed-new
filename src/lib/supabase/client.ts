import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://cgnerlwoezzjqaqofzuy.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnbmVybHdvZXp6anFhcW9menV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNDk0ODEsImV4cCI6MjEwNTYyNTQ4MX0.RetSRdXadbmkluaDRW_Og0wy-dWv8mCJ4tAVtFiAuAI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { config } from './config.js';

const sb = createClient(config.supabase.url, config.supabase.anonKey);
window.sb = sb; // disponible globalmente

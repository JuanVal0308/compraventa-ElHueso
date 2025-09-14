// Configuración de la aplicación
// IMPORTANTE: Reemplaza la API key con la tuya real de Supabase

export const SUPABASE_URL = 'https://sppzbrmslxadplopnker.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcHpicm1zbHhhZHBsb3Bua2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MDYwMDEsImV4cCI6MjA3MzI4MjAwMX0.XXzfsaB052T_KuQHLjqZm3lVKfifd115lZQwIES-cTg';

// Configuración centralizada
export const config = {
  supabase: {
    url: SUPABASE_URL,
    anonKey: SUPABASE_ANON_KEY
  }
};

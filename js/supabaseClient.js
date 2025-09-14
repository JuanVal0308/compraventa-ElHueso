import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Configuración directa de Supabase
const SUPABASE_URL = 'https://sppzbrmslxadplopnker.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcHpicm1zbHhhZHBsb3Bua2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MDYwMDEsImV4cCI6MjA3MzI4MjAwMX0.XXzfsaB052T_KuQHLjqZm3lVKfifd115lZQwIES-cTg';

try {
  // Crear cliente de Supabase
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
  // Hacer disponible globalmente inmediatamente
  window.sb = sb;
  
  // Verificar conexión
  console.log('✅ Supabase client initialized successfully');
  console.log('📍 Supabase URL:', SUPABASE_URL);
  console.log('🔑 API Key configured:', SUPABASE_ANON_KEY ? 'Yes' : 'No');
  
  // Notificar que está listo
  window.dispatchEvent(new CustomEvent('supabaseReady'));
  
} catch (error) {
  console.error('❌ Error initializing Supabase:', error);
  window.sb = null;
}

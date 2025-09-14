-- Políticas RLS actualizadas para la tabla vehiculos
-- Ejecutar en Supabase SQL Editor

-- Limpiar políticas existentes
drop policy if exists "read authenticated" on public.vehiculos;
drop policy if exists "insert own" on public.vehiculos;
drop policy if exists "delete own" on public.vehiculos;

-- Políticas actualizadas
-- Lectura: cualquier usuario autenticado puede leer
create policy "read authenticated"
on public.vehiculos
for select
to authenticated
using (true);

-- Insertar: solo como dueño (user_id debe ser el usuario actual)
create policy "insert own"
on public.vehiculos
for insert
to authenticated
with check (auth.uid() = user_id);

-- Actualizar: solo dueño del registro
create policy "update own"
on public.vehiculos
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Eliminar: solo dueño del registro
create policy "delete own"
on public.vehiculos
for delete
to authenticated
using (auth.uid() = user_id);

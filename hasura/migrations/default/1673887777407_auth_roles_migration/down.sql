-- alter constraints
ALTER TABLE ONLY public.users
  DROP CONSTRAINT IF EXISTS users_role_fkey CASCADE;

-- alter columns
ALTER TABLE ONLY public.users
  DROP COLUMN IF EXISTS role CASCADE;

-- table
DROP TABLE IF EXISTS public.roles;
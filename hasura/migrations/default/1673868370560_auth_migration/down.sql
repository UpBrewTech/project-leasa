-- drop triggers and functions
DROP TRIGGER IF EXISTS fortify_credentials ON public.user_credentials;
DROP FUNCTION IF EXISTS public.authenticate;

-- drop tables
DROP TABLE IF EXISTS public.user_tokens;
DROP TABLE IF EXISTS public.user_providers;
DROP TABLE IF EXISTS public.user_credentials;
DROP TABLE IF EXISTS public.roles CASCADE;
DROP TABLE IF EXISTS public.users;

SET check_function_bodies = false;

-- extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- trigger functions
CREATE OR REPLACE FUNCTION public.fortify_credentials() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
 NEW.identifier := LOWER(REGEXP_REPLACE(TRIM(NEW.identifier), '\s+', '_'));
 NEW.password := crypt(NEW.password, gen_salt('bf', 8));
 RETURN NEW;
END
$$;

CREATE OR REPLACE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END
$$;

-- users
CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text,
    email text NOT NULL,
    phone text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    image text,
    "emailVerified" timestamp with time zone,
    PRIMARY KEY (id),
    UNIQUE (email)
);

CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE PROCEDURE public.set_current_timestamp_updated_at();

-- user_credentials
CREATE TABLE public.user_credentials (
    user_id uuid NOT NULL,
    identifier text NOT NULL,
    password text NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TRIGGER fortify_credentials
    BEFORE INSERT OR UPDATE ON public.user_credentials
    FOR EACH ROW
    EXECUTE FUNCTION public.fortify_credentials();

--  user_providers
CREATE TABLE public.user_providers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text,
    "userId" uuid NOT NULL,
    refresh_token_expires_in bigint,
    PRIMARY KEY (id),
    FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- user_tokens
CREATE TABLE public.user_tokens (
    token text NOT NULL,
    identifier text NOT NULL,
    expires timestamp with time zone
);

-- tracked functions
CREATE OR REPLACE FUNCTION public.authenticate(identifier text, password text) RETURNS public.users
    LANGUAGE sql STABLE
    AS $$
SELECT users.*
    FROM users
    JOIN user_credentials
    ON user_credentials.user_id = users.id
    WHERE user_credentials.identifier = authenticate.identifier
    	AND user_credentials.password = crypt(authenticate.password, user_credentials.password)
$$;
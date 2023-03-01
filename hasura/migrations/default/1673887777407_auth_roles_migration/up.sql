-- table
CREATE TABLE public.roles (
    key text NOT NULL,
    description text NOT NULL,
    PRIMARY KEY (key)
);

-- seeds
INSERT INTO public.roles (key, description) VALUES
    ('USER', 'default user');

-- alters
ALTER TABLE ONLY public.users
    ADD COLUMN role text DEFAULT 'USER'::text;

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_fkey FOREIGN KEY (role) REFERENCES public.roles(key) ON UPDATE RESTRICT ON DELETE RESTRICT;
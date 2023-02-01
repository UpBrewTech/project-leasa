CREATE TABLE public.property (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text,
    description text,
    active boolean DEFAULT false,
    owner_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES public.users(id) ON UPDATE cascade ON DELETE cascade
);

CREATE TRIGGER set_public_property_updated_at BEFORE UPDATE ON public.property
    FOR EACH ROW
    EXECUTE PROCEDURE public.set_current_timestamp_updated_at();
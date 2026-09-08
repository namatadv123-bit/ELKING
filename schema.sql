-- Create Enums
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create Tables
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    icon TEXT,
    image_url TEXT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
);

CREATE TABLE public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID REFERENCES public.categories(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    description TEXT,
    image_url TEXT,
    image_urls TEXT[],
    is_active BOOLEAN DEFAULT true NOT NULL,
    is_featured BOOLEAN DEFAULT false NOT NULL,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    stock_quantity INTEGER,
    unit TEXT,
    slug TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    is_published BOOLEAN DEFAULT false NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.article_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id UUID REFERENCES public.articles(id) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT,
    is_approved BOOLEAN DEFAULT false NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE public.banners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true NOT NULL,
    link TEXT,
    sort_order INTEGER DEFAULT 0 NOT NULL,
    subtitle TEXT,
    title TEXT NOT NULL
);

CREATE TABLE public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT,
    is_read BOOLEAN DEFAULT false NOT NULL,
    message TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT
);

CREATE TABLE public.notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    is_read BOOLEAN DEFAULT false NOT NULL,
    link TEXT,
    message TEXT NOT NULL,
    title TEXT NOT NULL,
    type TEXT NOT NULL
);

CREATE TABLE public.orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    customer_email TEXT,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    notes TEXT,
    product_id UUID REFERENCES public.products(id),
    product_name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL
);

CREATE TABLE public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    description TEXT NOT NULL,
    icon TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    title TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.site_settings (
    id BOOLEAN PRIMARY KEY DEFAULT true,
    whatsapp TEXT,
    facebook TEXT,
    instagram TEXT,
    tiktok TEXT,
    google_site_verification TEXT,
    site_name TEXT,
    site_description TEXT,
    logo_url TEXT,
    favicon_url TEXT,
    hero_image TEXT,
    about_image TEXT,
    features_image TEXT,
    footer_image TEXT,
    header_scripts TEXT,
    footer_scripts TEXT,
    email TEXT,
    features_title TEXT,
    features_bottom_text TEXT,
    features_list JSONB,
    home_stats JSONB
);

CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    image_url TEXT,
    name TEXT NOT NULL,
    rating INTEGER,
    role TEXT,
    text TEXT NOT NULL
);

CREATE TABLE public.page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    ip_hash TEXT,
    path TEXT,
    referrer TEXT,
    user_agent TEXT
);

CREATE TABLE public.user_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    role public.app_role NOT NULL,
    user_id UUID NOT NULL
);

-- Insert default site settings
INSERT INTO public.site_settings (id, site_name, site_description, whatsapp, email)
VALUES (true, 'شركة الكينج', 'متجر متخصص في الليجن والكولون', '01006395252', 'info@elking.com')
ON CONFLICT (id) DO NOTHING;

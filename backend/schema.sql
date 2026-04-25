-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    category VARCHAR(100)
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    party_size INTEGER NOT NULL,
    phone VARCHAR(50),
    status VARCHAR(50) DEFAULT 'Pending'
);

-- Insert some dummy menu items
INSERT INTO menu_items (title, description, price, image_url, category) VALUES
('Seared Duck Trio', 'Pan-seared duck breast served with cherry gastrique and parsnip puree.', 32.00, 'https://images.unsplash.com/photo-1628198622814-1e01761e0f0a?auto=format&fit=crop&q=80', 'Mains'),
('Forest Mushroom Risotto', 'Arborio rice cooked with a blend of wild mushrooms, finished with truffle oil and parmesan.', 26.50, 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80', 'Mains'),
('Burrata Heirloom Tomato', 'Fresh burrata cheese with heirloom tomatoes, basil pesto, and balsamic glaze.', 18.00, 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80', 'Starters'),
('Classic Crème Brûlée', 'Rich vanilla bean custard with a caramelized sugar crust.', 12.00, 'https://images.unsplash.com/photo-1473269712320-f24ce56facd1?auto=format&fit=crop&q=80', 'Desserts')
ON CONFLICT DO NOTHING;

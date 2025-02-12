-- Insert sample suppliers
INSERT INTO suppliers (name, contact_info, product_categories)
VALUES
    ('Supplier A', 'contact@supplierA.com', 'Electronics, Laptops'),
    ('Supplier B', 'contact@supplierB.com', 'Accessories, Smartphones');

-- Insert sample products
INSERT INTO products (name, brand, price, category, description, supplier_id)
VALUES
    ('Laptop X', 'Brand X', 1200.00, 'Laptops', 'High-performance laptop', 1),
    ('Smartphone Y', 'Brand Y', 800.00, 'Smartphones', 'Latest smartphone model', 2),
    ('Headphones Z', 'Brand Z', 150.00, 'Accessories', 'Noise-cancelling headphones', 2);
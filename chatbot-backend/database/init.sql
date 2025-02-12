-- Create the suppliers table
CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info TEXT,
    product_categories TEXT
);

-- Create the products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(255),
    description TEXT,
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (255) NOT NULL,
    department_name VARCHAR
    (255) NOT NULL,
    price DECIMAL
    (10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Bike_Cassette", "Sports", 180.00, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Bartape", "Sports", 40.00, 20);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Pedals", "Sports", 300.00, 3);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("iPad_Pro", "Electronics", 1500.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("AirPods", "Electronics", 180.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Flash_Light", "Utility", 40.00, 150);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Knife", "Utility", 20.00, 1000);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Sony", "Digital", 1500.00, 30);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Chain_Saw", "Tools", 340.00, 5);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Hammer", "Tools", 20.00, 1000);

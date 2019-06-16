const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table2");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});


connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log(`connected as id ${connection.threadId}\n`);
});


var display = () => {
    connection.query("SELECT * FROM products", function (err, res) {// running a query against the db and selecting all the fields from the products table
        if (err) throw err;
        console.log("Find the list of products below");

        var table = new Table({
            head: ["Id", "Product Description", "Cost", "Quantity",],
            colWidths: [5, 25, 12, 8],
            colAligns: ["center", "left", "left", "left"],
            style: {
                head: ["aqua"],
                compact: true
            }
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity,]);
        }
        console.log(table.toString());
        customerInquiry();
    });
};

customerInquiry = () => {
    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "what's the the ID of the product you would like to buy?",
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the number of items you wish to buy:"
        }
    ]).then(function (answer) {
        connection.query("SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?", { item_id: answer.item_id }, function (err, res) {
            if (err) throw err;
            if (res[0].stock_quantity >= answer.quantity) {
                let itemsRemaining = res[0].stock_quantity - answer.quantity;
                let purchaseTotal = answer.quantity * res[0].price;
                connection.query(`UPDATE products SET stock_quantity=${itemsRemaining} WHERE item_id=${answer.item_id}`,
                    function (err, res) {
                        if (err) throw err;
                        console.log(`Your total is: ${purchaseTotal}`);
                        connection.end();
                    });
            }
            else {
                console.log("Quantity requested exceeds available inventory for this product.");
                getStoreInfo();
            }
        })
    })
}
display();

// https://youtu.be/2XpH8E3YgjY link to prove that code working 
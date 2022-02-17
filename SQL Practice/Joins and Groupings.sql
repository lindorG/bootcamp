-- Assignment #3
use classicmodels;

-- 1.)
select customerName as `Customer Name`, concat(c.contactLastName, ", ", c.contactFirstName) as `Sales Rep`
FROM customers as c
join employees as e on e.employeeNumber = c.salesRepEmployeeNumber
order by c.customerName;

-- 2.)
select p.productName, sum(o.quantityOrdered), sum(o.priceEach * o.quantityOrdered) as "Total Sale"
from orderdetails as o
join products as p on p.productCode = o.productCode
group by p.productcode;

-- 3.)
select o.status as `Order Status`, count(o.status) as `# Orders`
from orders o
join orderdetails as od on od.orderNumber = o.orderNumber
group by o.status
order by o.status DESC;

-- 4.)
select p.productLine as `Product Line`, sum(od.quantityOrdered) as `# Sold`
from products as p
join orderdetails as od on od.productCode = p.productCode
group by p.productline
order by sum(od.quantityOrdered) DESC;

-- 5.)
select concat(e.lastName, ", ", e.firstName) as `Sales Rep`, count(od.quantityOrdered), if (od.quantityOrdered is NULL, "0.00", sum(od.quantityOrdered*od.priceEach)) as `Total Sales`
from employees as e
left join customers as c on c.salesRepEmployeeNumber = e.employeeNumber
left join orders as o on o.customerNumber = c.customerNumber
left join orderdetails as od on o.orderNumber = od.orderNumber
where e.jobTitle = "Sales Rep"
group by e.employeeNumber 
order by sum(od.quantityOrdered*od.priceEach) DESC;

-- 6.)
select monthname(paymentDate) as `Month`, concat(year(paymentDate)) as `Year`, sum(amount) as `Payments Received`
from payments
group by 1, 2
order by paymentDate;
-- Assignment One
-- 1.)
select customerName as `Name`, p.productline as `Product Line`, p.buyPrice as `Buy Price`
from customers
join products as p;

-- 2.)
select contactFirstName as `First Name`, contactLastName as `Last Name`, city as `City`
from customers where country = "germany"
order by contactLastName;

-- 3.)
select distinct status
from orders;

-- 4.)
select *
from payments
where paymentDate >= "2005-01-01"
order by paymentDate;

-- 5.)
select lastName as `Last Name`, firstName as `First Name`, email as `Email`, jobTitle as `Job Title`
from employees
where officeCode = 1;

-- 6.)
select productName as `Product Name`, productLine as `Product Line`, productScale as `Scale`, productVendor as `Vendor`
from products
where productLine = "Classic Cars" OR productLine = "Vintage Cars"
order by productName, productLine DESC

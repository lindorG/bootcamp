-- Assignment #2
use Banking;

-- 1.)
select p.NAME as 'Product', pt.NAME as 'Type' 
from product p
join product_type pt 
on p.PRODUCT_TYPE_CD = pt.PRODUCT_TYPE_CD;
 
-- 2.)
select b.NAME as `Branch Name`, b.CITY as `City`, e.LAST_NAME as `Last Name`, ee.TITLE as `Title`
from branch as b
join employee as e 
on b.BRANCH_ID = e.ASSIGNED_BRANCH_ID;

-- 3.)
select distinct TITLE as `Unique Employee Title`
from employee;

-- 4.)
select e.LAST_NAME as `Last Name`, e.TITLE as `Title`, ee.LAST_NAME as `Manager Name`, ee.TITLE as `Manager Title`
from employee as e
join employee as ee 
on e.SUPERIOR_EMP_ID = ee.EMP_ID;

-- 5.)
select p.NAME as `Account's Product`, a.AVAIL_BALANCE `Available Balance`, i.LAST_NAME as `Customer's Last Name`
from product as p 
join account as a on p.PRODUCT_CD = a.PRODUCT_CD 
left join customer as c on c.CUST_ID = a.ACCOUNT_ID 
left join individual as i on i.CUST_ID = a.CUST_ID;

-- 6.)
select i.LAST_NAME as `Last Name`, i.FIRST_NAME as `First Name`, acct.AMOUNT as `Balance`, acct.FUNDS_AVAIL_DATE as `Funds Availability Date`, acct.TXN_DATE, acct.TXN_TYPE_CD as `Product Type`
from acc_transaction as acct 
join account as a on a.ACCOUNT_ID = acct.ACCOUNT_ID
join customer as c on c.CUST_ID = a.CUST_ID 
join individual as i on c.CUST_ID = i.CUST_ID
where i.LAST_NAME regexp "^T"
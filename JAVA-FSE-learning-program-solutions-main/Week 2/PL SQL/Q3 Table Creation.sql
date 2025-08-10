-------------------------------------------------------------------
-- 1A. Core tables
-------------------------------------------------------------------
CREATE TABLE customers (
  customer_id  NUMBER PRIMARY KEY,
  first_name   VARCHAR2(50),
  last_name    VARCHAR2(50)
);

CREATE TABLE accounts (
  account_id   NUMBER PRIMARY KEY,
  customer_id  NUMBER  REFERENCES customers(customer_id),
  account_type VARCHAR2(15),   -- 'SAVINGS' or 'CHECKING'
  balance      NUMBER(15,2)
);

CREATE TABLE departments (
  department_id NUMBER PRIMARY KEY,
  dept_name     VARCHAR2(50)
);

CREATE TABLE employees (
  employee_id   NUMBER PRIMARY KEY,
  first_name    VARCHAR2(50),
  last_name     VARCHAR2(50),
  department_id NUMBER REFERENCES departments(department_id),
  salary        NUMBER(15,2)
);

-------------------------------------------------------------------
-- 1B. Sample data (tiny but enough to test)
-------------------------------------------------------------------
INSERT INTO customers VALUES (1,'John','Doe');
INSERT INTO customers VALUES (2,'Jane','Smith');

INSERT INTO accounts VALUES (1001,1,'SAVINGS',  5000);
INSERT INTO accounts VALUES (1002,1,'CHECKING', 2000);
INSERT INTO accounts VALUES (1003,2,'SAVINGS', 12000);

INSERT INTO departments VALUES (10,'Operations');
INSERT INTO departments VALUES (20,'IT');

INSERT INTO employees VALUES (101,'Alice','Green',10,60000);
INSERT INTO employees VALUES (102,'Bob','Brown',10,55000);
INSERT INTO employees VALUES (103,'Carol','White',20,70000);

COMMIT;
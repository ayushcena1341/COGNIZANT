-- CREATE sample tables
CREATE TABLE customers (
  customer_id   NUMBER PRIMARY KEY,
  first_name    VARCHAR2(50),
  last_name     VARCHAR2(50),
  dob           DATE,
  balance       NUMBER,
  isvip         CHAR(1)
);

CREATE TABLE loans (
  loan_id       NUMBER PRIMARY KEY,
  customer_id   NUMBER,
  interest_rate NUMBER(5,2),
  due_date      DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- INSERT sample data
INSERT INTO customers VALUES (1, 'John', 'Doe', TO_DATE('1950-01-01','YYYY-MM-DD'), 15000, 'N');
INSERT INTO customers VALUES (2, 'Jane', 'Smith', TO_DATE('1985-06-10','YYYY-MM-DD'), 8000, 'N');

INSERT INTO loans VALUES (101, 1, 9.5, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 10.0, SYSDATE + 40);

-- Then paste your PL/SQL blocks below here
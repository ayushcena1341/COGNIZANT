CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
  v_rows PLS_INTEGER;
BEGIN
  UPDATE accounts
  SET    balance = balance * 1.01          -- +1 %
  WHERE  account_type = 'SAVINGS';

  v_rows := SQL%ROWCOUNT;
  DBMS_OUTPUT.PUT_LINE(v_rows || ' savings account(s) credited with monthly interest.');
  COMMIT;
END;
/
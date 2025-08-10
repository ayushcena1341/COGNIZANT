CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_acct IN accounts.account_id%TYPE,
    p_to_acct   IN accounts.account_id%TYPE,
    p_amount    IN NUMBER
)
IS
  v_from_bal   NUMBER;
BEGIN
  -- 1. Get current balance of source account
  SELECT balance
  INTO   v_from_bal
  FROM   accounts
  WHERE  account_id = p_from_acct
  FOR UPDATE;

  -- 2. Check sufficient funds
  IF v_from_bal < p_amount THEN
     RAISE_APPLICATION_ERROR(-20001,
        'Insufficient balance in account ' || p_from_acct);
  END IF;

  -- 3. Debit source, credit destination
  UPDATE accounts
  SET    balance = balance - p_amount
  WHERE  account_id = p_from_acct;

  UPDATE accounts
  SET    balance = balance + p_amount
  WHERE  account_id = p_to_acct;

  DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount ||
                       ' from ' || p_from_acct ||
                       ' to '     || p_to_acct || '.');
  COMMIT;
END;
/
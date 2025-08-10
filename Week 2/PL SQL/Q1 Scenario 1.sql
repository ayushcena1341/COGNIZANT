SET SERVEROUTPUT ON;

DECLARE
   v_rows PLS_INTEGER;
BEGIN
   UPDATE loans l
   SET    interest_rate = interest_rate * 0.99
   WHERE  EXISTS (
            SELECT 1
            FROM   customers c
            WHERE  c.customer_id = l.customer_id
            AND    TRUNC(MONTHS_BETWEEN(SYSDATE, c.dob)/12) > 60
          );

   v_rows := SQL%ROWCOUNT;
   DBMS_OUTPUT.PUT_LINE(v_rows || ' loan(s) discounted.');
   COMMIT;
END;
/
SET SERVEROUTPUT ON;

DECLARE
   CURSOR vip_cur IS
      SELECT customer_id
      FROM   customers
      WHERE  balance > 10000;

   v_count PLS_INTEGER := 0;
BEGIN
   FOR rec IN vip_cur LOOP
      UPDATE customers
      SET    isvip = 'Y'
      WHERE  customer_id = rec.customer_id;
      v_count := v_count + 1;
   END LOOP;

   DBMS_OUTPUT.PUT_LINE(v_count || ' customer(s) promoted to VIP.');
   COMMIT;
END;
/
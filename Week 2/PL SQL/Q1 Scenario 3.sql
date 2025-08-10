SET SERVEROUTPUT ON;

BEGIN
   FOR rec IN (
      SELECT 
         l.loan_id,
         l.due_date,
         c.customer_id,
         c.first_name || ' ' || c.last_name AS full_name
      FROM 
         loans l
      JOIN 
         customers c ON c.customer_id = l.customer_id
      WHERE 
         l.due_date BETWEEN SYSDATE AND SYSDATE + 30
      ORDER BY 
         l.due_date
   ) LOOP
      DBMS_OUTPUT.PUT_LINE(
         '📅 Reminder: Loan ID ' || rec.loan_id ||
         ' for customer ' || rec.full_name || 
         ' (Customer ID: ' || rec.customer_id || 
         ') is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY')
      );
   END LOOP;
END;
/
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept_id   IN  employees.department_id%TYPE,
    p_bonus_pct IN  NUMBER             -- e.g. pass 5 for 5 %
)
IS
  v_rows PLS_INTEGER;
BEGIN
  UPDATE employees
  SET    salary = salary * (1 + p_bonus_pct/100)
  WHERE  department_id = p_dept_id;

  v_rows := SQL%ROWCOUNT;
  DBMS_OUTPUT.PUT_LINE(v_rows || ' employee(s) received a ' ||
                       p_bonus_pct || '% bonus in department ' || p_dept_id || '.');
  COMMIT;
END;
/
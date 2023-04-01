const getAllEmployees = `
    SELECT *
    FROM employee e
    INNER JOIN jobs j on j.id = e.fk_job
    INNER JOIN task t on t.id = e.fk_task
`;

module.exports = {
  getAllEmployees
};
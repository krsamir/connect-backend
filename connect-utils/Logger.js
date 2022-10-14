export const Logger = {
  log_initialization: (PORT) =>
    `http:localhost:${PORT} at ${new Date().toLocaleString()}`,
  log_database_connection: (PORT) =>
    `Database connected at ${PORT} successfully`,
  log_database_error: (error) =>
    `Unable to connect to the database:", ${error}`,
};

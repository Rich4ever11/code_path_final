const createConnection = async (request, response) => {
  const { send_user, receive_user } = request.body;
  const created_at = getTimeInSeconds();

  const createConnectionQuery = `INSERT INTO connection (send_user, receive_user, created_at) VALUES ($1, $2, $3) RETURNING *`;
  const createConnectionParams = [send_user, receive_user, created_at];

  try {
    const result = await pool.query(
      createConnectionQuery,
      createConnectionParams
    );
    console.log("🎉 connection created");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating connection: ", error);
    response.status(500).json({ error: error.message });
  }
};

const rejectConnection = async (request, response) => {
  const { connection_id } = request.body;
  const accepted = false;

  const rejectConnectionQuery = `UPDATE connection SET accepted = $1 WHERE id = $2;`;
  const rejectConnectionParams = [accepted, connection_id];

  try {
    const result = await pool.query(
      rejectConnectionQuery,
      rejectConnectionParams
    );
    console.log("🎉 blog deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting blog: ", error);
    response.status(500).json({ error: error.message });
  }
};

const acceptConnection = async (request, response) => {
  const { connection_id } = request.body;
  const accepted = true;

  const acceptConnectionQuery = `UPDATE connection SET accepted = $1 WHERE id = $2;`;
  const rejectConnectionQuery = [accepted, connection_id];

  try {
    const result = await pool.query(
      acceptConnectionQuery,
      rejectConnectionQuery
    );
    console.log("🎉 blog deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting blog: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getConnectionsByUserId = async () => {
  const receiver_id = request.params.id;

  const getConnectionsById = `
      SELECT *
      FROM connection
      WHERE receive_user = $1
      ORDER BY id ASC
      `;

  try {
    const result = await pool.query(getConnectionsById, [receiver_id]);
    console.log("🎉 blog data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const getValidConnectionsByUserId = async () => {
  const receiver_id = request.params.id;

  const getConnectionsById = `
        SELECT *
        FROM connection
        WHERE receive_user = $1 AND accepted = TRUE
        ORDER BY id ASC
        `;

  try {
    const result = await pool.query(getConnectionsById, [receiver_id]);
    console.log("🎉 blog data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing blog data: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  createConnection,
  rejectConnection,
  acceptConnection,
  getConnectionsByUserId,
  getValidConnectionsByUserId,
};

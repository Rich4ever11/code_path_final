const handleMessageCreation = async (request, response) => {
  const { user_id, connection_id, message } = request.body;
  const created_at = getTimeInSeconds();

  const createMessageQuery = `INSERT INTO chat (user_id, connection_id, message, created_at) VALUES ($1, $2, $3, $4) RETURNING *`;
  const createMessageParams = [user_id, connection_id, message, created_at];

  try {
    const result = await pool.query(createMessageQuery, createMessageParams);
    console.log("🎉 chat message created");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating chat message: ", error);
    response.status(500).json({ error: error.message });
  }
};

const handleChatRender = async (request, response) => {
  const connection_id = request.params.connection_id;

  const getMessageQuery = `
      SELECT *
      FROM chat
      WHERE connection_id = $1
      ORDER BY created_at ASC
      `;
  const getMessageParams = [connection_id];

  try {
    const result = await pool.query(getMessageQuery, getMessageParams);
    console.log("🎉 obtained chat messages");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error getting chat message: ", error);
    response.status(500).json({ error: error.message });
  }
};

const handleMessageLog = async (request, response) => {
  const user_id = request.params.user_id;

  const getMessageQuery = `
        SELECT *
        FROM chat
        INNER JOIN connection
            ON chat.user_id = connection.send_user
        WHERE
            user_id = $1
        `;
  const getMessageParams = [user_id];

  try {
    const result = await pool.query(getMessageQuery, getMessageParams);
    console.log("🎉 obtained chat messages");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error getting chat message: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  handleMessageCreation,
  handleChatRender,
  handleMessageLog,
};

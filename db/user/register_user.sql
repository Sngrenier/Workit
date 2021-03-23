INSERT INTO profile (email, password, first_name, last_name, birthday, membership_id)
VALUES ($1, $2, $3, $4, $5, $6)
returning *;
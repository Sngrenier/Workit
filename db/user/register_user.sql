INSERT INTO profile (email, password, first_name, last_name, birthday)
VALUES ($1, $2, $3, $4, $5)
returning *;
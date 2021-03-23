INSERT INTO membership (membership_type, price, start_date)
VALUES ($1, $2, $3)
returning membership_id;
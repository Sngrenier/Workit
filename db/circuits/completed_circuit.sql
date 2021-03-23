insert into circuit_completed (circuit_id, user_id, date)
values ($1, $2, $3)
returning * ;
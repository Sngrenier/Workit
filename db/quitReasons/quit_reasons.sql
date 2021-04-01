insert into quit_reasons (reason, user_id, date)
values ($1, $2, $3)
returning *;
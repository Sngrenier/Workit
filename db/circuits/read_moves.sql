select * from moves where circuit_id = $1;

/*This query is setup this way right now because 
the moves are either assigned to circuit1 or circuit2
we have 5 circuits and if we specify by circuit_id no moves will show up for 
circuits 3-5. Will fix this later.
*/
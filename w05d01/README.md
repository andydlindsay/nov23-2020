# W05D01 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`

### RDBMS
* Relational Database Management System/Server
* psql / ElephantSQL
* Client <==TCP/HTTP==> Web Server <===TCP/POSTGRES===> RDBMS
postgres://

### Relational Databases
* Database is a collection of tables
* Tables are made up of rows and columns
* Column === Field (adjective)
* Row === Record (single entity)
* Relational database all the tables are related to one or more other tables
* Foreign key/Primary key system (PK and FK)





### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < '2021-01-04';

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. List all the countries users live in; don't repeat any countries

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

7. List all albums along with their songs

```sql
SELECT album_name, artist_name, song_name
FROM albums
JOIN songs ON albums.id = album_id;
```

8. List all albums along with how many songs each album has

```sql
SELECT album_name, artist_name, COUNT(*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;
```

9. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, artist_name, COUNT(*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name
HAVING COUNT(*) > 10;
```

10. List ALL albums in the database, along with their songs if any

```sql
SELECT album_name, artist_name, song_name
FROM albums
LEFT JOIN songs ON albums.id = album_id;

-- using a RIGHT JOIN instead
SELECT album_name, artist_name, song_name
FROM songs
RIGHT JOIN albums ON albums.id = album_id;
```

11. List albums along with average song rating

```sql
SELECT album_name, artist_name, AVG(rating)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;

-- using the ROUND function
SELECT album_name, artist_name, ROUND(AVG(rating) * 100) / 100 AS avg_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;
```

12. List albums and songs with rating higher than album average

```sql
SELECT album_name,
  artist_name, 
  song_name, 
  rating,
  (SELECT avg(rating) FROM songs WHERE albums.id = album_id) AS album_avg
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating > (SELECT avg(rating) FROM songs WHERE albums.id = album_id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)

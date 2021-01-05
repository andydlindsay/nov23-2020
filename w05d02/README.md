# W05D02 - Database Design

### To Do
- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams
- [ ] Breakout: Convert 2 Spreadsheets [15 mins]
- [ ] Student Suggestion ERD(s)

### Primary Keys
* A way of uniquely identifying a record
* Has to be unique within the table and cannot be null
* It can be any data type
* Prefer using auto-incrementing integers
* The foreign key HAS to be the same data type
bigint ==> smallint

### Naming Conventions
* All our table and field names will be lowercase and `snake_case`
* Table names are always plural
* That the PK will always be `id`
* FK keys will be singular of the PK table name plus `_id`
* `user_id`, `map_id`

### Data Types
* This used to be a huge concern
* When a record is created, even if the field is null, the db sets aside storage space in memory
* Data is now comparably cheap
* Try not to store images in tables BLOB (AWS, imgur)
* Postal codes and phone numbers stored as strings
* 90210 => 00310-011

### Relationship Types
* One-to-many/Many-to-one: one record in the 1st table is related to 1 or more records in the second
* One-to-one: one record in the 1st table is related to only 1 record in the 2nd
* Many-to-many: 1 or more records in the 1st table are related to 1 or more records in the secondv (needs a third table to be implemented)

### Design Concepts
* Required fields: think of the record in its initial state
* Default values: timestamp/created_at DEFAULT NOW(), `active` default TRUE
* Calculated fields: a field whose value can be derived from one or more other fields `first_name` and `last_name` `full_name`, invoice total SUM
* Single source of truth
* Repeating values: pull repeating values out to a lookup table
* Vancouver, Vancity, Vancover, vancouverrr
* Try not to delete anything: use an `active` field instead
* Consider using a `type` field to differentiate between records with similar values

### ERD
* Entity Relationship Diagram
* Very very useful for querying and adding new tables





### Breakout: Convert Two Spreadsheets
- [Gist with instruction](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)




# 

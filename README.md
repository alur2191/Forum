# Forum

Forum built with PERN stack. Personal project under development.

## Setup

*Prerequisites:  PostgreSQL, NPM.*

#### Database Setup

Create a table in PostgreSQL and open the created table in SQL Shell terminal. Open the "*queries.sql*" file in the repo *root folder*. Copy content of the file to the shell and execute it.

#### Environment variables

Navigate to *server folder* and create a file ".env" (without quotation marks).

```
Express Port
PORT=3003

Database configurations
PGUSER=(psql user)
PGHOST=localhost(if hosted locally)
PGPASSWORD=(psql password)
PGDATABASE=(database name)
PGPORT=(port number)

Json Web Token
jwtSecret = (any secret password)
```

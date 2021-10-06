# Forum

Forum built with PERN stack. Personal project under development.

## Setup

Prerequisites: You will need to install PostgreSQL, create a table and name it. You will also need NPM installed.

#### Database Setup

Open the created table in SQL Shell terminal. Open the "*queries.sql*" file in the *root folder*. Copy content of the file to the shell.

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

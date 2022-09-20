# Forum

Forum built with PERN stack. Currently under development.

## Setup

#### Database Setup

Create a table in PostgreSQL and open the created table in SQL Shell terminal. Open the `queries.sql` file in the repo *root folder*. Copy content of the file to the shell and execute it.

#### Environment variables

Navigate to *server folder* and create a file named `.env`

```
Express Port
PORT=3003

Database configurations
PGUSER=`(psql user)`
PGHOST=localhost(if hosted locally)
PGPASSWORD=`(psql password)`
PGDATABASE=`(database name)`
PGPORT=`(port number)`

Json Web Token
jwtSecret = `(any secret password)`
```

#### Server & Client Installation

Open terminal(command prompt) and navigate to *server folder* and run `npm install`. Navigate to *client folder* and run `npm install`.

#### Launch

Open two terminal windows and navigate to *server folder* on one window, and *client folder* on another one. Run `npm start` on both windows.

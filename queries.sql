CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categories(
    id SERIAL,
    name VARCHAR(30) PRIMARY KEY
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    body TEXT NOT NULL,
    created_at CURRENT_TIMESTAMP,
    author_id uuid REFERENCES users(id),
    author VARCHAR(30),
    categoregy VARCHAR(30) REFERENCES category(name) 
);
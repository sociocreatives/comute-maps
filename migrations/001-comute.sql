-- Up
CREATE TABLE Faqs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT
)

CREATE TABLE About (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heading TEXT,
    description TEXT
)

CREATE TABLE Terms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heading TEXT,
    body TEXT
)

CREATE TABLE Partners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heading TEXT,
    body TEXT
)

INSERT INTO Faqs (title, description) values ('test title', 'test title body')
INSERT INTO About (heading, description) values ('test heading', 'test heading two body')

-- Down
DROP TABLE Faqs;
DROP TABLE About;
DROP TABLE Terms;
DROP TABLE Partners;
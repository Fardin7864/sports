-- Create the users table
CREATE TABLE users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Create stored procedure to add a new user
DELIMITER //

CREATE PROCEDURE addUser (
    IN userEmail VARCHAR(255),
    IN userPassword VARCHAR(255),
    IN userType VARCHAR(50),
    IN userActive BOOLEAN
)
BEGIN
    INSERT INTO users (email, password, type, active) 
    VALUES (userEmail, userPassword, userType, userActive);
END //

DELIMITER ;

CALL addUser('example@example.com', 'password123', 'admin', TRUE);

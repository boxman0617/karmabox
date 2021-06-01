CREATE TABLE "KarmaHistory"
(
    id               SERIAL PRIMARY KEY,
    affected_user_id INT
        CONSTRAINT no_null NOT NULL,
    issuer_user_id   INT
        CONSTRAINT no_null NOT NULL,
    karma            SMALLINT
        CONSTRAINT no_null NOT NULL,
    created_at       TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_affected_user_id FOREIGN KEY (affected_user_id) REFERENCES "UserKarma" ("id"),
    CONSTRAINT fk_issuer_user_id FOREIGN KEY (issuer_user_id) REFERENCES "UserKarma" ("id")
);

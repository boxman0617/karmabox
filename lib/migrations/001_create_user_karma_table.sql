CREATE TABLE "UserKarma"
(
    id         SERIAL PRIMARY KEY,
    uid        VARCHAR(100)
        CONSTRAINT no_null NOT NULL,
    username   VARCHAR(255)
        CONSTRAINT no_null NOT NULL,
    karma      BIGINT
        CONSTRAINT no_null NOT NULL     default 0,
    deleted_at TIMESTAMP WITH TIME ZONE default null
);
CREATE INDEX "idx_user_karma_username" on "UserKarma" ("username");
CREATE INDEX "idx_user_karma_uid" on "UserKarma" ("uid");

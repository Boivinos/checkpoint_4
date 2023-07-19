CREATE TABLE
    magic_card (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        card_name varchar(200) NOT NULL,
        description varchar(500) NOT NULL,
        image varchar(500) NOT NULL,
        attack INT NOT NULL,
        cost INT NOT NULL,
        defense INT NOT NULL
    );

INSERT INTO
    magic_card (
        card_name,
        description,
        image,
        cost,
        attack,
        defense
    )
VALUES (
        "Magicienne au rabais",
        "Une magicienne vraiment pas zinzin, elle connait juste wingardium leviosaaaaa.",
        "https://images.ctfassets.net/s5n2t79q9icq/4s3ygGWPG5QRL2SDOMZ3HA/51d9e0188b4578dff5aab889bf846e57/en_articles_archive_card-image-gallery_strixhaven-school-mages-art-cards-2021-04-15-meta-image.jpeg",
        2,
        1,
        2
    ), (
        "Nymphe pas ouf",
        "Une nymphe qui se donne du mal et en a.",
        "https://sm.ign.com/ign_ap/news/m/magic-the-/magic-the-gathering-artist-suspended-after-fan-art-plagiaris_124e.jpg",
        1,
        2,
        1
    ), (
        "Gnomes pathétiques",
        "Des gnomes qui aimeraient bien avoir l'air, mais qu'on pas l'air du tout",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26091741106449.5798ede0e3c0a.jpg",
        3,
        3,
        2
    ), (
        "Servante presque écarlate",
        "Elle se prend pour une héroïne de roman alors que vraiment elle a juste un masque ridicul",
        "https://draftsim.com/wp-content/uploads/2022/03/Elesh-Norn-Grand-Cenobite-Illustration-by-Igor-Kieryluk-1024x606.jpg",
        0,
        1,
        1
    ), (
        "Zombie bêtement commun",
        "Un zombie, vraiment, rien de plus créatif qu'un pauvre zombie ? S'il me mort je me transforme je parie",
        "https://magicuntapped.com/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_XL.jpg",
        2,
        2,
        2
    );
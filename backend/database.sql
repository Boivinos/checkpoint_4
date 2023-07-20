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
        "Mur façon John Snow",
        "C'est un mur, dans le genre inutile on a rarement vu pire.",
        "http://localhost:8000/uploads/mur-qui-pue.jpg",
        1,
        0,
        3
    ), (
        "Singe Savant",
        "Il est sans doute moins bête que toi, mais ça reste une créature pathétique.",
        "http://localhost:8000/uploads/singe-savant.webp",
        1,
        0,
        1
    ), (
        "Elémental tout pété",
        "Un bête élémental, vous n'irez pas loin avec ça franchement",
        "http://localhost:8000/uploads/elemental.jpg",
        2,
        1,
        1
    ), (
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
        "Elle se prend pour une héroïne de roman alors que vraiment elle a juste un masque ridicule",
        "https://draftsim.com/wp-content/uploads/2022/03/Elesh-Norn-Grand-Cenobite-Illustration-by-Igor-Kieryluk-1024x606.jpg",
        0,
        1,
        1
    ), (
        "Zombie bêtement commun",
        "Un zombie, vraiment, rien de plus créatif qu'un pauvre zombie ? S'il me mord je me transforme je parie.",
        "https://magicuntapped.com/media/k2/items/cache/4d8c9898b5bb88437f053c8b957f47f3_XL.jpg",
        2,
        2,
        2
    ), (
        "Formateur aigri",
        "Un formateur sympathique mais plein d'amertume, et une véritable quiche, à Only Up comme aux échecs. Se débrouille en JS.",
        "http://localhost:8000/uploads/IMG_2355.jpg",
        4,
        4,
        4
    ), (
        "Nerd à poils longs",
        "Un gros nerd qui toute la journée parseInt de .map de .reverse() de split("") de que sais-je encore. Ne sais pas faire de css.",
        "http://localhost:8000/uploads/nerd-a-poil-long.jpg",
        3,
        4,
        2
    ), (
        "Tomtom bourré",
        "Les dosages sont importants : il est tout fou après deux bières mais s'endort à la troisième.",
        "http://localhost:8000/uploads/tomtom-ivre.jpg",
        2,
        1,
        3
    ), (
        "Sorcière de la prairie",
        "Une folle qui court dans l'herbe H24, si vous la croisez fuyez.",
        "http://localhost:8000/uploads/sorciere-prairie.JPG",
        3,
        2,
        2
    ), (
        "Linkedin maniac",
        "Un maniaque qui erre sur Linkedin. Il aborde les malheureux qui croisent sa route en criant 'Je suis open to work !!!'",
        "http://localhost:8000/uploads/linkedin-maniac.JPG",
        1,
        1,
        2
    ), (
        "Streamer ringard",
        "Un streamer qui se prend pour Squeezie alors que ses cheveux sont même pas bien détourés.",
        "http://localhost:8000/uploads/streamer-ringard.JPG",
        1,
        0,
        3
    );

CREATE TABLE
    magic_user (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        user_name varchar(200) NOT NULL,
        email varchar(200) UNIQUE NOT NULL,
        password varchar(200) NOT NULL,
        isAdmin BOOL DEFAULT 0,
        booster_restant INT DEFAULT 3,
        PRIMARY KEY (`id`)
    );

INSERT INTO
    magic_user (
        user_name,
        email,
        password,
        isAdmin,
        booster_restant
    )
VALUES (
        "Boivinos",
        "boivinantonin@gmail.com",
        "0000",
        1,
        3
    ), (
        "Tom",
        "tomlenaze@gmail.com",
        "0000",
        0,
        3
    );

CREATE TABLE
    deck (
        user_id INT NOT NULL,
        card_id INT NOT NULL
    );

INSERT INTO
    deck (user_id, card_id)
VALUES (2, 1), (2, 3), (2, 2);

ALTER TABLE `deck`
ADD
    CONSTRAINT `deck_fk0` FOREIGN KEY (`user_id`) REFERENCES `magic_user`(`id`);

ALTER TABLE `deck`
ADD
    CONSTRAINT `deck_fk1` FOREIGN KEY (`card_id`) REFERENCES `magic_card`(`id`);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mr-service-cms",
});

module.exports = {
    db,
}

const userUpload = require('./routes/index');
app.use('/user', userUpload);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get', (req, res) => {

    const element = req.query.element;

    const sqlSelect =
        "SELECT * FROM site_content WHERE element LIKE ?;"
    db.query(sqlSelect, [element], (err, result) => {
        res.send(result);
    })
})

app.post('/get-user', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const sqlSelect =
        "SELECT * FROM users WHERE email = ? AND password = ?;"
    db.query(sqlSelect, [email, password],
        (err, result) => {
            if(err) {
                res.send({ err: err });
            }

            if(result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Wrong username/password combination" })
            }
        })
})

app.post('/insert/list-item', (req, res) => {

    const listItem1 = req.body.listItem1;
    const listItem2 = req.body.listItem2;
    const listItem3 = req.body.listItem3;
    const listItem4 = req.body.listItem4;
    const listItem5 = req.body.listItem5;
    const listItem6 = req.body.listItem6;
    const listItem7 = req.body.listItem7;
    const listItem8 = req.body.listItem8;

    const listItem1Id = req.body.listItem1Id;
    const listItem2Id = req.body.listItem2Id;
    const listItem3Id = req.body.listItem3Id;
    const listItem4Id = req.body.listItem4Id;
    const listItem5Id = req.body.listItem5Id;
    const listItem6Id = req.body.listItem6Id;
    const listItem7Id = req.body.listItem7Id;
    const listItem8Id = req.body.listItem8Id;


    const sqlInsertListItem =
        "INSERT INTO site_content (element, value) " +
        "VALUES (?, ?), (?, ?), (?, ?), (?, ?), (?, ?), (?, ?), (?, ?), (?, ?);"

    db.query(sqlInsertListItem, [listItem1Id, listItem1,
            listItem2Id, listItem2,
            listItem3Id, listItem3,
            listItem4Id, listItem4,
            listItem5Id, listItem5,
            listItem6Id, listItem6,
            listItem7Id, listItem7,
            listItem8Id, listItem8,
        ],
        (err, result) => {
            res.send(result);
        })
});

app.post('/insert', (req, res) => {
    const header = req.body.header;
    const subHeader = req.body.subHeader;
    const description = req.body.description;
    const search = req.body.search;
    const installations = req.body.installations;
    const linkOne = req.body.linkOne;
    const linkTwo = req.body.linkTwo;
    const linkThree = req.body.linkThree;
    const linkFour = req.body.linkFour;
    const linkFive = req.body.linkFive;
    const price = req.body.price;
    const currency = req.body.currency;
    // const image = req.files.image;

    const headerElement = req.body.headerElement;
    const subHeaderElement = req.body.subHeaderElement;
    const descriptionElement = req.body.descriptionElement;
    const searchElement = req.body.searchElement;
    const installationsElement = req.body.installationsElement;
    const linkOneElement = req.body.linkOneElement;
    const linkTwoElement = req.body.linkTwoElement;
    const linkThreeElement = req.body.linkThreeElement;
    const linkFourElement = req.body.linkFourElement;
    const linkFiveElement = req.body.linkFiveElement;
    const priceElement = req.body.priceElement;
    const currencyElement = req.body.currencyElement;
    // const imageElement = req.body.imageElement;

    const sqlInsert = "INSERT INTO site_content (element, value) VALUES (?, ?), (?, ?);"
    db.query(sqlInsert, [headerElement, header,
        subHeaderElement, subHeader,

        ],
        (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.put('/update', (req, res) => {
    const header = req.body.header;
    const subHeader = req.body.subHeader;
    const description = req.body.description;
    const installations = req.body.installations;
    const search = req.body.search;
    const linkOne = req.body.linkOne;
    const linkTwo = req.body.linkTwo;
    const linkThree = req.body.linkThree;
    const linkFour = req.body.linkFour;
    const linkFive = req.body.linkFive;
    const linkSix = req.body.linkSix;
    const price = req.body.price;
    const currency = req.body.currency;
    // const image =  "http://127.0.0.1:3000/Images" + req.file.filename;

    const headerElement = req.body.headerElement;
    const subHeaderElement = req.body.subHeaderElement;
    const descriptionElement = req.body.descriptionElement;
    const installationsElement = req.body.installationsElement;
    const searchElement = req.body.searchElement;
    const linkOneElement = req.body.linkOneElement;
    const linkTwoElement = req.body.linkTwoElement;
    const linkThreeElement = req.body.linkThreeElement;
    const linkFourElement = req.body.linkFourElement;
    const linkFiveElement = req.body.linkFiveElement;
    const linkSixElement = req.body.linkSixElement;
    const priceElement = req.body.priceElement;
    const currencyElement = req.body.currencyElement;
    // const imageElement = req.body.imageElement;

    const sqlUpdate =
        "UPDATE site_content \n" +
        "SET value = CASE element\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "ELSE value\n" +
        "END"
    db.query(sqlUpdate, [headerElement, header,
        subHeaderElement, subHeader,
        descriptionElement, description,
        installationsElement, installations,
        searchElement, search,
        linkOneElement, linkOne,
        linkTwoElement, linkTwo,
        linkThreeElement, linkThree,
        linkFourElement, linkFour,
        linkFiveElement, linkFive,
        linkSixElement, linkSix,
        priceElement, price,
        currencyElement, currency], (err, result) => {
            res.send("result");
    })
})

app.put('/update-list', (req, res) => {
    const listItem1 = req.body.listItem1;
    const listItem2 = req.body.listItem2;
    const listItem3 = req.body.listItem3;
    const listItem4 = req.body.listItem4;
    const listItem5 = req.body.listItem5;
    const listItem6 = req.body.listItem6;
    const listItem7 = req.body.listItem7;
    const listItem8 = req.body.listItem8;

    const listItem1Id = req.body.listItem1Id;
    const listItem2Id = req.body.listItem2Id;
    const listItem3Id = req.body.listItem3Id;
    const listItem4Id = req.body.listItem4Id;
    const listItem5Id = req.body.listItem5Id;
    const listItem6Id = req.body.listItem6Id;
    const listItem7Id = req.body.listItem7Id;
    const listItem8Id = req.body.listItem8Id;

    const sqlUpdateById = "UPDATE site_content \n" +
        "SET value = CASE element\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "WHEN ? THEN ?\n" +
        "ELSE value\n" +
        "END"
    db.query(sqlUpdateById, [listItem1Id, listItem1,
    listItem2Id, listItem2,
    listItem3Id, listItem3,
    listItem4Id, listItem4,
    listItem5Id, listItem5,
    listItem6Id, listItem6,
    listItem7Id, listItem7,
    listItem8Id, listItem8,
    ], (err, result) => {
        console.log(result);
        console.log(err);
    })
})

app.delete('/delete/:value1/:value2', (req, res) => {
    const value1 = req.params.value1;
    const value2 = req.params.value2;

    const sqlDelete =
        "DELETE FROM site_content WHERE element IN (?, ?);"
    db.query(sqlDelete, [value1, value2], (err, result) => {
        if (err) console.log(err);
    })
});

app.delete('/delete/id-:value1', (req, res) => {
    const id = req.params.value1;

    const sqlDelete =
        "DELETE FROM site_content WHERE id = ?;"
    db.query(sqlDelete, [id], (err, result) => {
        if (err) console.log(err);
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});

const Facebook = require('facebook-node-sdk');

let fb = new Facebook({
    appId: '761546535094993'
})
.setAccessToken('EAAK0n160StEBAIXYNDn10fr9vCHSgDwkH5UIkxax49BbZCSsn2Sibsl1SbfdLSLZBNvKAEwmAdRxxhMwZBoJs53nZAzZCsVZCVKTlfbTpVSGL9eHZCP0b1g6b8mRlyiuiufrYZBOiiRJNk9mxCcqkWAx1ca4UEgL9Yk2ZBJECYbLHB99HvbHfxk4I');

/* make the API call */
app.post('/update-posts', (req, res) => {
    let postId = '';
    let title = '';
    let description = '';
    let timeCreated = '';
    let attachments = 0;
    let imageSrc = '';
    let imageHeight = 0;
    let imageWidth = 0;

    db.query("DELETE FROM social_media;", (err, result) => {
        console.log(result);
    });

    fb.api('/103940338888044/posts', function(err, data) {

        let posts = data.data;

        posts.map(({id, created_time, story, message}) => {
            postId = id;
            timeCreated = created_time;

            if(story && story.length > 0) {
                title = story;
            }

            if(message && message.length > 0) {
                description = message;
            }

            let params = {
                id : postId,
                time : timeCreated,
                title : title,
                description : description,
            }

            fb.api("/" + postId + "/attachments", function (err2, data2)
            {
                const postData = data2.data[0].media;

                if(Object.keys(postData).length !== 0) {
                    attachments = 1;
                    imageSrc = postData.image.src;
                    imageHeight = postData.image.height;
                    imageWidth = postData.image.width;
                }
                else {
                    attachments = 0;
                }

                const sqlInsert =
                    "INSERT INTO social_media " +
                    "(post_id, time, story, message, attachments, image_src, image_height, image_width) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?) ;"


                db.query(sqlInsert, [params.id, params.time, params.title, params.description,
                        attachments, imageSrc, imageHeight, imageWidth],
                    (err, result) => {
                        console.log(result);
                    });
            });
        })
    });
})

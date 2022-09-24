<?php
    include_once "connection.php";

    $sql = "select * from site_content 	where element LIKE 'aboutDetails%';";
    $result = $conn->query($sql);

    $data = array();

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $element = $row["element"];
            $value = $row["value"];

            $temp = array($element => $value);
            $data = array_merge($data, $temp);
        }
    }

    function showElement($data, $elementName, $tag, $extraBeforeContent = '', $extraAfterContent = '') {
        $openingTag = ($tag == ' ') ? ' ' : "<$tag>";
        $closingTag = ($tag == ' ') ? ' ' : "</$tag>";

        if($data[$elementName] != " ")
            echo $openingTag.$extraBeforeContent.$data[$elementName].$extraAfterContent.$closingTag;
    }
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <title>About App</title>
        <link rel="icon" href="./images/FooterLogo.svg" type="image/x-icon">
        <meta charset="UTF-8" />
        <meta name="description" content="About App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <!-- Google Fonts -->
        <!-- Comfortaa; weight: 300 -->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">

        <!-- Poppins; weight: 700 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Poppins:wght@700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="css/AboutAppStyle.css" />

        <noscript>
            <meta http-equiv="refresh" content="0; url=" />
        </noscript>

    </head>

    <body style="margin:0; padding: 0;">

        <header class="AboutAppHeader">
            <div>
                <h1>About App</h1>
            </div>
        </header>

        <main class="AboutAppPage">
            <div>
                <div class="AboutAppPage__writings">
                    <div>
                        <?php echo $data["aboutDetailsDescription"] ?>
                    </div>
                </div>

                <div>
                    <img src="admin/public/Images/<?php echo $data["aboutDetailsImage"] ?>" alt="Image from app" />
                </div>
            </div>

            <a href="index.php">
                <button>
                    Go back
                </button>
            </a>

        </main>
    </body>
</html>

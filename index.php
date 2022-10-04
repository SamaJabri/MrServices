<?php
    // Site Content
    include_once "connection.php";

    $sql = "SELECT * FROM site_content";
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

    // Social Media
    function showElement($data, $elementName, $tag, $extraBeforeContent = '', $extraAfterContent = '') {
        $openingTag = ($tag == ' ') ? ' ' : "<$tag>";
        $closingTag = ($tag == ' ') ? ' ' : "</$tag>";

        if($data[$elementName] != " ")
            echo $openingTag.$extraBeforeContent.$data[$elementName].$extraAfterContent.$closingTag;
    }

    $sqlSocials = "SELECT * FROM social_media order by id desc limit 6";
    $resultSocials = $conn->query($sqlSocials);

    ?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Mr Services</title>
        <link rel="icon" href="./images/FooterLogo.svg" type="image/x-icon">
        <meta name="description" content="Mr Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

        <!-- Google Fonts -->
        <!-- Comfortaa; weight: 300 -->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">

        <!-- Poppins; weight: 700 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Poppins:wght@700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="css/HomePageStyle.css" />
        <link rel="stylesheet" href="css/AboutAppStyle.css" />
        <link rel="stylesheet" href="css/FeaturesStyle.css" />
        <link rel="stylesheet" href="css/ScreenshotStyle.css" />
        <link rel="stylesheet" href="css/HowItWorksStyle.css" />
        <link rel="stylesheet" href="css/DownloadStyle.css" />
        <link rel="stylesheet" href="css/TestimonialStyle.css" />
        <link rel="stylesheet" href="css/PricingPlanStyle.css" />
        <link rel="stylesheet" href="css/ContactUsStyle.css" />
        <link rel="stylesheet" href="css/FooterStyle.css" />

        <!-- Intl-tel-input plugin for phone number entry -->
        <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>

        <noscript>
            <meta http-equiv="refresh" content="0; url=" />
        </noscript>

        <script src = "js/TransitionSections.js"></script>
<!--        <script src = "ReviewsSlideShow.js"></script>-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.5/xlsx.min.js"></script>

    </head>

    <body>
        <script type="text/javascript" src="js/SearchFunction.js"></script>

        <!-- Website Visits -->
        <script async src="https://api.countapi.xyz/hit/mr-service.co/visits?callback=websiteVisits"></script>
        <script>
            function websiteVisits(response) {
                document.querySelector("#visits").textContent = response.value;
            }
        </script>

        <section class = "curve Intro">

            <header class = "header">

                <nav>
                    <img class = "logo" src="admin/public/Images/<?php echo $data["headerImage"] ?>" alt = "logo" />

                    <input type = "checkbox" id = "check" >

                    <ul class = "options" id="options">
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#">
                                Home
                            </a>
                        </li>
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#About">
                                About
                            </a>
                        </li>
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#Feature">
                                Feature
                            </a>
                        </li>
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#Pricing">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#Review">
                                Review
                            </a>
                        </li>
                        <li>
                            <div class = "onHover"></div>
                            <a href = "#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <label for = "check" class = "checkButton">
                        <i class = "fas fa-bars"></i>
                    </label>

                    <ul class = "socialMediaIcons">
                        <li>
                            <a target="_blank" href="<?php echo $data["linkedInLink"] ?>">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="<?php echo $data["instagramLink"] ?>">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>

                        <li>
                            <a href="<?php echo $data["facebookLink"] ?>"
                               style="text-decoration: none;" target="_blank">
                                <i class="fa-brands fa-facebook-square"></i>
                            </a>
                        </li>

                        <li>
                            <a href="<?php echo $data["youtubeLink"] ?>" target="_blank">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="<?php echo $data["twitterLink"] ?>">
                                <i class="fa-brands fa-twitter-square"></i>
                            </a>
                        </li>
                    </ul>
                </nav>

            </header>

            <div class = "section01">

                <div class = "section01Contents">
                    <?php
                        showElement($data, "sectionOneHeader", "h1");
                    ?>
                    <?php
                        showElement($data, "sectionOneDescription", "p");
                    ?>

                    <div class="searchBox">

                        <input class="searchInput" type="text" name="" id="searchItem"  style="outline: none"
                               placeholder="<?php echo $data["sectionOneSearch"] ?>">

                           <button onclick="search()">
                               <i class="fa fa-search"></i>
                           </button>

                    </div>

                </div>
                <img src="admin/public/Images/<?php echo $data["sectionOneImage"] ?>" alt = "Workers Image">

            </div>

        </section>

        <section class = "AboutApp animate" id = "About">

            <div class = "AboutTextDiv">

                <?php
                    showElement($data, "aboutHeader", "h2");
                ?>

                <?php
                    showElement($data, "aboutSubHeader", "h1");
                ?>

                <?php
                    showElement($data, "aboutDescription", "p");
                ?>

                <div class = "siteNumbers">

                    <div class = "activeInstalls">
                        <h1 id="installs">
                            <?php echo $data["aboutInstallations"] ?>
                        </h1>
                        <label>Active Installs</label>
                    </div>

                    <div class = "clientsReview" >
                        <h1 id="visits"></h1>
                        <label>Total Visits</label>
                    </div>

                </div>

                <a href="./AboutApp.php">
                    <button class = "section02ReadMore">Read More</button>
                </a>
            </div>
            <img  src = "admin/public/Images/<?php echo $data["aboutImage"] ?>" alt = "Screenshots from app">

        </section>

        <section class = "animate" id = "Feature">

            <div class = "featuresDiv">
                <?php
                    showElement($data, "featuresHeader", "h2");
                ?>
                <?php
                    showElement($data, "featuresSubHeader", "h1");
                ?>

                <div class = "features animate">

                    <?php
                        if($data["firstFeatureHeader"] == " " && $data["firstFeatureDescription"] == " ") {
                            echo '<style>#firstFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="firstFeature">
                        <img src="admin/public/Images/<?php echo $data["firstFeatureImage"] ?>" alt = "Feature01 image">

                        <?php
                            showElement($data, "firstFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "firstFeatureDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["secondFeatureHeader"] == " " && $data["secondFeatureDescription"] == " ") {
                            echo '<style>#secondFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="secondFeature">
                        <img src="admin/public/Images/<?php echo $data["secondFeatureImage"] ?>" alt = "Feature02 image">

                        <?php
                            showElement($data, "secondFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "secondFeatureDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["thirdFeatureHeader"] == " " && $data["thirdFeatureDescription"] == " ") {
                            echo '<style>#thirdFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="thirdFeature">
                        <img src="admin/public/Images/<?php echo $data["thirdFeatureImage"] ?>" alt = "Feature03 image">

                        <?php
                            showElement($data, "thirdFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "thirdFeatureDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["fourthFeatureHeader"] == " " && $data["fourthFeatureDescription"] == " ") {
                            echo '<style>#fourthFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="fourthFeature">
                        <img src="admin/public/Images/<?php echo $data["fourthFeatureImage"] ?>" alt = "Feature04 image">

                        <?php
                            showElement($data, "fourthFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "fourthFeatureDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["fifthFeatureHeader"] == " " && $data["fifthFeatureDescription"] == " ") {
                            echo '<style>#fifthFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="fifthFeature">
                        <img src="admin/public/Images/<?php echo $data["fifthFeatureImage"] ?>" alt = "Feature05 image">

                        <?php
                            showElement($data, "fifthFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "fifthFeatureDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["sixthFeatureHeader"] == " " && $data["sixthFeatureDescription"] == " ") {
                            echo '<style>#sixthFeature { display:none;}</style>';
                        }
                    ?>
                    <div id="sixthFeature">
                        <img src="admin/public/Images/<?php echo $data["sixthFeatureImage"] ?>" alt = "Feature06 image">

                        <?php
                            showElement($data, "sixthFeatureHeader", "h3");
                        ?>

                        <?php
                            showElement($data, "sixthFeatureDescription", "p");
                        ?>
                    </div>

                </div>
            </div>

        </section>

        <section class = "Screenshot animate" id="Screenshot">

            <div class = "ScreenshotTextDiv">
                <?php
                    showElement($data, "screenshotHeader", "h2");
                ?>

                <?php
                    showElement($data, "screenshotSubHeader", "h1");
                ?>

                <?php
                    showElement($data, "screenshotDescription", "p");
                ?>

                <ul>

                    <?php
                        $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                        showElement($data, "screenshotListItemOne", "li", $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemTwo", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemThree", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemFour", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemFive", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemSix", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemSeven", "li",  $extraBeforeContent = $icon);
                        showElement($data, "screenshotListItemEight", "li",  $extraBeforeContent = $icon);

                    ?>
                </ul>

<!--                <button class = "section04ReadMore">Read More</button>-->
            </div>

            <div class = "sidePic">
                <img src="admin/public/Images/<?php echo $data["screenshotImage"] ?>" alt = "Some photos from app">

                <div class = "Ellipses">
                    <img src = "images/PurpleEllipse.svg" alt = "Ellipse">
                    <img src = "images/PurpleEllipse.svg" alt = "Ellipse">
                    <img src = "images/PurpleEllipse.svg" alt = "Ellipse">
                    <img src = "images/PurpleEllipse.svg" alt = "Ellipse">
                    <img src = "images/PurpleEllipse.svg" alt = "Ellipse">
                </div>

            </div>


        </section>

        <section class = "HowItWorks" id="HowItWorks">

            <div class = "HowItWorksDiv animate">

                <?php
                    showElement($data, "howItWorksHeader", "h2");
                ?>

                <?php
                    showElement($data, "howItWorksSubHeader", "h1");
                ?>

                <div class = "Steps">

                    <?php
                        if($data["firstStepHeader"] == " " && $data["firstStepDescription"] == " ") {
                            echo '<style>#firstStep { display:none;}</style>';
                        }
                    ?>
                    <div class = "step" id="firstStep">
                        <span>
                            <img src="admin/public/Images/<?php echo $data["firstStepImage"] ?>" alt = "Settings Icon"
                            />
                        </span>

                        <?php
                            showElement($data, "firstStepHeader", "h5");
                        ?>
                        <?php
                            showElement($data, "firstStepDescription", "p");
                        ?>
                    </div>

                    <?php
                        if($data["secondStepHeader"] == " " && $data["secondStepDescription"] == " ") {
                            echo '<style>#secondStep { display:none;}</style>';
                        }
                    ?>
                    <div class = "step" id="secondStep">
                        <span>
                            <img src="admin/public/Images/<?php echo $data["secondStepImage"] ?>" alt="User Icon" />
                        </span>

                        <?php
                            showElement($data, "secondStepHeader", "h5");
                        ?>
                        <?php
                            showElement($data, "secondStepDescription", "p");
                        ?>

                    </div>

                    <?php
                        if($data["thirdStepHeader"] == " " && $data["thirdStepDescription"] == " ") {
                            echo '<style>#thirdStep { display:none;}</style>';
                        }
                    ?>
                    <div class = "step" id="thirdStep">
                        <span>
                            <img src="admin/public/Images/<?php echo $data["thirdStepImage"] ?>" alt="Check Icon" />
                        </span>

                        <?php
                            showElement($data, "thirdStepHeader", "h5");
                        ?>
                        <?php
                            showElement($data, "thirdStepDescription", "p");
                        ?>
                    </div>

                </div>

            </div>

        </section>

        <section class = "Download animate" id="Download">
            <img src="admin/public/Images/<?php echo $data["downloadImage"] ?>" alt = "Sign in screenshot from app"/>

            <div class = "DownloadTextDiv">
                <?php
                    showElement($data, "downloadHeader", "h2");
                ?>
                <?php
                    showElement($data, "downloadSubHeader", "h1");
                ?>
                <?php
                    showElement($data, "downloadDescription", "p");
                ?>

                <div class="socialButtons">
                    <a href="<?php echo $data["downloadGooglePlayLink"] ?>"
                       class="appButton" target="_blank">
                        <i class="fab fa-google-play"></i>
                        <p>Get it on <br/> <span class="bigText">Google Play</span></p>
                    </a>

                    <a href="<?php echo $data["downloadAppleStoreLink"] ?>"
                       class="appButton" target="_blank">
                        <i class="fab fa-apple"></i>
                        <p>Also available on <br/> <span class="bigText">App Store</span></p>
                    </a>
                </div>
            </div>

        </section>

        <section class = "PricingPlan animate" id = "Pricing">
            <?php
                if($data["comingSoon"] == "true") {
                    echo "
                        <div class=\"comingSoon\">
                            <p>Coming Soon</p>
                            <p>Coming Soon</p>
                        </div>
            
                        <div class=\"comingSoonResponsive\">
                            <p>Coming</p><p> Soon</p>
                            <p>Coming</p><p> Soon</p>
                        </div>
                    ";
                    echo '<style>
                            .monthlyOrYearly,
                            .monthlyPlans,
                            .yearlyPlans { 
                                filter : blur(10px);
                            }
                         </style>';
                }
            ?>


            <div class="PricingPlanDiv">
                <?php
                    showElement($data, "pricingPlanHeader", "h2");
                ?>

                <?php
                    showElement($data, "pricingPlanSubHeader", "h1");
                ?>

                <div class = "monthlyOrYearly">
                    <input type = "radio" id = "monthly" class = "monthly" checked>
                    <label class = "line" for = "monthly"
                           style = "border-bottom-right-radius:0; border-top-right-radius:0;">
                        Monthly
                    </label>

                    <input type = "radio" id = "yearly">
                    <label class = "label2" for = "yearly"
                           style = "border-bottom-left-radius:0; border-top-left-radius:0;">
                        Yearly
                    </label>
                </div>

                <div class = "monthlyPlans" id = "monthlyPlans">
                    <?php
                        if($data["firstPlanNameMonthly"] == " ") {
                            echo '<style>#firstPlanMonthly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="firstPlanMonthly">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "firstPlanNameMonthly", "h6");
                            ?>

                            <?php
                                showElement($data, "firstPlanDescriptionMonthly", "p");
                            ?>

                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "firstPlanCurrencyMonthly", "sup");
                                ?>
                                <?php
                                    showElement($data, "firstPlanPriceMonthly", ' ');
                                ?>
                                <sub>/ month</sub>
                            </p>
                            <ul>
                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "firstPlanItem".$i."Monthly","li",
                                            '', $icon);
                                    }
                                ?>

                            </ul>

                            <button>Get Started</button>
                        </div>
                    </div>

                    <?php
                        if($data["secondPlanNameMonthly"] == " ") {
                            echo '<style>#secondPlanMonthly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="secondPlanMonthly ">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "secondPlanNameMonthly", "h6");
                            ?>

                            <?php
                                showElement($data, "secondPlanDescriptionMonthly", "p");
                            ?>
                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "secondPlanCurrencyMonthly", "sup");
                                ?>
                                <?php
                                    showElement($data, "secondPlanPriceMonthly", ' ');
                                ?>
                                <sub>/ month</sub>
                            </p>
                            <ul>

                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "secondPlanItem".$i."Monthly","li",
                                            '', $icon);
                                    }
                                ?>
                            </ul>
                            <button>Get Started</button>
                        </div>
                    </div>

                    <?php
                        if($data["thirdPlanNameMonthly"] == " ") {
                            echo '<style>#thirdPlanMonthly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="thirdPlanMonthly ">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "thirdPlanNameMonthly", "h6");
                            ?>

                            <?php
                                showElement($data, "thirdPlanDescriptionMonthly", "p");
                            ?>
                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "thirdPlanCurrencyMonthly", "sup");
                                ?>
                                <?php
                                    showElement($data, "thirdPlanPriceMonthly", ' ');
                                ?>
                                  <sub> / month</sub>
                            </p>
                            <ul>
                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "thirdPlanItem".$i."Monthly","li",
                                            '', $icon);
                                    }
                                ?>
                            </ul>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>

                <div class = "yearlyPlans" id = "yearlyPlans" style = "display: none;">
                    <?php
                        if($data["firstPlanNameYearly"] == " ") {
                            echo '<style>#firstPlanYearly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="firstPlanYearly">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "firstPlanNameYearly", "h6");
                            ?>

                            <?php
                                showElement($data, "firstPlanDescriptionYearly", "p");
                            ?>
                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "firstPlanCurrencyYearly", "sup");
                                ?>
                                <?php
                                    showElement($data, "firstPlanPriceYearly", ' ');
                                ?>
                                <sub> / year</sub>
                            </p>
                            <ul>

                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "firstPlanItem".$i."Yearly","li",
                                            '', $icon);
                                    }
                                ?>
                            </ul>

                            <button>Get Started</button>
                        </div>
                    </div>

                    <?php
                        if($data["secondPlanNameYearly"] == " ") {
                            echo '<style>#secondPlanYearly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="secondPlanYearly">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "secondPlanNameYearly", "h6");
                            ?>

                            <?php
                                showElement($data, "secondPlanDescriptionYearly", "p");
                            ?>
                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "secondPlanCurrencyYearly", "sup");
                                ?>
                                <?php
                                    showElement($data, "secondPlanPriceYearly", ' ');
                                ?>
                                <sub> / year</sub>
                            </p>
                            <ul>

                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "secondPlanItem".$i."Yearly","li",
                                            '', $icon);
                                    }
                                ?>

                            </ul>
                            <button>Get Started</button>
                        </div>
                    </div>

                    <?php
                        if($data["thirdPlanNameYearly"] == " ") {
                            echo '<style>#thirdPlanYearly { display:none;}</style>';
                        }
                    ?>
                    <div class = plan id="thirdPlanYearly">
                        <div class = "planHeader">
                            <?php
                                showElement($data, "thirdPlanNameYearly", "h6");
                            ?>

                            <?php
                                showElement($data, "thirdPlanDescriptionYearly", "p");
                            ?>
                        </div>
                        <div class = "planBody">
                            <p>
                                <?php
                                    showElement($data, "thirdPlanCurrencyYearly", "sup");
                                ?>
                                <?php
                                    showElement($data, "thirdPlanPriceYearly", ' ');
                                ?>
                                <sub> / year</sub>
                            </p>

                            <ul>

                                <?php
                                    $icon = '<i class="fa fa-check" aria-hidden="true"></i>';
                                    for($i = 1; $i <= 8; $i++) {
                                        showElement($data, "thirdPlanItem".$i."Yearly","li",
                                            '', $icon);
                                    }
                                ?>
                            </ul>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class = "Testimonial animate" id = "Review">
            <div class = "TestimonialDiv">

                <?php
                    showElement($data, "testimonialsHeader", "h2");
                ?>

                <?php
                    showElement($data, "testimonialsSubHeader", "h1");
                ?>

                <div class = "clients" id="clients">

                    <?php if($resultSocials->num_rows > 0) {
                        while($row = $resultSocials->fetch_assoc()) {
                            echo "
                                <div class = \"client social-media-post\">
    
                                    <div class=\"social-media-post__image\">
                                        <img src={$row["image_src"]} 
                                        height={$row["image_height"]} width={$row["image_width"]} />
                                    </div>
            
                                    <div class=\"social-media-post__description\">
            
                                        <h3>{$row["story"]}</h3>
                                        <p>{$row["message"]}</p>
                                    </div>
            
                                    <a href={$data["facebookLink"]} target='_blank' class='social-media-post__read-more' >
                                    Read more
                                    </a>
            
                                </div>
                            ";
                        }
                    }
                    ?>
<!--                    <div class = "client social-media-post">-->
<!---->
<!--                        <div class="social-media-post__image">-->
<!--                            <img src="images/Client1.jpg" height="512" width="512" />-->
<!--                        </div>-->
<!---->
<!--                        <div class="social-media-post__description">-->
<!---->
<!--                            <h3>title</h3>-->
<!--                            <p>message</p>-->
<!--                        </div>-->
<!---->
<!--                    </div>-->
<!---->
                </div>

                <div class = "arrows">
                    <button id = "left" onclick="buttonClick(2)"><i class="fa-solid fa-angle-left"></i></button>
                    <button id = "right" onclick="buttonClick(1)"><i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </section>

        <section class = "ContactUs animate" id = "Contact">
            <div class = "ContactUsDiv">
                <?php
                    showElement($data, "contactHeader", "h2");
                ?>

                <?php
                    showElement($data, "contactSubHeader", "h1");
                ?>

                <?php
                    showElement($data, "contactDescription", "p");
                ?>

                <form class = "contactForm" id="contactForm" autocomplete="on" method="post"
                      onsubmit="process(event) ? sendMail() : alert('Please provide a correct number format'); return false;">
                    <div class = "nameAndEmail">
                        <label for = "name" hidden></label>
                        <input type = "text" placeholder = "Your name"
                               name = "name" id = "name" required>

                        <label for = "surname" hidden></label>
                        <input type = "text" placeholder = "Your surname"
                               name = "surname" id = "surname" required>
                    </div>

                    <div class = "nameAndEmail">
                        <label for = "email" hidden></label>
                        <input type = "email" placeholder = "Your email"
                               name = "email" id = "email" required>

                        <label for = "number" hidden></label>
                        <input type = "tel" placeholder = "Your phone number"
                               name = "number" id = "number" required>
                    </div>

                    <input name = "honeypot" style = "display: none" tabindex = "-1" autocomplete = "off">

                    <label for = "subject" hidden></label>
                    <input type = "text" placeholder = "Subject"
                           name = "subject" id = "subject" required>

                    <label for = "message"></label>
                    <textarea style="font-size: 1.3rem"
                            id = "message" placeholder="Your Message" name = "message"></textarea>


                    <input type="submit" value="Send Message">
                </form>
            </div>
        </section>

        <section class = "footer" id="Footer">
            <div class = "footerDiv">
                <img src="admin/public/Images/<?php echo $data["footerImage"] ?>" alt = "Mr Services mini logo for footer">

                <div class = "bellowLogo">
                    <?php
                        showElement($data, "footerDescription", "p");
                    ?>

                    <div class = "middleRow">
                        <a href = "#About">
                            <button>About Us</button>
                        </a>

                        <a href = "#Contact">
                            <button>Contact Us</button>
                        </a>

                        <a href="PrivacyPolicy.html" target="_blank">
                            <button id="privacyAndPolicyButton">Privacy Policy</button>
                        </a>

                        <a href="TermsAndConditions.html" target="_blank">
                            <button id="termsAndConditionsButton">Terms & Conditions</button>
                        </a>

                    </div>

                    <div class = "rightRow">
                        <a href = "<?php echo $data['footerAddressLink']?>" target="_blank">
                            <img src = "images/LocationMark.svg" alt = "Location Mark">
                            <?php
                                showElement($data, "footerAddress", "p");
                            ?>
                        </a>

                        <a href = "<?php echo "tel:".$data['footerPhone']?>">
                            <img src = "images/Phone.svg" alt = "Phone">
                            <?php
                                showElement($data, "footerPhone", "p");
                            ?>
                        </a>

                        <a href = "<?php echo "mailto:".$data['footerEmail']."?subject = Feedback&body = Message" ?>">
                            <img src = "images/Mail.svg" alt = "Mail Envelope">
                            <?php
                                showElement($data, "footerEmail", "p");
                            ?>
                        </a>

                        <div class = "socialMediaFooter">
                            <ul class = "socialMediaIcons">
                                <li>
                                    <a target="_blank" href="<?php echo $data["linkedInLink"] ?>">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" href="<?php echo $data["instagramLink"] ?>">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="<?php echo $data["facebookLink"] ?>"
                                       style="text-decoration: none;" target="_blank">
                                        <i class="fa-brands fa-facebook-square"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="<?php echo $data["youtubeLink"] ?>" target="_blank">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" href="<?php echo $data["twitterLink"] ?>">
                                        <i class="fa-brands fa-twitter-square"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            <footer></footer>

        </section>

        <!-- JS Files that need to be located here. -->
        <script type="text/javascript" src="js/reviews.js"></script>
        <script type="text/javascript" src="js/ShowPlans.js"></script>
        <script type="text/javascript" src="js/PhoneNumber.js"></script>
<!--        <script src="js/bundle.js"></script>-->

        <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js">
        </script>

        <script type="text/javascript" src="js/ContactForm.js"></script>

    </body>
</html>

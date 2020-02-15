<?php
    if(isset($_POST['contact'])){

            $error = NULL;
            $object = NULL;
            $email = NULL;
            $message = NULL;
            
            if(isset($_POST['object'])) {
                $object = $_POST['object'];
                if(isset($_POST['email'])) {
                    
                    if ( preg_match ( " /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ " , $_POST['email'] ) )
                    {
                        $email = $_POST['email'];
                        if(isset($_POST['message'])) {
                            $message = $_POST['message'];
                        }else {
                            $error = "Vous devez saisir un texte";
                        }
                    }else{
                        $error = "Votre adresse email n'est pas valide";
                    }
                } else {
                    $error = "Vous devez saisir votre email";
                }
            } else {
                $error = "Vous devez saisir un objet";
            }

            $entete  = 'MIME-Version: 1.0' . "\r\n";
            $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $entete .= 'From: ' . $email . "\r\n";
            
            $form_mail = '<h1>Message envoyé depuis la page Contact de antoinetardivel.fr</h1>
            <p><b>Objet : </b>' . $object . '<br>
            <b>Email : </b>' . $email . '<br>
            <b>Message : </b>' . $message . '</p>';


            if(!isset($error)) {
                $retour = mail('tardivelantoine@gmail.Com', 'Envoi depuis page Contact', $form_mail, $entete);
            }

            /*$entete  = 'MIME-Version: 1.0' . "\r\n";
            $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $entete .= 'From: ' . $_POST['email'] . "\r\n";

            

            $message = '<h1>Message envoyé depuis la page Contact de antoinetardivel.fr</h1>
                                <p><b>Name : </b>' . $_POST['name'] . '<br>
                                <b>Email : </b>' . $_POST['email'] . '<br>
                                <b>Message : </b>' . $_POST['message'] . '</p>';

            $retour = mail('destinataire@free.fr', 'Envoi depuis page Contact', $message, $entete);
            if($retour) {
                echo '<p style="color: white;font-family: Roboto;font-style: italic;font-weight: 400;font-size: 2.5vw;">Votre message a bien été envoyé§</p>';
            }*/
    }
?>
<!DOCTYPE html>
<html>
	<html lang="fr">

<head>
	<meta charset="UTF-8">
 	<title>Antoine Tardivel</title>
    <link rel="stylesheet" href="./style.css">
    <script type="text/javascript" src="./script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
    <link rel="icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
    </head>

<body>
    <div class="margehaut"></div>
        <div class="pagecontent">
            <div class="margeg"></div>

            <!-- cadre -->

            <div class="titrelogo" onclick='window.location.href="index.html"'>
                <img src="./images/logoblanc.png" alt="Logo Antoine Tardivel" class="imglogo">
                <div class="NomTitre">
                    <h1 class="NomTitre1">Antoine</h1>
                    <h1 class="NomTitre2">Tardivel</h1>
                </div>
            </div>
            <div class="socialmedias">
                <svg aria-hidden="true" onclick="window.open('https://www.behance.net/antoinetardivel' + location.search)" focusable="false" data-prefix="fab" data-icon="behance" class="svgbehance gris" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path></svg>
                <svg aria-hidden="true" onclick="window.open('https://www.instagram.com/tardiwave.jpg/' + location.search)" focusable="false" data-prefix="fab" data-icon="instagram" class="svginsta gris" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                <svg class="linkedin gris" onclick="window.open('https://www.linkedin.com/in/antoine-tardivel/' + location.search)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                <P class="langue gris">FR</P>
            </div>
            <img src="./images/iconpw.png" onclick="window.open('http://www.poeticwave.fr' + location.search)" alt="" class="iconpw">

            <!-- <div class="menu">
                <div class="barremenu" onclick="displaymenu()"></div>
                <div class="espacemenu" onclick="displaymenu()"></div>
                <div class="barremenu" onclick="displaymenu()"></div>
            </div> -->

            <!-- content -->
            <div class="ongletsbox" id="ongletsbox">
                <div class="myform">
                    <div id="after_submit">
                        <?php
                            if(isset($error)) {
                                echo '<div class="error">' . $error . '</div>';
                            }else if(isset($_POST['contact'])) {
                                echo '<div class="succes">Votre message à bien été envoyé</div>' . $retour;
                            }
                        ?>
                    </div>
                    <form id="contact_form" action="contact.php" method="POST">
                        <div class="cases">
                            <input required placeholder="Object" id="object" class="input" name="object" type="text" value="" size="30" />
                        </div>
                        <div class="cases">
                            <input required placeholder="Your email adress" id="email" class="input" name="email" type="text" value="" size="30" />
                        </div>
                        <div class="cases">
                            <textarea required placeholder="Write your message!" id="message" class="input" name="message" rows="7" cols="30"></textarea>
                        </div>
                            
                        <input id="submit_button" type="submit" name="contact" value="Send!" />
                    </form>
                </div>
            </div>
            <p class="backpdf" onclick='window.location.href="index.html"'>&lt BACK</p>
            
            <div class="marged"></div>
        </div>
    <div class="margebas"></div>

</body>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>
<body>
    <?php
    
    $conversion_rates = array(
        "FUSD" => array(
            "TUSD" => 1.0, 
            "TCAD" => 1.29, 
            "TEUR" => 0.91  
        ),
        "FCAD" => array(
            "TUSD" => 0.78, 
            "TCAD" => 1.0,  
            "TEUR" => 0.71  
        ),
        "FEUR" => array(
            "TUSD" => 1.10, 
            "TCAD" => 1.41, 
            "TEUR" => 1.0   
        )
    );

  
    $from_value = "";
    $to_value = "";

    
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
       
        if (isset($_GET["from_value"]) && isset($_GET["from_currency"]) && isset($_GET["to_currency"])) {
            $from_value = ($_GET["from_value"]); 
            $from_currency = $_GET["from_currency"];
            $to_currency = $_GET["to_currency"];

            
            if (isset($conversion_rates[$from_currency]) && isset($conversion_rates[$from_currency][$to_currency])) {
                $conversion_rate = $conversion_rates[$from_currency][$to_currency];
                $to_value = $from_value * $conversion_rate;
            } 
            
           
            $from_value = "";
        } 
    }
    ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="GET">
        <table>
            <tr>
                <td>From:</td>
                <td><input type="text" name="from_value" value="<?php echo $from_value; ?>" /></td>
                <td>Currency:</td>
                <td>
                    <select name="from_currency">
                        <option value="FUSD">USD</option>
                        <option value="FCAD">CAD</option>
                        <option value="FEUR">EUR</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>To:</td>
                <td><input type="text" name="to_value" value="<?php echo $to_value; ?>" readonly /></td>
                <td>Currency:</td>
                <td>
                    <select name="to_currency">
                        <option value="TUSD">USD</option>
                        <option value="TCAD">CAD</option>
                        <option value="TEUR">EUR</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><input type="submit" value="Convert" /></td>
            </tr>
        </table>
    </form>
</body>
</html>

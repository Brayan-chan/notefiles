<?php
class Views{

    public function getView($pagina, $vista, $data="")
    {
        if ($pagina == "principal") {
            $vista = "Views/".$vista.".php";
        }else{
            $vista = "Views/".$pagina."/".$vista.".php";
        }
        require $vista;
    }
}

?>
function logar()
{
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if(login == "admin" && senha == "admin")
    {
        //alert("sucesso")
        window.location = "index.html"

        
    }

    else
    {
        alert("senha incorreta")
        
    
         
    }
}
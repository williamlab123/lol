
  function Modo()
  {
    const btnModo = document.querySelector("#modo")

    if(btnModo.onclick)
    {
      window.location = "index_claro.html"
     
    }
  }

  function Modo2()
  {
    const btnModo = document.querySelector("#modo")

    if(btnModo.onclick)
    {
      window.location = "index.html"
     
    }
  }


  function post()
  {
     
    const text = document.querySelector("input")
     const text_value = text.value
      document.querySelector("#p").innerHTML = text_value;
       document.querySelector("#p").innerHTML = text_value;


 
  }

  function chat()
  {
    var btn_send = document.getElementById('post')




    if(btn_send.onclick)
    {

        post();       
    }

    else
    {
        alert('erro')
    }
    
  }



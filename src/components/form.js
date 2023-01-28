import React from 'react'

function formulario()  {
    return(
      
        <form>  
         
       
          <label>
            Nome:
            <input type="text" name="name" />
          </label> <br/>
          <label>
            Login :
            <input type="text" name="name" />
          </label><br/>
          <label>
            Senha:
            <input type="password" name="name" />
          </label><br/>
          
          <select id="Elo" name="rankedelo">
             <option value="diamante">DIAMANTE</option>
               <option value="esmeralda">ESMERALDA</option>
                 <option value="platina">PLATINA</option>
          </select>
            <div>
          <input className="Envio" type="submit" value="Enviar" />
        </div>
      
        </form>
        
    )
}

export default formulario
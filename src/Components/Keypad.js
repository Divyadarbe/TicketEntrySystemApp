import React, {useState} from 'react';

const Keypad =()=>{
    const [input, setInput] = useState('');
    const buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const [ticketCounter,setTicketCounter]=useState(0);
    const [tickets,setTickets]=useState([]);

    const addTicket=(event)=>{

        event.preventDefault();
        let map = {};
        if(ticketCounter<5){
            if(input.match(/^((?!(0))[0-9]{6})$/g)){
                if(tickets.length===0){
                    setTickets([...tickets,{
                        id:tickets.length,
                        value:input
                    }]);

                    setTicketCounter(ticketCounter+1);
                }
               else{

                   for(let i = 0; i < tickets.length; i++) {
                   if(map[tickets[i]]) {
                        // tickets.push(input);
                         setTickets([...tickets,{
                             id:tickets.length,
                             value:input
                         }]);
                         setTicketCounter(ticketCounter+1);
                     }
                     else{
                         console.log("Cannot create duplicate ticket number");
                     }
                    }
                }
                
            }
            else{
                console.log("Ticket number shouldn't start with 0!! It should contain 6 digits");
            }
        }
        else{
            console.log("exceeded the limit!");
        }
       
        
    }

    return(
        <div style={style.keypadContainer}>

            <div>{input}</div>

            <div>
                <button onClick={()=>{setInput(input.substr(0,input.length - 1))}}>Clear</button>
                <button onClick={()=>setInput("")} value="">AC</button>
            </div>

            <div>
                {
                    buttons.map((b,index)=><button  key={index} value={b} onClick={(event)=>setInput(input + event.target.value)}>{b}</button>)
                }
            </div>

            <div>
            <button onClick={addTicket}
                        value="ADD TICKET">ADD TICKET</button>
            </div>
            <div>
            <ul>
        {
        tickets.map(item => (
          <li key={item.id}>{item.value}
          <button onClick={()=>{
              const r=tickets.splice(item.id, 1);
              setTickets([...tickets,{r}]);
             }}>Delete</button>
          </li>
        ))}
      </ul>
      </div>

      <div>
          <button onClick={()=>setInput(String(Math.floor(100000 + Math.random() * 900000)))}>Generate</button>
      </div>

        </div>
    )
}

const style={
    keypadContainer:{
        display:'flex',
        padding:20
    }
}
export default Keypad;
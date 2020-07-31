import React, {useState} from 'react';


const Keypad =()=>{
    const [input, setInput] = useState('');
    const buttons = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const [ticketCounter,setTicketCounter]=useState(0);
    const [tickets,setTickets]=useState([]);
    const[a, setA]=useState(new Set());

    const addTicket=(event)=>{

        event.preventDefault();
        
        if(ticketCounter<5){
            if(input.match(/^((?!(0))[0-9]{6})$/g)){
                
                    if(!a.has(input)){
                        a.add(input);
                        setTickets([...tickets,{
                            id:tickets.length,
                            value:input
                        }]);
                        setTicketCounter(ticketCounter+1);
                     }
                     else{
                        alert("Cannot create duplicate ticket number!!");  

                     }  
            }
            else{
                alert("Ticket number shouldn't start with 0!! It should contain 6 digits");
            }
        }
        else{
            alert("You can create only 5 tickets!!");
        }
       
        
    }

    return(
        <div style={style.container}>
           <div style={style.row1}>

                <div style={style.keypadContainer}>
                    <div style={style.input} >{input}</div>
                    <div>
                    {
                    buttons.map((b,index)=><button style={style.buttonWrapper} key={index} value={b} onClick={(event)=>setInput(input + event.target.value)}>{b}</button>)
                    }
                    </div>
                    <div>
                        <button style={style.buttonWrapper}  onClick={()=>{setInput(input.substr(0,input.length - 1))}}><i class="fa fa-trash"></i></button>
                        <button  style={style.buttonWrapper} onClick={()=>setInput("")} value=""><i class="fa fa-close"></i> </button>
                    </div>
                    <div>
                         <button style={style.addButton} onClick={addTicket} value="ADD TICKET"><i class="fa fa-plus-square" aria-hidden="true"></i>
ADD TICKET</button>
                    </div>
                </div>

                <div style={style.autogenerateContainer}>
                
                <button style={style.button}><img style={style.generateImage} src="data:image/png;base64,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" alt="Auto generate image" onClick={()=>setInput(String(Math.floor(100000 + Math.random() * 900000)))} /></button>     
                <div style={style.topText}> Click the below icon to generate random ticket number</div>
                <div style={style.bottomText}>Ticket number range 100000-999999</div>
                </div>

           </div>

           <div style={style.row2}>
               <div style={style.t1}><p>Your selected tickets are: </p></div>
               <div style={style.t2}>
               {
             tickets.map((item,i) => (
                <div style={style.ticket}>
                 <p key={i} onClick={()=>{
                    tickets.splice(i, 1);
                    setTickets(tickets);
                    setTicketCounter(ticketCounter-1);
                    
                 }}><br/>Ticket #{i+1} {item.value}<i class="fa fa-trash"></i></p>
                 </div>
        ))}
               </div>
           
       

        </div>

        </div>
    )
}

const style={
    container:{
        display:'flex',
        padding:20,
        width:550,
        height:550,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:5,
        border:'2px solid orange'

    },
    row1:{
        display:'flex',
        flexDirection:'row',
        height:400
    },
    row2:{
        backgroundColor:'orange',
        height:100,
        width:500,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        border:'2px solid black'
    },
    keypadContainer:{
        display:'flex',
        flexDirection:'column',
         height:400,
         width:250,
         
    },
    autogenerateContainer:{
        backgroundColor:'pink',
        display:'flex',
        width:250,
        border:'1px solid orange'
        
    },
    input:{
        display: 'flex',
        backgroundColor:'black',
        color: 'orange',
        justifyContent: 'center',
        paddingRight: 10, 
        alignItems: 'center',
        height:70,
        width:250,
        fontSize: 30,
        fontWeight: 'bold',
        border:'2px solid orange'
        
    },
   buttonWrapper:{
       width:125,
       height:45,
       fontSize: 20,
       fontWeight: 'bold',
       color:'black',
       border:'1px solid black',
       backgroundColor:'orange'
   },
   addButton:{
    width:250,
    height:60,
    fontSize: 20,
    color:'orange',
    backgroundColor:'black',
    border:'2px solid orange'
    
   },
   ticket:{
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
        height:50,
        width:80,
        padding:3,
        borderRadius:3,
        marginRight:10,
        color:'orange',
        backgroundColor:'black'
   },
   generateImage:{
       width:230,
       borderRadius:200,
       border:'2px solid orange'
   },
   topText:{
    position: 'absolute',
    top: 80,
    left: 648,
    fontSize:10,
    color:'orange'
  },
  bottomText:{
    position: 'absolute',
    top: 360,
    left: 680,
    fontSize:10,
    color:'black',
    backgroundColor:'orange',
    borderRadius:3,
    
  },
  button:{
      backgroundColor:'black',
      border:'1px solid orange'
  },
t1:{
    display:'flex',
    flex:1,
    color:'black'
    // justifyContent:'left',
    // alignItems:'left'

},
t2:{
    display:'flex',
    flex:2,
    flexDirection:'row'
},


}   
export default Keypad;
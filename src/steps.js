import React , {Component} from 'react' ;
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Steps.css'
import TextField from '@material-ui/core/TextField/TextField';
class steps extends Component{

    constructor(props) {
    super(props) ;

    this.state = { 
    cur_state_positon : 0 ,
      
    ison : true  , 
    isonn : false 
    }
   
}

  next = () => {
     const {cur_state_positon , ison} = this.state
      var ti;
      var curstate = cur_state_positon ; 
      if(cur_state_positon >=this.props.data.length - 1)
      {
        
      ti = true ;
     curstate = cur_state_positon ;

    }
    else {
        curstate = cur_state_positon + 1 ;
      ti = false
    }
    this.setState({
        cur_state_positon : curstate, 
        ison : false , 
        isonn : ti
    })
 }   





 prev = () => {

    const {cur_state_positon , ison} = this.state 
    
    var t1 ; 
     let curstateone = cur_state_positon ;
    if(cur_state_positon === 0 ) {
        t1 = true ;
        curstateone = cur_state_positon ;
    }
    else {

        t1 = false ;
        curstateone = cur_state_positon - 1 ;
    } 

     this.setState({
          cur_state_positon : curstateone, 
          ison : t1 , 
          isonn : false 
     })

 }

  generateTypeInput = (input , key) => {

    return (
        <TextField 
         type = {input.type} 
        
         required={input.characterstics.required ? true : false}
         min={input.characterstics.min}
         max = {input.characterstics.max}
     />
    )
    
  }

  generateTypeRadio = () => {

  }

  generateTypeText = () => {

  }

  generatTypeTextArea = () => {

  }

  generateTypeCheckbox = () => {

  }

 generatetype = () => {
          
   const {data = {} } = this.props ; 
   const {cur_state_positon} = this.state ;
   const step = data.length > cur_state_positon ? data[cur_state_positon] : 0 
   const {title = ""} = step 
   console.log(step)
   var form = []
      for(var i = 0; i< step.inputs.length ; i++)
      {
     
       console.log(step.inputs[i].type)
      
          switch(step.inputs[i].type) {

            case 'text' :  
                    form.push( <div>  <input type = "text"></input> </div>) 

                    case 'textarea' :  
                             form.push(this.generatTypeTextArea(step.input[i] , i));
                             break;

                    case 'number' :  
                                 form.push(this.generateTypeNumber(step.input[i] , i) );
                                 break;

                    case 'checkbox' :  
                                     form.push( this.generateTypeCheckbox(step.input[i] , i));
                                     break;

                    case 'radio' :  
                                form.push(this.generateTypeRadio(step.input[i] , i) );
                                break;

                    case 'input' :  
                              form.push(this.generateTypeInput(step.input[i]) , i);
                              break;

                
          }
      }

      return form
     
 }

    render() {

        
   const {data = {} } = this.props ; 
   const {cur_state_positon} = this.state ;
   const step = data.length > cur_state_positon ? data[cur_state_positon] : 0 
   const {title = ""} = step 
  console.log
     
        return ( 

            <div>
            
            <Card className = "step_card">
            <CardContent>
            <Typography color = "textSecondary">
          {title}
          </Typography>

          {this.generatetype()}
            </CardContent>
            <CardActions>
            
            <Button size="small" onClick = {this.prev} disabled = {this.state.ison} color="primary">
           prev
          </Button>
          
          <Button size="small" color="primary" onClick = {this.next} disabled = {this.state.isonn} variant = "contained">
          Next
         </Button>
           
            
            </CardActions>
            </Card>
            </div>
        ); 

    }
}


export default steps ;
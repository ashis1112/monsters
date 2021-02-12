import  './Cardlist.css'
import Card from '../card/Card'

const Cardlist=(props)=>{
    return(
        <div className='card-list'>
        {
            props.monsters.map((x)=>
              <Card id={x.id} name={x.name} email={x.email} />
            )
        }        
        </div>
    )
}


export default Cardlist
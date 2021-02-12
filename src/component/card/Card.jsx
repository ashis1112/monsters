import './Card.css'

const Card=({id,name,email})=>{
    return(
        <div className='card-container'>
            <img alt="monstar" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h3 id={id}>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card
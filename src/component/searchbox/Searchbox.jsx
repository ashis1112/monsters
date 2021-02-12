
const Searchbox=(props)=>{
    return (
        <div>
          <input className='search' 
          type='search' 
          placeholder='search monstar' 
          onChange={props.handlechange} 
          />

        </div>
    )
}

export default Searchbox
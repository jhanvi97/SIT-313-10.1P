import Star from './img/star.png';
function Card(props)
{
    return(
        <div className="column"> 
            <img src = {props.image} alt = 'staff' />
            <h3>{props.name}</h3>
            <p> {props.position}</p>
            <p> {props.description}</p>
            <div className='ratings'>
            <li><img src={Star} alt="Facebook" /></li>
                <p>{props.ratings}</p>
            </div>
        </div>
    )
}

export default Card
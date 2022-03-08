import React , {useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getOneTour} from '../../Redux/Actions/actions'
import {useParams} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Details() {

    const dispatch = useDispatch()
    let params = useParams() 
    

    useEffect (() => { 
    dispatch (getOneTour(params.id))
    }, [] )

    let tour = useSelector(state => state.Reducers.getOneTour)

    

  return (
    <div>
        {tour?.map(oneTour => 
        <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={oneTour.url_images} />
  <Card.Body>
    <Card.Title>{oneTour.title}</Card.Title>
    <Card.Text>
     {oneTour.description}
    </Card.Text>
  <Link to ="/reservation">  <Button variant="primary">Booking</Button> </Link>
  </Card.Body>
</Card>
      </div>
    
        )
        }
    </div>
  )
}

export default Details
import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../carList';

const RideSelector = (props) => {

    const [rideDuration, setRideDuration] = useState(0)

    const getDirections = (pickupCoordinates, dropoffCoordinates) => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibXVzYWNhbSIsImEiOiJja3ZudHdwbmgzZTdtMnZxNWt0cHFra252In0.AYkWADelISWPEELq8FuFgg",
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }

    useEffect(()=>{
        if(props.pickupCoordinates && props.dropoffCoordinates){
            getDirections(props.pickupCoordinates, props.dropoffCoordinates)
        }

    }, [props.pickupCoordinates, props.dropoffCoordinates])

    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe up for more.
            </Title>
            <CarList>
                {carList.map((car, index)=>(
                <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>{car.multiplier * 5} min away</Time>
                    </CarDetails>
                    <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
    overflow-y
`

const Car = tw.div`
    flex p-2 items-center
`

const CarImage = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface CardInfProps {
    url: string;
  }
const CardInf: React.FC<CardInfProps> = ({ url }) =>{

    const [users,setusers] = useState({})

    useEffect(() => {
      axios.get(url)
      .then(res => setusers(res.data))
  
    },[])
  
   

  return (
    <Card placeholder={""} className="w-96 border-2 border-black bg-[#030014] ">
      <CardHeader placeholder={""} floated={false} className="h-80 rounded-[20%] grid justify-center items-center  bg-[url('https://i.pinimg.com/originals/64/5c/8d/645c8d877f6e2aad7fa6545140c72a52.gif')] bg-no-repeat bg-[length:50rem_50rem] bg-center">
        <img src={users.image} alt="profile-picture" className='rounded-full' />
      </CardHeader>
      <CardBody placeholder={""} className="text-center">
        <Typography placeholder={""} variant="h4" color="white" className="mb-2">
          {users.name}
        </Typography>
        <Typography placeholder={""} color="blue-gray" className="font-medium" textGradient>
          {users.location?.name ? users.location.name : 'No habitado'}
        </Typography>
      </CardBody>
      <CardFooter placeholder={""} className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography 
            placeholder={""}
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            {users.gender}
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            className='text-center'
            placeholder={""}
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            {users.species}
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            placeholder={""}
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            {users.status}
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}

export default CardInf
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Definir tipos específicos para los datos que esperas de la API
interface UserData {
  image: string;
  name: string;
  location: {
    name?: string;
  };
  gender: string;
  species: string;
  status: string;
}

interface CardInfProps {
  url: string;
}

const CardInf: React.FC<CardInfProps> = ({ url }) => {
  const [users, setUsers] = useState<UserData | {}>({});

  useEffect(() => {
    axios.get(url).then(res => setUsers(res.data));
  }, [url]);

  return (
    <Card placeholder={""} className="w-96 border-2 border-black bg-[#030014] ">
      <CardHeader
        placeholder={""}
        floated={false}
        className="h-80 rounded-[20%] grid justify-center items-center  bg-[url('https://i.pinimg.com/originals/64/5c/8d/645c8d877f6e2aad7fa6545140c72a52.gif')] bg-no-repeat bg-[length:50rem_50rem] bg-center"
      >
        <img src={(users as UserData).image} alt="profile-picture" className='rounded-full' />
      </CardHeader>
      <CardBody placeholder={""} className="text-center">
        <Typography placeholder={""} variant="h4" color="white" className="mb-2">
          {(users as UserData).name}
        </Typography>
        <Typography
          placeholder={""}
          color="blue-gray"
          className="font-medium"
          textGradient
        >
          {(users as UserData).location?.name ? (users as UserData).location.name : 'No habitado'}
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
            {(users as UserData).gender}
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
            {(users as UserData).species}
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
            {(users as UserData).status}
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default CardInf;

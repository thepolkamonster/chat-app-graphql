import React from 'react'
import {Stack,Avatar, Typography} from '@mui/material'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamSharp';
import { useNavigate } from 'react-router-dom';


const UserCard = ({item:{firstName,lastName,id}}) => {
  const navigate = useNavigate()
  return (
    <Stack
     className="usercard"
     direction="row"
     spacing={2}
     sx={{py:1}}
     onClick={()=>navigate(`/${id}/${firstName} ${lastName}`)}
    >
        <Avatar
         src={`https://api.dicebear.com/7.x/initials/svg?seed=${firstName} ${lastName}&radius=50`}
         sx={{width:"32px",height:"32px"}}
        />
       <Typography varinat="subtitle2">{firstName} {lastName}</Typography>
    </Stack>
  )
}

export default UserCard
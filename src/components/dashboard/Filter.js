import {
  Typography,
  Box,
  Button,
  Avatar,
  Divider,
} from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import EventIcon from '@material-ui/icons/Event';


export const Filter = () => {
  const buttons = ["Hoje","7 dias","15 dias","30 dias"]

  const today = new Date();


  const user = localStorage.getItem('user')

  return(
    <>
      <Box sx={{color: 'text.secondary',display:'flex',  marginTop:20, marginLeft:40}}>
        <Typography variant="h2">
          Olá, {user}
        </Typography>
        <Box sx={{paddingLeft: '50px', display: 'flex', position: 'absolute', left: '61%'}}>
          <Avatar>
            <GetAppIcon>
            </GetAppIcon>
          </Avatar>
          { buttons.map((buttonText, index) => {
            return <Button sx={{color: 'inherit '}} key={index+5} disableElevation>{buttonText}</Button>
          })}
          <Divider sx={{color: 'black', height:'40px', margin:'5px', marginLeft:'10px', marginRight:'10px'}} orientation="vertical" />
          <Avatar>
            <EventIcon />
          </Avatar>
          <Button sx={{color:'green', border: '1px solid green', marginLeft:'10px'}}>FILTRAR</Button>
        </Box>
      </Box>
      <Box>
        <Typography sx={{marginLeft:40, marginTop:2}} variant="h5">
          Aqui está um resumo geral de sua conta entre {today.toLocaleString('pt-br')} e {`${today.getDay() + 1}/${today.getMonth()+2}/${today.getYear()}`}
        </Typography>
      </Box>
    </>
  )
}

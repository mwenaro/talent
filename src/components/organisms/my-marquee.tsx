import Marquee from 'react-fast-marquee'
import { Typography } from '..'

export default function MyMarquee({children}:any) {
  return <Marquee>
    {
    children? children : <Typography variant='h4'>I can be a React component, multiple React components, or just some text.</Typography>}
  </Marquee>
    
  
}

import {Typography, Text, Title} from 'antd'

export default function AppQuote(props) {
    return (
        <div style={{display:'flex', flexDirection:'column', marginBottom: 10}}>
         <Typography.Title level={3} style={{color: '#8B0000'}} >{props.author}</Typography.Title>
         <Typography.Text italic style={{color: '#8B0000'}}>"{props.quote}" (c)</Typography.Text>
        </div>
    )
}
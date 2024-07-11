import { useEffect, useState } from "react";
import AppButton from "./components/AppButton";
import AppQuote from "./components/AppQuote";
import {ConfigProvider} from 'antd'

export default function App() {
    const [quote, setQuote] = useState('')

    function fetchQuote() {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(res => setQuote(res));
    }
    
    useEffect(() => {
        fetchQuote()
    }, [])

    return(
        <div style={{width: '40%', position:'absolute', top: '50%', flexDirection:'column', justifyContent: 'center', alignItem: 'center', border: "solid 2px black", padding: '8px', boxShadow: "10px 5px 5px grey"}}>
        <h1>Random quote generation</h1>
        <AppQuote author={quote.author} quote={quote.quote}/>
        <ConfigProvider 
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#000000',
                        colorPrimaryHover: '#000000',
                        colorPrimaryActive: '#000000'
                    },
                },
            }}>
            <AppButton onClick={fetchQuote}></AppButton>
        </ConfigProvider>
        </div>
    )
}
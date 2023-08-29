import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {


    const [data, setData] = useState([])


    const getData = async () => {
        try {
            const {data: responseData} = await axios.get(url)
            setData(responseData)
        } catch (error) {
            console.log(error)            
        }
    }
    useEffect(() => {
        getData();
    }, [])
    
  return data;
}

export default useFetch
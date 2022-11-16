import { Header } from "../useComponents/Header";
import {useState} from "react";

import { AxiosAdapter } from "../infra/AxiosAdapter";
import { FetchAdapter } from "../infra/FetchAdapter";

export default function Home() {
  
  
  const [data, setData] = useState(null)

  const callApi = async (api: number) => {

    switch (api) {
      case 1:
        setData(null)
        setData(await new FetchAdapter().get('/api/user/users'))
        break;
      case 2:
        setData(null)
        setData(await  new AxiosAdapter().get('/api/user/users'))
        break;
      case 3:
        setData(null)

      default:
        break;
    }
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-between gap-4">
          <button className='bg-brand-primary px-4 rounded-sm' onClick={() => callApi(1)}> ADAPTER FETCH</button>
          <button className='bg-brand-primary px-4 rounded-sm' onClick={() => callApi(2)}> ADAPTER AXIOS</button>
          <button className='bg-red-400 px-4 rounded-sm' onClick={() => callApi(3)}> ADAPTER RESET</button>
        </div>
        {data ? <Header user={data[0]}/> : <div>Escolha o adpter...</div>}
      </div>
    </>
  )

}

import { Header } from "../useComponents/Header";
import useSwr from "swr";
import Link from "next/link";
import { useRouter } from 'next/router'
import { User } from "../entities/user";

export default function Home() {
  const router = useRouter()
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSwr<User[]>(`/api/user/users/`, fetcher)

  console.log(data, 'DATA')

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Header user={data[0]}/>
      <div>
      </div>
      <div className="pt-5 text-4xl">
        PLAY LIST HERE 1
      </div>
      <div className="pt-5 text-4xl">
        PLAY LIST HERE 2
      </div>

      <div className="pt-5 text-4xl">
        CHANNELS FAVORITE
      </div>
    </>
  )
}

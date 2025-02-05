import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "./com";

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // router.replace('/');
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div>
    <span> Hello </span> <br></br>
    You should never see this
    {false?<Header></Header>:null}</div>;
}
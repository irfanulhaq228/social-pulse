"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export default function Home() {
  const [ isSuccess, setIsSuccess ] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      if(user){
        router.push("/user");
        return;
      }
      setIsSuccess(false);
    })();
  }, [router]);
  if (isSuccess) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="background p-5 flex flex-col gap-5">
      <Navbar />
      <ImageSlider height="400px" roundSize="xl" />
    </div>
  );
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");
    return { user: data, error: null };
  } catch (e) {
    const error = e as AxiosError;
    return { user: null, error };
  }
}

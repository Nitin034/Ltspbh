'use client';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import LogoSvg from "@/components/LogoSvg";

export default function LoginPage(){
const router = useRouter()

const [user, setUser] = useState ({
  email: "",
  passcode: "",
  password: "",
})

const [buttonDisabled, setButtonDisabled] = useState(false)

const [loading, setLoading] = useState(false)

const onLogin = async () => {
 try {
  setLoading(true)
  const response = await axios.post("/api/admin/login", user)
  // console.log("Login success" , response.data);
  router.push('/profile');
  
 } catch (error : any) {
  // console.log("Login failed")
  toast.error(error.message)
 }
}

useEffect(() => {
   if(user.email.length > 0 && user.passcode.length > 0 && user.password.length > 0 ){
    setButtonDisabled(false)
   } else {
    setButtonDisabled(true)
   }
}, [user])

  return(
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
     
    
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input relative bg-white dark:bg-black">
      <div className="w-56 h-56 flex mx-auto">
      <LogoSvg/>
      </div>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter Your Email" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="passcode">PassCode</Label>
          <Input id="passcode" value={user.passcode} onChange={(e) => setUser({...user, passcode: e.target.value})} placeholder="Enter Your Uniqe Passcode" type="password" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <Input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} id="password" placeholder="Password" type="password" />
        </LabelInputContainer>
      
      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 my-4 hover:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit" onClick={onLogin}
      >
        {buttonDisabled ? "No Login" : "Login"}
        {/* <BottomGradient /> */}
      </button>
      <Link className="text-black mx-auto flex items-center justify-center " href="/login">Rememaber your password ?<span className="text-blue-500 mx-1">Forgot Password </span></Link>
      <h1 className="text-black mx-auto flex items-center justify-center py-1">{loading ? "Processing" : "Login"}</h1>
    </div>
  </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
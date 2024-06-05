"use client"
import LogoSvg from "@/components/LogoSvg";
import { Spotlight } from "@/components/ui/Spotlight";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PasskeyPage() {
  const router = useRouter()

  const [passkey, setPasskey] = useState({
    interkey: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(0);

  const onPasskey = async () => {
    try {
      setLoading(true)
      setError("") // Reset error message
      if (passkey.interkey === process.env.NEXT_PUBLIC_PASSCODE_KEY) {
        router.push('/signup');
      } else {
        setError("Passkey does not match. Please try again.");
        setPasskey({ interkey: "" }); // Clear input field
        setTimer(300); // 5 minutes timer
        localStorage.setItem('countdownEndTime', (Date.now() + 30000).toString());
// Save end time in localStorage
        setButtonDisabled(true);
      }
    } catch (error: any) {
      console.log("An error occurred:", error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (passkey.interkey.length > 0 && timer === 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [passkey, timer])

  useEffect(() => {
    const storedEndTime = localStorage.getItem('countdownEndTime');
    if (storedEndTime) {
      const remainingTime = Math.max(0, Math.floor((parseInt(storedEndTime) - Date.now()) / 1000));
      if (remainingTime > 0) {
        setTimer(remainingTime);
        setButtonDisabled(true);
      }
    }
  }, []);

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          if (newTimer <= 0) {
            clearInterval(countdown);
            localStorage.removeItem('countdownEndTime');
            setButtonDisabled(false);
          }
          return newTimer;
        });
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer]);

  return (
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
          <Label htmlFor="passcode">PassCode</Label>
          <Input id="passcode" value={passkey.interkey} onChange={(e) => setPasskey({...passkey, interkey: e.target.value})} placeholder="Enter Your Unique Passcode" type="password" />
        </LabelInputContainer>

        {error && <p className="text-red-500">{error}</p>}
        
        <button 
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 my-4 hover:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit" 
          onClick={onPasskey} 
          disabled={buttonDisabled}
        >
            {error && timer > 0 ? `Try again in ${timer} seconds` : (buttonDisabled ? "Enter your unique passkey" : "Submit")}
        </button>
        
        <Link className="text-black mx-auto flex items-center justify-center " href="/login">You have an account Visit<span className="text-blue-500 mx-1"> login </span>page</Link>
        <h1 className="text-black mx-auto flex items-center justify-center py-1">{loading ? "Processing" : "Signup"}</h1>
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

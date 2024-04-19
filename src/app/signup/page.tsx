import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input relative bg-white dark:bg-black">
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter Your Email" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="passcode">PassCode</Label>
            <Input id="password" placeholder="Enter Your Uniqe Passcode" type="password" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" />
          </LabelInputContainer>
        
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 mt-3 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          SignUp
          {/* <BottomGradient /> */}
        </button>
      </div>
    </div>
    
  );
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
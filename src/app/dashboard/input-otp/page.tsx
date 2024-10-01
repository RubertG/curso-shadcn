"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";

export default function Page() {
  const [otp, setOtp] = useState("")

  return (
    <div className="flex flex-col items-center justify-center">
      <InputOTP
        value={otp}
        onChange={setOtp}
        maxLength={6}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p className="mt-4 text-sm">
        OTP: <span className="text-muted-foreground">{otp}</span>
      </p>
    </div>
  );
}

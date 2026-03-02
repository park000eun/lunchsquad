import { SignupContent } from "@/app/feature/signup";
import { signupMetadata } from "@/app/feature/signup/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = signupMetadata;

export default function SignupPage() {
  return <SignupContent />;
}

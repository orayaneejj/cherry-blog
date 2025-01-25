import { NavBar } from "@/components/page-section/NavBar";
import SignUpForm from "@/components/auth/SignUpForm";
function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <NavBar />
      <SignUpForm />
    </div>
  );
}
export default SignUpPage;

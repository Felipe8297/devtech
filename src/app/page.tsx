import { SignIn } from '@/components/SignIn'
import { SignUp } from '@/components/SignUp'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex w-full h-full ">
        <SignIn />
        <SignUp />
      </main>
    </div>
  )
}

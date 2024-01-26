import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div>
      <h1 className="font-3xl ">hello world</h1>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  )
}

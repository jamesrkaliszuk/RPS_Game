import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center  h-40 bg-slate-100 text-black font-primary">
        <div className="flex flex-col justify-center items-center">
          <nav className="w-full mb-10">
            <ul className="loginItems">
              <Link href="/login" className="font-primary">
                <li>Login</li>
              </Link>
              <Link href="/createUser" className="font-primary">
                <li>Create User</li>
              </Link>
            </ul>
          </nav>

          <h1 className="text-5xl">Rock, Paper, Scissors Game</h1>
        </div>
      </header>
    </>
  );
}

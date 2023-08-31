import Link from 'next/link'
import { IconLogo } from './IconLogo'

export function SignIn() {
  return (
    <div className="w-3/5 bg-custom-navy-blue flex flex-col items-center justify-center ">
      <IconLogo />

      <form className="mt-10 flex flex-col gap-7 ">
        <input
          type="email"
          placeholder="Email"
          className="border border-zinc-100 outline-none rounded-md w-96 p-2 bg-custom-navy-blue placeholder:text-zinc-600 font-medium"
        />
        <input
          type="password"
          placeholder="Senha"
          className="border border-zinc-100 outline-none rounded-md w-96 p-2 bg-custom-navy-blue placeholder:text-zinc-600 font-medium "
        />
        <div className="flex gap-1">
          <input type="checkbox" />
          <p className="mr-6 text-zinc-400">Mantenha-me conectado</p>
          <button className="text-custom-orange hover:text-opacity-70 transition-all">
            Esqueceu a senha?
          </button>
        </div>
        <Link
          className="bg-custom-red text-white p-2 rounded-full font-semibold hover:bg-opacity-70 transition-all mt-4 flex justify-center items-center"
          href={'/dashboard'}
        >
          Entrar
        </Link>
      </form>
    </div>
  )
}

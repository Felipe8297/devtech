import Link from 'next/link'
/* eslint-disable react/no-unescaped-entities */

export function SignUp() {
  return (
    <div className="w-2/5 flex bg-custom-navy flex-col items-center justify-center bg-[url(../assets/bg-stars.svg)]">
      <span className="text-white mb-8 font-bold text-5xl">Olá</span>
      <span className="text-white font-semibold text-xl">Bem-vindo.</span>
      <span className="text-white font-semibold text-xl">
        Você está a apenas um passo da sua dashboard.
      </span>

      <form className="mt-16 flex flex-col gap-6 ">
        <span className="text-zinc-400">Não tem uma conta?</span>
        <Link
          href={'/signup'}
          className="border-2 rounded-full p-2 text-zinc-300 font-medium hover:backdrop-brightness-150 transition-all flex items-center justify-center "
        >
          Inscreva-se
        </Link>
      </form>
    </div>
  )
}

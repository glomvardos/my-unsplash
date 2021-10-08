export default function Layout({ children }: Props) {
  return <main className='max-w-7xl mx-auto p-4 sm:p-8'>{children}</main>
}

type Props = {
  children: JSX.Element[] | JSX.Element
}

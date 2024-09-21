import Footer from '~/Components/Footer'
import RegisterHeader from '~/Components/RegisterHeader'

type Props = {
  children: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}


import Layout from './Layout'

type Prop = {
  url: string;
}
export default function Haloasset({url}: Prop) {
  const description = <p>
Halo Asset is a fintech platform where verified users can save, invest and borrow money.
Users can;

  <li>  Create account and get verified </li>
  <li>  Send and recieve money on their wallets</li>
  <li> Save in various forms, such as automated deduction from a linked card periodically</li>
  <li>  Invest into various stocks</li> 
  <li>  Withdraw into an account </li> 
  etc.

    </p>
  return (
    <Layout title={'Hallo Asset'} description={description} link={url} />
  )
}

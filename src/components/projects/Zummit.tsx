
import Layout from './Layout'

type Prop = {
  url: string;
}
export default function Zummit({url}: Prop) {
  const description = <p>
Zummit Africa is an institution for building APIs and AI for businesses and organizations.
It has two wings, 
<li>  Building applications, and
</li>
<li>  Training potential IT experts in various fields.</li>

    </p>
  return (
    <Layout title={'Zummit Africa'} description={description} link={url} />
  )
}

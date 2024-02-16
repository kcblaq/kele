
import Layout from './Layout';

type Props = {
  url: string;
}

export default function GlobalReformation({url}: Props) {
    const description = <p>
       An e-learning platform for global leadership transformation.
       It is a full-featured platform for e-learning, including;
       
        <div className='hidden md:grid'>
        <li> Multi-user category for admin, students and tutors</li>
        <li>  Registration and login</li>
        <li> Taking courses and quizes</li>
        <li>  Uploading and scoring quizes</li>
        <li>  Certificate generation after a succesfull course.</li>
        </div>
      
    </p>
  return (
    <Layout title={'Global Reformation'} description={description} link={url} />
  )
}

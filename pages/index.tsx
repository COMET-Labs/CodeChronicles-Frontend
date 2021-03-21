import Layout from '../components/layouts/default';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div style={{margin:"20px"}}>
        <h1>Code Chronicles</h1>
        <br></br>
        <h2>Landing Page under construction</h2>
        <br></br>
        <h2>Links</h2>
        <br></br>
        <Link href='/login'>Login-Signup</Link>
        <br></br>
        <br></br>
        <Link href='/editProfile'>Edit Profile</Link>
      </div>
    </Layout>
    
  )
}

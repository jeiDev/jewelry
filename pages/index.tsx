import type { NextPage } from 'next'
import Layout from '~/components/layout'
import HomeSection1 from '~/components/pages/home/section1'

const Home: NextPage = () => {
  return (
    <Layout >
      <div className="container">
        <HomeSection1 />
      </div>
    </Layout>
  )
}

export default Home

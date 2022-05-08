import type { NextPage } from 'next'
import Layout from '~/components/layout'
import HomeSection1 from '~/components/pages/home/section1'
import HomeSection2 from '~/components/pages/home/section2'
import HomeSection3 from '~/components/pages/home/section3'
import HomeSection4 from '~/components/pages/home/section4'

const Home: NextPage = () => {
  return (
    <Layout >
      <div className="container">
        <HomeSection1 />
        <article style={{paddingTop: 150}}>
          <h2 style={{paddingBottom: 35, fontSize: "2em", fontWeight: 400}}>Our Services</h2>
          <HomeSection2 />
          <HomeSection3 />
          <HomeSection4 />
        </article>
      </div>
    </Layout>
  )
}

export default Home

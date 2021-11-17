import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="qbahamutp"
          subTitle="Trying out Barcadia with GatsbyJS"
        />
        <BasicTextModule />
        <PerksModule>
          <Perk title="Hmmm, very perky title, yeeees" content="perky title of course needs some perky content" />
        </PerksModule>
        <Features />
      </Layout>
    </>
  )
}

export default Index

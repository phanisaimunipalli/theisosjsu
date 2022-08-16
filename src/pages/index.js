import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import AppointmentCard from 'sections/appointment';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Faq from 'sections/faq';
import OurTeam from 'sections/ourteam';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="ISO-SJSU" />
          <Banner />
          <KeyFeature />
          <CoreFeature />
          <Feature />
          {/* <PartnerSection /> */}
          <WorkFlow />
          <AppointmentCard />
          {/* <SecurePayment /> */}
          {/* <Package /> */}
          <OurTeam/>
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

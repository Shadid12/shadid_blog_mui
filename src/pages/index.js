import React from "react";
import Layout from '../components/Layout';
import SimpleContainer from '../components/Container';
import StoryofDay from '../components/StoryofDay'

export default function Home() {
  return (
    <Layout>
      <SimpleContainer firstChild={StoryofDay()}/>
    </Layout>
  )
}

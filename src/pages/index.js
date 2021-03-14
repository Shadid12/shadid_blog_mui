import React from "react";
import Layout from '../components/Layout';
import SimpleContainer from '../components/Container';
import StoryofDay from '../components/StoryofDay';
import SecondStoryofDay from '../components/topStories';


const stories = [
  {
    'id': 'sajdjww',
    'title': 'Some Cool Story Title I preasume',
    'summary': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`, 
    'date': 'Jan 24, 2020',
    'img': 'https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80'
  },
  {
    'id': 'shadid 24',
    'title': 'Some Cool Story Title I preasume',
    'summary': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`, 
    'date': 'Jul 12, 2020',
    'img': 'https://images.unsplash.com/photo-1558713089-d1aad46c19bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
  },
  {
    'id': 'shadiasdww21',
    'title': 'How to buy Vynyl in the store',
    'summary': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`, 
    'date': 'Jul 12, 2019',
    'img': 'https://images.unsplash.com/photo-1503516459261-40c66117780a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80'
  },
  {
    'id': 'shadisawasdww21',
    'title': 'How to buy milk shake',
    'summary': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`, 
    'date': 'Jul 12, 2019',
    'img': 'https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80'
  }
]


export default function Home() {
  return (
    <Layout>
      <SimpleContainer firstChild={StoryofDay()} stories={stories}/>
    </Layout>
  )
}

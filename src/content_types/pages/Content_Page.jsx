/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from 'react'
import Layout from '../../components/layout'
import NavTabs from './comp/NavTabs'
import Content_model_page from './Content_model_page'
import Content_Tab from './Content_Tab'
import MediaPage from './ApiPage'
import { Redirect } from 'react-router'
import Gallery from './gallery/Gallery'
import {motion} from 'framer-motion'
export default function Content_Page({project}) {
  const [currentTab,setCurrentTab]=useState('content-model')
  // tabs content-model,content
  const changeTab=(ref)=>{
    setCurrentTab(ref)
  }
  return (

  <section>
    <div>
    <NavTabs changeTab={changeTab} currentTab={currentTab}/>
    </div>
    <div className='lg:py-2 lg:w-5/6 lg:mx-auto'>
    {currentTab === 'projects' && (
      <Redirect to='/projects'/>
    )}
      {currentTab === 'content-model' && <Content_model_page project={project}/>}
      {currentTab === 'content-tab' && <Content_Tab project={project}/>}
      {currentTab === 'api-tab' && <MediaPage project={project}/>}
      {currentTab === 'gallery' && (
        <Gallery/>
      )}



    </div>
    
  </section>
    
  )
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from 'react'
import {motion} from 'framer-motion'
import Content_modal from './comp/Content_modal'
import Models from './comp/Models'
import Head from '../../components/seo/Head'

export default function Content_model_page({project}) {
  const [refresh,setRefresh]=useState(false)
  return (
      <motion.div
      initial={{ x: -100,opacity:0.3 }}
      animate={{ x: 0,opacity:1 }}
      >
<Head
        title={` ${project?.project_name}`}
        name={` ${project?.project_name}`}
        content="project"
      />
    <div className="lg:flex lg:items-center lg:justify-between borer-b mb-3">
      <div className="flex-1 min-w-0 py-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl font-mono sm:truncate">
          {/* {
            JSON.stringify(project)
          } */}
          {
            project?.project_name
          }
        </h2>
        <span>
        
        </span>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <Content_modal project={project} refresh={refresh} setRefresh={setRefresh}/>
        </span>

        {/* Dropdown */}
       
      </div>
    </div>
    <hr/>
    <div>
    </div>
    {/* content component goes here */}
    <div className='py-5'>
      <Models project={project} refresh={refresh} setRefresh={setRefresh}/>
    </div>
      </motion.div>
  )
}

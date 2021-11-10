import React from 'react'
import Api_From_Model from './api/Api_From_Model'
import Api_From_Project from './api/Api_From_Project'
import {motion} from 'framer-motion'
function MediaPage({model,project}) {
    return (
        <motion.div className=' p-4 h-full w-full'
        initial={{ x: -100,opacity:0.3 }}
        animate={{ x: 0,opacity:1 }}
        style={{
           minHeight:'100vh',
           
        }}
        >
          {
              model && (
                  <Api_From_Model model={model}/>
              )
          }
          {
              project && (
                  <Api_From_Project project={project}/>
              )
          }
        </motion.div>
    )
}

export default MediaPage

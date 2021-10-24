import React from 'react'
import Api_From_Model from './api/Api_From_Model'
import Api_From_Project from './api/Api_From_Project'

function MediaPage({model,project}) {
    return (
        <div className='bg-gray-100 p-4 h-full w-full'
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
        </div>
    )
}

export default MediaPage

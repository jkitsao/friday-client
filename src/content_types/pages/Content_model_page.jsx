/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Content_modal from './comp/Content_modal'
import Models from './comp/Models'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Content_model_page({project}) {
  const [refresh,setRefresh]=useState(false)
  return (
      <div>

    <div className="lg:flex lg:items-center lg:justify-between borer-b mb-3">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Content Model</h2>
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
      </div>
  )
}
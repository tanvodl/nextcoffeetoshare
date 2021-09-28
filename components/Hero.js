/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'

import ImageSlider from "./ImageSlider"
import { SliderData } from "./SliderData"

export default function Hero() {
  return (
    <div className="relative">
        <ImageSlider slides={SliderData}></ImageSlider>
    </div>
  )
}
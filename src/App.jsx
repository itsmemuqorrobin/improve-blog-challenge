import React from 'react'
import './index.css'
import illustration from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

export function App() {
  return (
    <div class='flex justify-center items-center min-h-screen'>
      <a href='#' class='w-84 bg-white rounded-xl p-5 border group' id='box'>
        <img
          class='rounded-lg mb-5'
          src={illustration}
          alt='SVG Graphic of Notebook with HTML Tag'
        />
        <div class='banner w-fit rounded-sm px-2 py-1 mb-3'>
          <p class='font-bold text-sm'>Learning</p>
        </div>
        <p class='font-medium text-xs figtree mb-3'>Published 21 Dec 2023</p>
        <h1 class='figtree font-bold text-xl mb-3 group-hover:text-yellow-300 transition-all'>
          HTML & CSS foundations
        </h1>
        <p class='figtree font-extralight text-sm mb-4'>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div class='flex flex-row items-center'>
          <img
            src={avatar}
            alt='Image of Greg Hooper Profile Avatar'
            width='30'
          />
          <span class='figtree font-extrabold text-xs ml-3'>Greg Hooper</span>
        </div>
      </a>
    </div>
  )
}

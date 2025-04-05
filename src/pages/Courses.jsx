import React from 'react'
import CourseHero from '../components/courses/CourseHero'
import Company from '../components/courses/Company'
import MasterClass from '../components/courses/MasterClass'
import TrustedBy from '../components/courses/TrustedBy'
import Blueprint from '../components/courses/Blueprint'
import WithUs from '../components/courses/WithUs'
import Card from '../components/courses/card'

const Courses = () => {
  return (
    <>
      <CourseHero />
      <Company />
      <MasterClass />
      <TrustedBy />
      <Blueprint />
      <WithUs />
      <Card />
    </>
  )
}

export default Courses
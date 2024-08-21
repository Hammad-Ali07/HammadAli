"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <div id='project'>
    <section className="relative text-gray-600 body-font custom-background-animation bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <motion.h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-blue-950"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Project Card 1 */}
          <motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript Todo List Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/c1910f95-6d54-4b55-98e0-ddbaa0d0582a.webp")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">Typescript Todo List Project</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Todo List</h3>
                <p className="text-gray-800 mb-4">
                  Efficient To-Do List Application: Streamlining Task Management with TypeScript
                </p>
                <Link href={"https://github.com/Hammad-Ali07/cli-todo-list-project"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript Word Counter Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/download (1).png")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">Typescript Word Counter Project</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Word Counter</h3>
                <p className="text-gray-800 mb-4">
                  Dynamic Word Counter: Accurate Text Analysis with TypeScript Precision
                </p>
                <Link href={"https://github.com/Hammad-Ali07/cli-dynamic-word-counter"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript Calculator Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/images (4).jpg")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">Typescript Calculator Project</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Calculator</h3>
                <p className="text-gray-800 mb-4">
                  Interactive Calculator: Precision and Performance Powered by TypeScript
                </p>
                <Link href={"https://github.com/Hammad-Ali07/cli-calculator-project"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Add more project cards here similarly */}
          <motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript Currency Convertor Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/7.jpg")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">Typescript Currency Convertor Project</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Currency Convertor</h3>
                <p className="text-gray-800 mb-4">
                  Currency Convertor: A Typescript Solution for Real Time Exchange Rate Calculation
                </p>
                <Link href={"https://github.com/Hammad-Ali07/cli-currency-convertor-project"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div><motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript ATM Machine Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/images (5).jpg")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2">Typescript ATM Machine Project</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">ATM Machine</h3>
                <p className="text-gray-800 mb-4">
                  ATM Machine Simulation: A Typescript Project Showcasing Advanced Progamming Techniques
                </p>
                <Link href={"https://github.com/Hammad-Ali07/cli-atm-project"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div><motion.div
            className="lg:w-1/3 sm:w-1/2 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                alt="Typescript Student Managment System Project"
                className="w-full h-64 object-cover object-center"
                src={require("../../../public/assests/picture/0000000.jpg")}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 mb-2"> Student Management SysstemProject</h2>
                <h3 className="text-lg font-semibold text-blue-950 mb-3">Student Management System</h3>
                <p className="text-gray-800 mb-4">
                Student Management System: A TypeScript Project Showcasing Advanced Programming Techniques

</p>
                <Link href={"https://github.com/Hammad-Ali07/student-mangment-system"} target='_blank'>
                  <p className="text-blue-500 underline">View Project</p>
                </Link>
              </div>
            </div>
          </motion.div>
          
        </div>
        
      </div>
      
    </section>
    </div>
  )
}

export default Project

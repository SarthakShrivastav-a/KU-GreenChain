'use client'

import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Shield, BarChart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-500 transition-colors">
          Greenify Chain
        </Link>
        <div className="space-x-4">
          <Button 
            variant="ghost" 
            className="text-green-600 hover:text-green-500 hover:bg-green-100"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <Button variant="ghost" className="text-green-600 hover:text-green-500 hover:bg-green-100">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

function IntroSection({ onGetStarted }) {
  return (
    <div className="relative h-screen w-full flex">
      {/* Left side with 3D globe */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <Spline className="scale-125" scene="https://prod.spline.design/2vbBw2Fh6vWsCn46/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f5e6d3] pointer-events-none" />
      </div>

      {/* Right side with content */}
      <div className="w-1/2 h-full flex items-center justify-center px-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold text-green-800 leading-tight">
            Greenify Chain
          </h1>
          <p className="text-3xl font-light text-green-700 leading-relaxed">
            Empowering Green Futures,{' '}
            <span className="font-semibold">One Token at a Time</span>
          </p>
          <p className="text-lg text-gray-600 max-w-lg">
            Join us in revolutionizing the way we approach sustainability through blockchain technology. 
            Create, trade, and track green credits with unprecedented transparency and efficiency.
          </p>
          <Button 
            onClick={onGetStarted}
            className="group bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function AuthSection() {
  const [activeTab, setActiveTab] = useState('login')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', activeTab)
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <Spline className="absolute inset-0" scene="https://prod.spline.design/2vbBw2Fh6vWsCn46/scene.splinecode" />
      <div className="absolute inset-0 bg-[#f5e6d3] bg-opacity-30 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white shadow-2xl border border-green-200"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="text-lg font-semibold">Login</TabsTrigger>
            <TabsTrigger value="register" className="text-lg font-semibold">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="login-email" className="text-green-800">Email</Label>
                <Input id="login-email" type="email" placeholder="Enter your email" className="mt-1 bg-white border-green-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-green-800">Password</Label>
                <Input id="login-password" type="password" placeholder="Enter your password" className="mt-1 bg-white border-green-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Login</Button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="register-name" className="text-green-800">Full Name</Label>
                <Input id="register-name" type="text" placeholder="Enter your full name" className="mt-1 bg-white border-green-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="register-email" className="text-green-800">Email</Label>
                <Input id="register-email" type="email" placeholder="Enter your email" className="mt-1 bg-white border-green-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="register-password" className="text-green-800">Password</Label>
                <Input id="register-password" type="password" placeholder="Create a password" className="mt-1 bg-white border-green-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Register</Button>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
function AboutSection() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Sustainable Practices",
      description: "Empower organizations to participate in eco-friendly initiatives through our blockchain-based platform."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Secure Transactions",
      description: "Ensure all green credit transactions are secure, transparent, and irreversible with blockchain technology."
    },
    {
      icon: <BarChart className="h-6 w-6 text-green-600" />,
      title: "Thriving Marketplace",
      description: "Create a dynamic ecosystem for trading green credits, fostering growth in sustainable projects."
    }
  ]

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-[#f5e6d3] to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-green-800"
        >
          About Greenify Chain
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-200"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-green-200"
        >
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              At <strong className="text-green-700">Greenify Chain</strong>, we believe that sustainability and transparency should go hand in hand. Our platform leverages the power of blockchain technology to transform how green credits are issued, tracked, and traded. By digitizing the entire process, we create an efficient and secure system that ensures all environmental contributions are accurately recorded and easily accessible.
            </p>
            <p>
              Our mission is to empower organizations to take part in sustainable practices while providing them with a system that encourages accountability. Through blockchain, every transaction is secure, transparent, and irreversible. This means that green credits—once issued—can be easily tracked and traded, creating a thriving marketplace for eco-friendly projects.
            </p>
            <p>
              By offering an easy-to-use application system for green credits, a secure verification process, and a decentralized marketplace, Greenify Chain is paving the way for a more sustainable and accountable future. We envision a world where companies and individuals alike can contribute to a greener planet, all while gaining real value from their efforts. Join us in making a lasting impact—one green credit at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5e6d3] text-gray-800">
      <Header />
      <AnimatePresence mode="wait">
        {!showAuth ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IntroSection onGetStarted={() => setShowAuth(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AuthSection />
          </motion.div>
        )}
      </AnimatePresence>
      <AboutSection />
    </main>
  )
}
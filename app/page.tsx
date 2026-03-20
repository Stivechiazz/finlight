import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main className="space-y-8">
      <h1 className='text-2xl font-bold underline'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard 
          id='123'
          subject="financial_literacy"
          name="Finley the Money Guide"
          topic="Budgeting & Expense Tracking"
          duration={30}
          color="#E8F7FF"
        />

        <CompanionCard
          id="456"
          subject="investing"
          name="Investor Ace"
          topic="Stocks vs Bonds Explained"
          duration={45}
          color="#DD11FF"
        />

        <CompanionCard
          id="789"
          subject="accounting"
          name="Ledger Pro"
          topic="Understanding Financial Statements"
          duration={40}
          color="#FFF4CC" 
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
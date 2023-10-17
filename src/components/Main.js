import React from 'react'
import { ProfitOrLose } from '../hero_subComponents/ProfitOrLose'
import { ProductSell } from '../hero_subComponents/ProductSell'
import { NameAndSearch } from '../hero_subComponents/NameAndSearch'
import { GraphsAnsCharts } from '../hero_subComponents/GraphsAnsCharts'

export const Main = () => {
  return (
    <div class="p-6 ml-[11rem] sm:ml-0 mm:ml-0 bg-slate-100 w-full">
      <div class="p-4 sm:p-1 mm:p-1 rounded-lg dark:border-gray-700">
        <NameAndSearch/>
        <ProfitOrLose/>
        <GraphsAnsCharts/>
        <ProductSell/>

      </div>
    </div>
  )
}

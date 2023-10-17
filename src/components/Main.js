import React from 'react'
import { Name_n_seacrch } from '../hero_subComponents/Name_n_seacrch'
import { ProfitOrLose } from '../hero_subComponents/ProfitOrLose'
import { Graphs_n_Charts } from '../hero_subComponents/Graphs_n_Charts'
import { ProductSell } from '../hero_subComponents/ProductSell'

export const Main = () => {
  return (
    <div class="p-6 ml-[11rem] sm:ml-0 mm:ml-0 bg-slate-100 w-full">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <Name_n_seacrch/>
        <ProfitOrLose/>
        <Graphs_n_Charts/>
        <ProductSell/>

      </div>
    </div>
  )
}

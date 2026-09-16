'use client'

import ErrorTv from "@/components/errorTv"

export default function Error({ retry }) {
    return (
    <div className="container">
        <div className="flex">
            <h2>Não foi encontrada!!</h2>
            <ErrorTv/>
            <button onClick={() => retry('new')}>Tente dnv!</button>
        </div>
    </div>
    


    )
  }
import React, { useState, useEffect, ReactNode } from 'react'

type StripeScriptLoaderProps = {
  children: ReactNode,
  uniqueId: string,
  script: string,
  loader?: ReactNode,
}

type ScriptLoadResult = {
  successful: boolean,
  error?: Event,
}

const StripeScriptLoader: React.FC<StripeScriptLoaderProps> = ({
  children,
  uniqueId,
  script = 'https://js.stripe.com/v3/',
  loader = 'Loading...',
}) => {
  const [stripeLoaded, setStripeLoaded] = useState<ScriptLoadResult>({ successful: false })

  useEffect(() => {
    const loadScript = (src: string, uniqueId: string): Promise<ScriptLoadResult> =>
      new Promise((resolve, reject) => {
        const scriptElement = document.getElementById(uniqueId)

        if (!scriptElement) {
          const script = document.createElement('script')
          script.src = src
          script.id = uniqueId

          const handleLoadScriptSuccess = () => resolve({ successful: true })
          const handleLoadScriptFail = (event: Event) => reject({ error: event })

          script.addEventListener('load', handleLoadScriptSuccess, {
            once: true,
          })
          script.addEventListener('error', handleLoadScriptFail, { once: true })
          document.head.appendChild(script)
        } else {
          resolve({ successful: true })
        }
      })

    const fetchData = async (): Promise<void> => {
      const result = await loadScript(script, uniqueId)
      setStripeLoaded(result)
    }

    fetchData()
  }, []) 

  return stripeLoaded.successful ? <>{children}</> : <>{loader}</>
}

export default StripeScriptLoader
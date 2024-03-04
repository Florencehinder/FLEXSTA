import React, { useEffect } from "react"

const StripeBuyButton = ({ buyButtonId, publishableKey }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true

    // Append script to the body
    document.body.appendChild(script)

    // Clean-up function to remove script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div
      className="stripe-buy-button"
      data-buy-button-id={buyButtonId}
      data-publishable-key={publishableKey}
    ></div>
  )
}

export default StripeBuyButton

// src/components/StripeBuyButton.js
import React, { useEffect, useRef } from "react"

const StripeBuyButton = ({ buyButtonId, publishableKey }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.Stripe && buttonRef.current) {
      const script = document.createElement("script")
      script.src = "https://js.stripe.com/v3/buy-button.js"
      script.async = true

      script.onload = () => {
        const stripeBuyButton = document.createElement("stripe-buy-button")
        stripeBuyButton.setAttribute("buy-button-id", buyButtonId)
        stripeBuyButton.setAttribute("publishable-key", publishableKey)

        buttonRef.current.appendChild(stripeBuyButton)
      }

      document.head.appendChild(script)
    }
  }, [buyButtonId, publishableKey])

  return <div ref={buttonRef} />
}

export default StripeBuyButton

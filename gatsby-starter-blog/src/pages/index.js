import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import flexGIF from "../images/FLEXSTA.gif"
import StripeBuyButton from "../components/StripeBuyButton"

function IndexPage() {
  const handleBuyButtonClick = () => {
    window.open("https://buy.stripe.com/6oEcP9cJge1H4GQ6oy")
  }

  const handleEmailSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log("Form submission started")

    fetch(
      "https://script.google.com/macros/s/AKfycbzvur5MA2zBgq-8TbSXWR9UmkYMygUoVK_zeJ2EC6LD3hJHtUl7i2SK3pPmOOXrV792/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(response => response.text())
      .then(data => {
        console.log("Form submitted successfully")
        // Update UI to reflect form submission success
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }

  return (
    <Layout>
      <Seo title="FLEXSTA - The Portable Monitor Stand" />
      <div className="container mx-auto px-4">
        <header className="text-center py-4">{/* Navigation Links */}</header>
        <main>
          <section className="text-center my-24">
            <h2 className="text-7xl font-thin mb-12">
              YOUR PORTABLE <strong>MONITOR STAND</strong>
            </h2>
            <br></br>
            <button
              onClick={handleBuyButtonClick}
              className="btn bg-black text-white font-normal w-[250px]"
            >
              BUY
            </button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <StaticImage
              src="../images/1.jpg"
              alt="Flexsta Stand"
              placeholder="blurred"
              layout="constrained"
              width={600}
            />
            <br></br>
            {/* Revolutionize Work section */}

            <section>
              <div className="text-center my-48">
                <h2 className="text-4xl font-bold mb-12">
                  REVOLUTIONIZE YOUR WORK-ON-THE-GO!
                </h2>
                <p className="text-2xl mb-12">LIGHT-WEIGHT, PORTABLE, STURDY</p>
                <StripeBuyButton
                  buyButtonId="buy_btn_1Obs0tHpfGX5qyxLpULJt7sA"
                  publishableKey="pk_live_51O17A9HpfGX5qyxLexbJ3hxAMgWUA6RyMTvqQk6QN0e6igh1iMkr4hYRQ7wW0RIiaoieEjNftCNKSODDwSuruaQy00jZQjg1H4"
                />
              </div>
            </section>

            {/* BANA section */}
            <section>
              <div className="text-center my-24">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-12">
                    CARRY LESS. LIVE MORE.
                  </h2>
                  <button
                    onClick={handleBuyButtonClick}
                    className="btn bg-black text-white font-normal w-[250px]"
                  >
                    BUY
                  </button>
                  <div className="my-8 flex justify-center">
                    <StaticImage
                      src="../images/bananaforscale.jpg"
                      alt="Banana for Scale"
                      className="w-1/2 rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ section */}
            <section>
              <div id="faqContent" className="space-y-8 text-center my-24">
                <h2 className="text-3xl font-bold mb-12">
                  FREQUENTLY ASKED QUESTIONS.
                </h2>
                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">
                    Which portable monitors do you recommend?
                  </p>
                  <p className="text-xl">
                    We personally use and recommend the{" "}
                    <a
                      target="_blank"
                      href="https://www.amazon.co.uk/ASUS-ZenScreen-MB16ACE-Portable-Anti-glare/dp/B082CVXQLX/ref=sr_1_3?crid=Z01OAXDL6BRI&amp;dib=eyJ2IjoiMSJ9.UFt4_QS6BAWs4Oi1D6-05tQFSD8241LP2Sjsw3E6UjU09ZlyarQ6sIkj3Y8q5ECBeR4QPNwW33BnAqLBoe0gibcv1Jqr3fQ29MIVOdofBnd4Zt4g-Z4_YFqh2SLg7OEJYgitH9IDvPy6Am7Jgm3X8ckc1_HKUyvICkbGT2-nDNQtm52w1J5xdf-oppsu4OHZCS_iwnnKWk_TB6xkHyqnHoHzFgJU0wJ5X5ZLIfPgQdWSjXb4D_-KaL9RgKLMrChAz6IPJzgmBobwRL4F_c7YKeym3Kc34mvmrvheqhDXos4.Ib6Su89ceztMmgQ17_QAOZoRFL9u2sS5rFiyll4YT-o&amp;dib_tag=se&amp;keywords=asus+zenscreen+MB16ACE&amp;qid=1708252437&amp;s=computers&amp;sprefix=asus+zenscreen+mb16ace%252Ccomputers%252C98&amp;sr=1-3&_encoding=UTF8&tag=fl0739-21&linkCode=ur2&linkId=182bf76f475dfa65055227ec15ef8451&camp=1634&creative=6738"
                      className="underline"
                    >
                      ASUS Zenscreen MB16ACE
                    </a>{" "}
                    or the{" "}
                    <a
                      target="_blank"
                      href="https://www.amazon.co.uk/LG-Electronics-Portable-Type-CTM-Supported/dp/B0C443YJGS/ref=sr_1_1?crid=16IYSDLV46TUE&amp;dib=eyJ2IjoiMSJ9.f5v0q9bpSnIt9234eAoRM4LGlCZc3KbvrHssO9rTlnQPOzi9auCakj40pwEEd2jSmU_WOf_rN9afgjd4lu8lkrCW3BIpvgjwyMA5ZSilp0PVj95Ujf7Ep43QyO0gyne7wsegxkjxvvxDoJLoJA8vmsoHI2gf6S5VZ1PAAMs74HPsfZobY3vXG52-bOYRiMOUZskc-82s3G7Dmg2nNLCW14HzFgJU0wJ5X5ZLIfPgQdWQqbOSmL2ocI_K3BU4vdwXKiaaxtMkBWpFt8fUdIs5ToI8j8ba6td5L-TII31Pl4Y.9FptIsOGpu36C_0OFzrI7YIYt2rJVUSpQVe0tzosDzI&amp;dib_tag=se&amp;keywords=lg+gram+view&amp;qid=1708252327&amp;s=computers&amp;sprefix=lg+gram+view%252Ccomputers%252C112&amp;sr=1-1&_encoding=UTF8&tag=fl0739-21&linkCode=ur2&linkId=55175dabee12768fa64cf720fce4d7e5&camp=1634&creative=6738"
                      className="underline"
                    >
                      LG Gram + View
                    </a>
                    . They are both high quality, lightweight and compact
                    screens that are compatible with the FLEXSTA. Note the above
                    links are amazon affiliates.
                  </p>
                </div>
                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">
                    What is the max height of the portable monitor stand?
                  </p>
                  <p className="text-xl">
                    Extends up to 38 cm high, then you get an extra 10 cm to the
                    top of the screen.
                  </p>
                </div>

                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">How heavy is the stand?</p>
                  <p className="text-xl">
                    250g, the lightest stand you’ll find and it’s ultra compact.
                  </p>
                </div>

                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">
                    How does the monitor attach to the stand?
                  </p>
                  <p className="text-xl">
                    Using a metal plate attachment that glues to the back of
                    your portable monitor and an ultra strong magnet that is
                    attached to the stand for quick pack up and pack down.
                  </p>
                </div>

                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">
                    How much weight can the stand hold?
                  </p>
                  <p className="text-xl ">
                    Portable monitors that are 1 kg or less.
                  </p>
                </div>

                <div className="faq-item mb-8">
                  <p className="text-3xl mb-2">
                    For further questions email flexsta.stands@gmail.com
                  </p>
                </div>
              </div>
            </section>

            {/* GIF section */}
          </section>
          <section>
            <div className="text-center my-24">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">PACK IT AND GO.</h2>
                <div className="my-8 flex justify-center">
                  <img src={flexGIF} alt="Otter dancing with a fish" />
                </div>
              </div>
            </div>
          </section>

          <div className="text-center my-24">
            {/* FAQ, Email Signup Section, etc. */}
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="p-2 text-black"
              />
              <button
                type="submit"
                className="btn bg-black text-white font-normal w-[250px]"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage

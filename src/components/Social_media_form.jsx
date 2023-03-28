import React from 'react'

const Social_media_form = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Social Media Service Form</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
    integrity="sha512-LoZosJUikGwvulNkdfGajfJj5ki5A/+JvzwPc52IF/4QJZq3XXc7KMBJdwizdn/Iy2C1sv3LrSlx+BjGtX9Zig=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <div className="container mx-auto mt-8">
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
      <div className="md:flex">
        <div className="w-full px-4 py-6">
          <div className="text-center font-bold text-xl mb-4">
            Social Media Service Form
            <div class="flex flex-row justify-center items-center gap-2">

            <div>
                  <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png" alt="Instagram" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png" alt="Twitter" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png" alt="LinkedIn" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/2972/PNG/512/tiktok_logo_icon_186896.png" alt="TikTok" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/3658/PNG/512/meta_fb_communication_social_media_katana_facebook_icon_228415.png" alt="Facebook" class="w-6 h-6 my-2" />
                </div>
                </div>
          </div>
          <form
            action="https://formspree.io/f/mqkodvyr"
            method="POST"
            className="mx-auto max-w-lg"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                name="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                name="_replyto"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Your Company Name"
                name="Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                placeholder="How can we help?"
                name="Message"
                defaultValue={""}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Social_media_form
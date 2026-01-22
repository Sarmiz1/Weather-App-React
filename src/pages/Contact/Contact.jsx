function Contact () {

  return (
    <div className="lg:px-[15%] pt-4 md:p-8 lg:py-4 bg-slate-100 dark:bg-slate-200
      text-black dark:text-black/90 min-h-screen">
      <div className="bg-white dark:bg-white/90 p-4">
        <h1 className="text-x font-normal mb-4 md:text-xl">
          Contact Us
        </h1>
        <p className="md:text-[1.2rem]">
          Have a question regarding AccuWeather.com? Try the <span className="text-orange-500 dark:text-orange-700 ">XvasWeather.com</span> Help section for our list of frequently asked questions. If you can't find an answer to your question please fill out the contact form below.
        </p>

        <select name="question type"
            className="h-12 w-full rounded-[.4rem] p-4 bg-slate-200
                dark:bg-slate-300 text-black/50 mt-4">
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Acess Problems
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Billing & Account Issues
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Broken Image or Page
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Report A Typo
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Can't Login To Subscription Site
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Current Conditions Information
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Error Message Received
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
          <option value =''
                className='bg-slate-400 rounded-[.4rem]'>
                  Select Question Type
          </option>
        </select>

        <textarea 
          name="comments" 
          id="comments"
          placeholder="Comments"
          cols={35}
          rows={10}
          minLength={20}
          maxLength={100}
          className="rounded-[.4rem] mt-4 py-2 px-4 bg-slate-200 dark:bg-slate-300 w-full "/>

        <h2 className="text-x font-normal mt-7 mb-4 md:text-xl">ABOUT YOU</h2>
        <p className="md:text-[1.2rem]">Without a valid email address we will be unable to respond to your request. Please ensure that your computer is set to accept emails from "XvasWeather" so that we can ensure the best assistance. </p>

        <div className="flex flex-col gap-4 my-4">
          <input 
            type="email" 
            placeholder="Email Adress"
            className="p-2 rounded-md  bg-slate-200 dark:bg-slate-300 "/>
          <input 
            type="text" 
            placeholder="First Name"
            className="p-2 rounded-md bg-slate-200 dark:bg-slate-300"/>
          <input 
            type="text" 
            placeholder="Last Name"
            className="p-2 rounded-md  bg-slate-200 dark:bg-slate-300"/>
          <input type="text" 
            placeholder="Zip-Code"
            className="p-2 rounded-md  bg-slate-200 dark:bg-slate-300"/>
          <button className="block bg-orange-600  p-3
            rounded-md text-white dark:bg-orange-700 md:text-[1.2rem]">Submit</button>
        </div>

        <p className="md:text-[1.2rem]">All information collected on this page will be used for internal use only. XvasWeather.com will not sell, distribute, or otherwise share your email address with outside organizations.</p>
      </div>
    </div>
  )
} 


export default Contact
import Form from './Components/Form'
import { useForm, useWatch } from 'react-hook-form'
import { useState, useEffect, useRef } from 'react'

function Contact () {

  const [status, setStatus] = useState(null)
  // status: null | "success"

  const justSubmittedRef = useRef(false)

  const {
    register, 
    handleSubmit,
    reset,
    control,
    formState:{
      errors, 
      isSubmitting,
      isSubmitSuccessful
    }
  } = useForm()

  // 👀 watch ALL form values
  const values = useWatch({ control })

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)

    setStatus('success')
    justSubmittedRef.current = true

    reset(undefined, {
      keepIsSubmitSuccessful: true,
    })
  }

  // Scroll to top on successful submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [isSubmitSuccessful])

  // Remove success ONLY when user types (not on reset)
  useEffect(() => {
    if (justSubmittedRef.current) {
      justSubmittedRef.current = false
      return
    }

    if (status === 'success') {
      setStatus(null)
    }
  }, [values])

  return (
    <div className="lg:px-[15%] pt-4 md:p-8 lg:py-4 bg-slate-100 dark:bg-slate-200
      text-black dark:text-black/90 min-h-screen"
    >
      {status === 'success' && (
        <div className="flex justify-center mb-2">
          <p className="text-green-600 mt-4">
            Message sent successfully ✅
          </p>
        </div>
      )}

      <Form 
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}

export default Contact

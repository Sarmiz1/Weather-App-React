function Form({ handleSubmit, onSubmit, register, errors, isSubmitting}) {
  return (
    <form
      className="bg-white p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="mb-4 text-xl">Contact Us</h1>

      <select
        className="h-12 w-full rounded p-4 bg-slate-200 mt-4"
        {...register("type", { required: 'Select a question type' })}
      >
        <option value =''> Select Question Type</option>
        <option value ='Acess Problems'>Acess Problems</option>
        <option value ='Billing & Account Issues'>Billing & Account Issues</option>
        <option value ='Broken Image or Page'>Broken Image or Page</option>
        <option value ='Report A Typo'>Report A Typo</option>
        <option value ="Can't Login To Subscription Site">
          Can't Login To Subscription Site
        </option>
        <option value ='Current Conditions Information'>
          Current Conditions Information
        </option>
        <option value ='Error Message Received'>Error Message Received</option>
        <option value ='Wrong Forcast'>Wrong Forcast</option>
        <option value ='Indentification Issues'>Indentification Issues</option>
        <option value ='Customer Support'>Customer Support</option>
        <option value ='Payment Erorr'> Payment Erorr</option>
      </select>

      {errors.type && 
        <span className="text-red-500 font-medium">
          {errors.type.message}
        </span>
      }

      <textarea
        placeholder="Comments"
        rows={6}
        {...register("comment", {
          required: 'No comment entered',
          minLength:{
              value: 20,
              message: "Comments can't be less than 20 characters"
            },
          maxLength: {
              value: 100,
              message: "Comments should be maximum of 500 characters"
            },
        })}
        className="rounded mt-4 p-4 bg-slate-200 w-full"
      />

      {errors.comment && 
        <span className="text-red-500 font-medium">
          {errors.comment.message}
        </span>
      }

      <h2 className="mt-7 mb-4 text-xl">ABOUT YOU</h2>

      <input
        type="email"
        placeholder="Email Address"
        {...register("email", {
          required: 'Email is required',
          validate: (value) => {
            if(!value.includes('@')) {
              return 'Email must include @'
            }
            return true
            }
          })
        }
        className="p-2 rounded bg-slate-200 w-full mb-4"
      />

      {errors.email && 
        <div className="text-red-500 font-medium -mt-3 mb-4">
          {errors.email.message}
        </div>
      }

      <input
        type="text"
        placeholder="First Name"
        {...register("first_name", {required: "Enter your first name"})}
        className="p-2 rounded bg-slate-200 w-full mb-4"
      />

      {errors.first_name && 
        <div className="text-red-500 font-medium -mt-3 mb-4">
          {errors.first_name.message}
        </div>
      }

      <input
        type="text"
        placeholder="Last Name"
        {...register("last_name", {required: "Enter your last name"})}
        className="p-2 rounded bg-slate-200 w-full mb-4"
      />

      {errors.last_name && 
        <div className="text-red-500 font-medium -mt-3 mb-4">
          {errors.last_name.message}
        </div>
      }

      <input
        type="number"
        placeholder="Zip Code"
        {...register("zip", {
            required: "Zip code is required",
            minLength:{
              value: 5,
              message: 'Zip code must have at least 5 characters'
            },
            maxLength: {
              value: 5,
              message: "Zip code can't have more than 5 characters"
            }
          })
        }
        className="p-2 rounded bg-slate-200 w-full mb-4"
      />

      {errors.zip && 
        <div className="text-red-500 font-medium -mt-3 mb-4">
          {errors.zip.message}
        </div>
      }

      <button 
        disabled={isSubmitting}
        className="bg-orange-600 text-white p-3 rounded w-full">
        {isSubmitting? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}

export default Form;

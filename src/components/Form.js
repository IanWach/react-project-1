import React from 'react'
import '../Form.css'

export default function Form() {
    const formName = "Sign Up Form"
    return(
	    <section className='form-container'>
            <div className='form-h-div'>
				<h1>{formName}</h1>
			</div>
			<form className='form-section'>
				<div className='form-div'>
					<label className='form-label'>Your Name</label><br/>
					<input className='form-input'placeholder='Enter Your Name'/>
                </div>
                <div className='form-div'>
					<label className='form-label'>Your Password</label><br/>
					<input className='form-input'placeholder='Enter Your Password'/>
				</div>
				<button className='form-btn'>Submit</button>
			</form>
		</section>

  )
}

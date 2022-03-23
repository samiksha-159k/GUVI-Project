import React from 'react';

function profile() {
  return (
    <div>
      <h2 className='text-center mt-5'>PROFILE</h2>
        <div className="mt-3 col-6 sa-profile">
  <label for="exampleFormControlInput1" className="form-label ">AGE</label>
  <input type="text" className="form-control col-6" id="exampleFormControlInput1" placeholder="Input age"/>
  <label for="exampleFormControlInput1" className="form-label mt-3">GENDER</label>
  <input type="text" className="form-control col-6" id="exampleFormControlInput1" placeholder="Gender"/>
  <label for="exampleFormControlInput1" className="form-label mt-3">DOB</label>
  <input type="text" className="form-control col-6" id="exampleFormControlInput1" placeholder="DD-MM-YYYY"/>
  <label for="exampleFormControlInput1" className="form-label mt-3">MOBILE</label>
  <input type="text" className="form-control col-6" id="exampleFormControlInput1" placeholder="XXXX"/>
  <a href='/log' className=' sa-logout mt-3'>LOGOUT</a>
</div>

    </div>
  )
}

export default profile
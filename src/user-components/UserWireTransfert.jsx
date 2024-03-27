import React from 'react'

const UserWireTransfert = () => {
  return (
    <div className='pt-5  user-wire-wrapper'>
        <div className="d-flex align-items-center gap-100">
            <h5 className='pt-3 fw-light'> wire fee </h5>
            <div class="form-check ps-5 ms-4">
  <input className="form-check-input ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label className="form-check-label ms-2" for="flexRadioDefault1">
    OUR
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label ms-2" for="flexRadioDefault2">
    Benefecary
  </label>
</div>
        </div>
        <div className="d-flex align-items-center  justify-content-between  mt-2 gap-100">
            <h6 className='pt-3 fw-light' > BENIFICIARY </h6>
            <input type="text" class="form-control" id="beneficiary" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
            <h6 className='pt-3 fw-light ' > ACCOUNT NUMBER </h6>
            <input type="text" class="form-control" id="accountNumber" placeholder=""/>
            
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light'> IBAN </h6>
            <input type="text" class="form-control" id="ibna" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'> SWIFT </h6>
            <input type="text" class="form-control" id="swift" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> REFERENCE </h6>
            <input type="text" class="form-control" id="reference" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> BENEFICIARY BANK </h6>
            <input type="text" class="form-control" id="beneficiaryBank" placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> Amount </h6>
            <input type="text" class="form-control" id="amount" placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> VALUE DATE </h6>
            <input type="date" class="form-control" id="date" placeholder=""/>
        </div>
        <div className="d-flex justify-content-end pe-4">
        <button  className='btn login-btn mt-5'> Continue</button>
        </div>
        
    </div>
  )
}

export default UserWireTransfert
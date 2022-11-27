import React from 'react'
class Footer extends React.Component {
  render() {
    return (
      <footer class="foot py-6 bg-dark">
        <div class="container text-center">
          <div class="row">
            <div class="col-4 text-white">Opening Hours</div>
            <div class="col-4 text-white">Address</div>
            <div class="col-4 text-white">Contact Information</div>
          </div>
          <div class="row">
            <div class="col-4 py-2 text-white">
              <p>
                Monday - Friday
                <br /> 8am - 6pm
              </p>
              <p>
                Saturday - Sunday
                <br /> 6am - 4pm
              </p>
            </div>
            <div class="col-4 py-2 text-white">
              <p>
                #1 Cresent Blvd, <br />
                Belize City, Belize
              </p>
            </div>
            <div class="col-4 py-2 text-white">
              <p>
                Marcel Belisle <br />
                +501 227-2222
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col text-white text-center">
              Copyright © Nature's Select 2022
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer

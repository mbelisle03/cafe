import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'

export default function Alert(props) {
  const alert = useAlert()

  return (
    <Fragment>
      <button
        class="btn btn-outline-primary my-3"
        onClick={() => {
          alert.success('Thank you for your order!')
        }}
      >
        <div class="order px-3">Add to Cart</div>
      </button>
    </Fragment>
  )
}

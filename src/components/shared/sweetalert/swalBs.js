import Swal from 'sweetalert2'

export default class SwalMixins {
  static alert = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary mx-3',
      cancelButton: 'btn btn-danger mx-3'
    },
    buttonsStyling: false
  })

  static danger = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-danger mx-3',
      cancelButton: 'btn btn-primary mx-3'
    },
    buttonsStyling: false
  })
}

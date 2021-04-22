import { ToastrService } from 'ngx-toastr';
export class Notification {

    constructor(public toastr: ToastrService) {
        
    }

    
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  error() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
  fallido() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
  infor() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
  otros() {
    this.toastr.show('Hello world!', 'Toastr fun!');
  }
}

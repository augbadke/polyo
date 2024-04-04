class Modal {
  constructor(wrapperName,btnCloseName,btnOpenName) {
    this.wrapperName = wrapperName;
    this.btnCloseName = btnCloseName;
    this.btnOpenName = btnOpenName;
    
    this.btnClose = null;
    this.btnOpen = null;
    this.wrapper =null;

    this.modalFunction();
  }

  modalFunction() {

    this.btnClose = document.querySelector(`${this.btnCloseName}`);
    this.btnOpen = document.querySelector(`${this.btnOpenName}`);
    this.wrapper = document.querySelector(`${this.wrapperName}`);

    this.btnClose.addEventListener('click', this.close)
    this.wrapper.addEventListener('click', this.close)
    this.btnOpen.addEventListener('click', this.open)

    window.addEventListener('keydown', this.handleKeydown)
  }

  close = () => {
    document.body.style.overflow = '';
    this.wrapper.classList.remove('open')
  }

  open = () => {
    document.body.style.overflow = 'hidden';
    this.wrapper.classList.add('open')
  }

  handleKeydown = (e) => {
    if (e.key==='Escape' && this.wrapper.classList.contains('open')) {
      this.wrapper.classList.remove('open')
    }
  }
}
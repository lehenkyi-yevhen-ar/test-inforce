import MicroModal from "micromodal"
import { useEffect } from "react"

const CreateProduct = () => {
    useEffect(() => {
        MicroModal.init({
          onShow: (modal) =>
            console.info(`${modal.id} is shown`),
          onClose: (modal) =>
            console.info(`${modal.id} is hidden`),
          openTrigger: "data-custom-open",
          closeTrigger: "data-custom-close",
          openClass: "is-open",
          disableScroll: true,
          disableFocus: false,
          awaitOpenAnimation: false,
          awaitCloseAnimation: false,
          debugMode: true,
        })
       
    }, [])
  return (
    <div
      id="modal-1"
      aria-hidden="true"
      className="modal"
    >
      <div
        tabIndex="-1"
        data-custom-close
        className="modal-overlay"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
          className="modal-container"
        >
          <header>
            <h2 id="modal-1-title">
              Modal Title
            </h2>
            <button
              aria-label="Close modal"
              data-custom-close
            >
              ×
            </button>
          </header>
          <main id="modal-1-content">
            FORMIK HERE
          </main>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct

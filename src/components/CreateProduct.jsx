const CreateProduct = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() =>
          document
            .getElementById("my_modal_3")
            .showModal()
        }
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle">
              ✕
            </button>
          </form>
          FORMIK HERE
        </div>
      </dialog>
    </div>
  )
}

export default CreateProduct

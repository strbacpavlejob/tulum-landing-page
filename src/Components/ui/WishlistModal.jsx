import Modal from "@/Components/ui/Modal";
import welcome from "@/assets/welcome.svg";

const WishlistModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={onClose}
        >
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md w-full p-4 md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Join wishlist
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white focus:bg-transparent"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="flex flex-row gap-2 justify-start items-center ">
                <img src={welcome} alt="unicorn wearing party glasses" />
              </div>
              <p className="mb-4 text-sm text-center text-gray-600 dark:text-gray-300">
                Leave us your email and we will notify you when the app is
                available on the App Store and Play Store.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    autoFocus
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-secondary  hover:bg-text-gray focus:ring-4 focus:outline-none focus:bg-secondary  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-text-gray  dark:hover:bg-text-gray dark:focus:ring-blue-800"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default WishlistModal;

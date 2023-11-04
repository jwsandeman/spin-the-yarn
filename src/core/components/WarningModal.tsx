import React from "react"
import { useUIStore } from "../../store/uiStore"

const WarningModal = () => {
  const { showWarning, setShowWarning, setUserAccepted } = useUIStore()

  if (!showWarning) return null

  const handleDelete = () => {
    setUserAccepted(true)
    setShowWarning(false)
  }

  const handleCancel = () => {
    setShowWarning(false)
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Property</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this property? This action cannot be undone.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="delete-btn"
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              id="cancel-btn"
              className="mt-3 px-4 py-2 bg-gray-200 text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WarningModal

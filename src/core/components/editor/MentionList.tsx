import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"

type MentionListProps = {
  items: string[]
  command: (item: string) => void
}

export default forwardRef((props: MentionListProps, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (index: number) => {
    const item = props.items[index]
    console.log("item => ", item)

    if (item) {
      props.command({ id: item })
      // props.command(item)
    }
  }

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length)
  }

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length)
  }

  const enterHandler = () => {
    selectItem(selectedIndex)
  }

  useEffect(() => setSelectedIndex(0), [props.items])

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler()
        return true
      }

      if (event.key === "ArrowDown") {
        downHandler()
        return true
      }

      if (event.key === "Enter") {
        enterHandler()
        return true
      }

      return false
    },
  }))

  return (
    <div className="bg-base-200 rounded-lg shadow-sm text-sm overflow-hidden relative p-1">
      {props.items.length ? (
        props.items.map((item, index) => (
          <button
            className={`bg-transparent border-white rounded-md block w-full text-left p-1 ${
              index === selectedIndex ? "border-white" : ""
            }`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))
      ) : (
        <div className="bg-transparent border-transparent rounded-md block w-full text-left p-1">
          No result
        </div>
      )}
    </div>
  )
})

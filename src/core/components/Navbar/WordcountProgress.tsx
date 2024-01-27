export const WordcountProgress = () => {
  return (
    <div className="grow mx-4">
      <div className="flex flex-col justify-center items-center">
        {/* daisyui progress bar filled 75% */}
        <progress className="progress progress-success w-56 rounded" value={75} max="100">
          {/* <span>Daily word count</span> */}
        </progress>
        <span className="text-sm">Daily word count</span>
      </div>
    </div>
  )
}

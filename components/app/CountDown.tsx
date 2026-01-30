"use client"

import Countdown, { CountdownRenderProps } from "react-countdown"

type CountdownItem = {
  label: string
  value: number
}

export default function UNCountdown() {
  const targetDate = new Date("2030-01-01T00:00:00").getTime()

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="w-full bg-black text-white py-10 px-6 text-center">
          <p className="text-lg md:text-xl font-medium">Time’s up!</p>
        </div>
      )
    }

    const years = Math.floor(days / 365)
    const remainingDays = days % 365

    const data: CountdownItem[] = [
      { label: "Years", value: years },
      { label: "Days", value: remainingDays },
      { label: "Hours", value: hours },
      { label: "Minutes", value: minutes },
      { label: "Seconds", value: seconds },
    ]

    return (
      <div className="w-max  text-white py-10  text-center">
        <p className="text-md md:text-sm font-medium opacity-90 mb-8">
          left in the UN decade of action for our planet
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {data.map((item) => (
            <div key={item.label} className="min-w-content">
              <div className="text-xl md:text-2xl font-bold leading-none tabular-nums">
                {item.value}
              </div>
              <div className="mt-3 text-base md:text-sm opacity-90">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <Countdown date={targetDate} renderer={renderer} />
}
